const { Octokit } = require("@octokit/rest");
const { createAppAuth } = require("@octokit/auth-app");

async function main() {
  const octokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      id: Number.parseInt(process.env.APP_ID),
      privateKey: process.env.APP_KEY,
      installationId: Number.parseInt(process.env.APP_INSTALLATION_ID),
      clientId: process.env.APP_CLIENT_ID,
      clientSecret: process.env.APP_CLIENT_SECRET,
    },
  });
  const tokenRes = await octokit.apps.createInstallationAccessToken({
    installation_id: Number.parseInt(process.env.APP_INSTALLATION_ID),
  });
  const token = tokenRes.data.token;
  process.stdout.write(`::set-env name=APP_TOKEN::${token}\n`);
}

main();
