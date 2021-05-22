const { context, getOctokit } = require('@actions/github/lib/github');
console.log('Hello I am action');

const client = getOctokit('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');

const { payload } = context;
const pullNumber = payload.pull_request.number;
const owner = payload.repository.owner.login;
const repo = payload.repository.name;

const result = await client.rest.pulls.listFiles({
  owner,
  repo,
  pull_number: pullNumber
});

console.log(JSON.stringify(result));

process.exit(0);