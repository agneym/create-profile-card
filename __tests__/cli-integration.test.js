const { system, filesystem } = require('gluegun')
const { resolve } = require('path')

const src = resolve(__dirname, '..')

const cli = async cmd =>
  system.run('node ' + resolve(src, 'bin', 'create-profile-card') + ` ${cmd}`)

test('outputs version', async () => {

  // Original output as terminal control characters that do not match, hence starting and ending characters are removed from original regex. 
  // https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
  const semVerRegex = /(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?/gm;
  const output = await cli('--version');

  expect(semVerRegex.test(output)).toBe(true);
})

test('outputs help', async () => {
  const output = await cli('--help')
  expect(output).toContain('help')
})
