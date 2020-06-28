const { gitP } = require("simple-git");
const { Octokit } = require("@octokit/rest");
const path = require("path");

const REPO_INFO = { owner: "EhTagTranslation", repo: "Database" };
const REPO_PATH = path.resolve(path.join(__dirname, "../.."));
const KEEP_RELEASE = 3;

const AUTH_TOKEN = process.env["GitHub:Token"] || process.env.GITHUB_TOKEN;
const ACTOR = process.env.GITHUB_ACTOR;

async function deleteRelease() {
  const octokit = new Octokit({ auth: AUTH_TOKEN });
  const releases = await octokit.paginate(octokit.repos.listReleases, {
    ...REPO_INFO,
  });
  console.log(`Found ${releases.length} releases`);
  const releases_to_delete = releases.slice(KEEP_RELEASE);
  const releases_to_keep = releases.slice(0, KEEP_RELEASE);
  for (let i = 0; i < releases_to_delete.length; i++) {
    const release = releases_to_delete[i];
    console.log(
      `[${i + 1}/${releases_to_delete.length}] Deleting ${
        release.target_commitish
      }`
    );
    await octokit.repos.deleteRelease({ ...REPO_INFO, release_id: release.id });
  }
}

async function deleteTag() {
  const git = gitP(REPO_PATH);
  const remote = ACTOR
    ? `https://${ACTOR}:${AUTH_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}.git`
    : "origin";
  const tags = (await git.raw(["ls-remote", "--tags", "--sort=-creatordate"]))
    .split("\n")
    .filter((s) => s)
    .map((s) => `v-${s.split("\t")[0]}`);

  console.log(`Found ${tags.length} tags`);
  const old_tags = tags.slice(KEEP_RELEASE);

  if (old_tags.length > 0) {
    console.log(`Deleting ${old_tags.length} tags`);
    console.log(await git.raw(["push", remote, "--delete", ...old_tags]));
    console.log(await git.raw(["tag", "--delete", ...old_tags]));
  }
}

deleteRelease().then(deleteTag).catch(console.error);
