module.exports = toolbox => {
  
  function validateName(name) {
    const {
      print: { error, info },
      strings: { kebabCase },
    } = toolbox;

    if (!name || name.length === 0) {
      error('You must provide a valid CLI name.');
      info('Example: create-profile-card new foo');
      return false;
    } else if (!/^[a-z0-9-]+$/.test(name)) {
      const validName = kebabCase(name)
      error(`${name} is not a valid name. Use lower-case and dashes only.`);
      info(`Suggested: create-profile-card new ${validName}`);
      return false;
    }
    return true;
  }

  toolbox.validateName = validateName;
}