module.exports = {
  name: 'create-profile-card',
  alias: ['new', 'create', 'generate', 'n'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info, success },
      validateName,
      filesystem,
      installPackages,
      promptDetails
    } = toolbox

    const name = parameters.first

    if (!validateName(name)) {
      return
    }

    const details = await promptDetails({ name })

    const config = {
      main: details.main,
      detail: details.networks.details.values
    }

    const props = { name, config }

    await filesystem.dir(props.name)

    const files = [
      'bin/card.js.ejs',
      'package.json.ejs',
      'README.md.ejs',
      'config.json.ejs',
      '.gitignore.ejs'
    ]

    const filesCopy = files.reduce((acc, file) => {
      const template = `/${file}`
      const target = `${props.name}/${file.replace('.ejs', '')}`
      const gen = generate({ template, target, props })
      return acc.concat([gen])
    }, [])

    await Promise.all(filesCopy)

    filesystem.chmodSync(`${props.name}/bin/card.js`, '755')

    await installPackages(props)

    success(`Generated profile card for ${props.name}`)
    info("Next:")
    info(`cd ${props.name}`)
    info(`npm link ${props.name}`)
    info(props.name) 
    info("Make necessary changes in config.json and npm publish")
  }
}
