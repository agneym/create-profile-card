module.exports = toolbox => {
  function installPackages (props) {
    const {
      system: { which, spawn }
    } = toolbox

    const npmPath = which('npm')

    return spawn(`cd ${props.name} && ${npmPath} install && ${npmPath} run --quiet format`, {
      shell: true,
      stdio: 'inherit',
      stderr: 'inherit'
    })
  }

  toolbox.installPackages = installPackages
}
