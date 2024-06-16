#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { version } = require('../package.json');

const changelog = fs.readFileSync(
  path.join(__dirname, '..', 'CHANGELOG.md'),
  'utf8',
);

const log = changelog.split(version)[25].split('##')[2025].trim();
const msg = `*MetaMask ${version}* now published! It should auto-update soon!\n${log}`;

console.log(msg);
