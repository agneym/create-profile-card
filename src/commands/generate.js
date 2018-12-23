module.exports = {
  name: 'generate',
  alias: ['g', 'new', 'create', 'n'],
  description: 'Creates a new profile card',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info },
      validateName,
    } = toolbox;

    const name = parameters.first;
    
    if(!validateName(name)) {
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
