require('babel-core/register');
const checker = require('./checker').default;
const args = yargs.usage('Usage: $0 [options]')
  .describe('loose', 'Check only that the current node version is greater the required engine version')
  .describe('switch', 'If the node version doesn\'t satisfy the engine version attempt to use the n pacakage manager to switch the current node version to a compliant version.')
  .help('h')
  .argv;

const options = {
  switch: args.switch,
  loose: args.loose
}
try {
  checker(options);
  console.log('info: Node version matches the engine version');
} catch (err) {
  console.log(err.message);
  process.exit(1);
}
