const { build } = require('gluegun')

async function run (argv) {

  const cli = build()
    .brand('create-profile-card')
    .src(__dirname)
    .plugins('./node_modules', {
      matching: 'create-profile-card-*',
      hidden: true
    })
    .help()
    .version()
    .create()

  const toolbox = await cli.run(argv)
  return toolbox
}

module.exports = { run }
