const chalk = require('chalk')
const boxen = require('boxen')

const boxOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  align: 'center',
  float: 'center',
  borderColor: '#FF729F',
  dimBorder: true
}

const textOptions = {
  label: 'bold',
  value: 'cyanBright'
}

const details = {
  name: 'Agney Menon',
  handle: 'Boy with Silver Wings',
  work: 'Javascript Developer @ Dexlock',
  twitter: 'https://twitter.com/agneymenon',
  github: 'https://github.com/boywithsilverwings',
  linkedin: 'https://linkedin.com/in/agneymenon',
  web: 'https://boywithsilverwings.github.io',
  npx: 'npx boywithsilverwings'
}

const output = chalk`
${details.name} / {${textOptions.value} ${details.handle}}
{${textOptions.label} Work}: {bold ${details.work}}
{${textOptions.label} Twitter}: {${textOptions.value} ${details.twitter}}
{${textOptions.label} Github}: {${textOptions.value} ${details.github}}
{${textOptions.label} Linkedin}: {${textOptions.value} ${details.linkedin}}
{${textOptions.label} Web}: {${textOptions.value} ${details.web}}
{${textOptions.label} npx}: {${textOptions.value} ${details.npx}}
`

console.log(boxen(output, boxOptions))
