#!/usr/bin/env node
const yargs = require('yargs/yargs')(process.argv.slice(2))

const argv = yargs
  .command('get <source> [proxy]', 'make a get HTTP request', (yargs) => {
    yargs
      .positional('source', {
        describe: 'URL to fetch content from',
        type: 'string',
        default: 'http://www.google.com'
      })
      .positional('proxy', {
        describe: 'optional proxy URL'
      })
  })
  .help().argv

console.log(argv)
