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
      filesystem,
      installPackages,
    } = toolbox;

    const name = parameters.first;
    const props = { name };
    
    if(!validateName(name)) {
      return;
    }

    await filesystem.dir(props.name)

    const files = [
      'bin/card.js.ejs',
      'package.json.ejs',
      'README.md.ejs',
      '.gitignore.ejs',
    ];

    const filesCopy = files.reduce((acc, file) => {
      const template = `/${file}`;
      const target = `${props.name}/${file.replace('.ejs', '')}`;
      const gen = generate({ template, target, props });
      return acc.concat([gen]);
    }, []);

    await Promise.all(filesCopy);

    filesystem.chmodSync(`${props.name}/bin/card.js`, '755');

    await installPackages(props);

    info(`Generated profile card`);
  }
}
