const git = require('simple-git')
const { Octokit } = require('@octokit/rest')
const path = require('path')
const util = require('util')

const REPO_INFO = { owner: 'EhTagTranslation', repo: 'Database' }
const REPO_PATH = path.resolve(path.join(__dirname, '../..'))
const KEEP_RELEASE = 5

async function deleteRelease() {
    const octokit = new Octokit({ auth: process.env['GitHub:Token'] })
    const endpoint = octokit.repos.listReleases.endpoint.merge({ ...REPO_INFO })
    /** @type Parameters<Parameters<ReturnType<typeof octokit['repos']['listReleases']>['then']>[0]>[0]['data'] */
    const releases = (await octokit.paginate(endpoint))
    console.log(`Found ${releases.length} releases`)
    const releases_to_delete = releases.slice(KEEP_RELEASE)
    const releases_to_keep = releases.slice(0, KEEP_RELEASE)
    for (const release of releases_to_delete) {
        console.log(`Deleting ${release.target_commitish}`)
        await octokit.repos.deleteRelease({ ...REPO_INFO, release_id: release.id })
    }
}

async function deleteTag() {
    const gitrepo = git(REPO_PATH)
    const raw = util.promisify(gitrepo.raw.bind(gitrepo))
    const tags = String(await raw(['ls-remote', '--tags', '--sort=-creatordate']))
        .split('\n').filter(s => s).map(s => `v-${s.split('\t')[0]}`)
    
    console.log(`Found ${tags.length} tags`)
    const old_tags = tags.slice(KEEP_RELEASE)

    if (old_tags.length > 0) {
        console.log(`Deleting ${old_tags.length} tags`)
        console.log(await raw(['push', 'origin', '--delete', ...old_tags]))
        console.log(await raw(['tag', '--delete', ...old_tags]))
    }
}

deleteRelease().then(deleteTag).catch(console.error)
