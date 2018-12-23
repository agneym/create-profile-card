module.exports = {
  name: 'generate',
  alias: ['g', 'new', 'create', 'n'],
  description: 'Creates a new profile card',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info },
      strings,
    } = toolbox

    const { kebabCase } = strings

    const name = parameters.first

    if (!name || name.length === 0) {
      print.error('You must provide a valid CLI name.')
      print.error('Example: create-profile-card new foo')
      return;
    } else if (!/^[a-z0-9-]+$/.test(props.name)) {
      const validName = kebabCase(props.name)
      print.error(`${name} is not a valid name. Use lower-case and dashes only.`)
      print.error(`Suggested: create-profile-card new ${validName}`)
      return;
    }

    await generate({
      template: 'model.js.ejs',
      target: `models/${name}-model.js`,
      props: { name }
    })

    info(`Generated file at models/${name}-model.js`)
  }
}
