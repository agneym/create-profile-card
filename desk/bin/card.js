#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const config = require("../config.json");

const boxOptions = config.boxOptions;

const textOptions = config.textOptions;

const detail = config.detail;
const main = config.main;

const output = chalk`
${main.name} / {${textOptions.value} ${main.handle}}

{${textOptions.label} Work}: {bold ${main.work}}
${Object.entries(detail).map(item => {
return chalk`{${textOptions.label} ${ item[0] }}: {${textOptions.value} ${item[1]}}`
}).join("\n")}
`;

console.log(boxen(output, boxOptions));