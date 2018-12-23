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
      system,
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

    const npmPath = system.which('npm');
    console.log(npmPath);

    await system.spawn(`cd ${props.name} && ${npmPath} install && ${npmPath} run --quiet format`, {
      shell: true,
      stdio: 'inherit',
      stderr: 'inherit',
    });

    info(`Generated profile card`)
  }
}
