# Create Profile Card

A CLI for creating a profile card package.

![Image of Profile Card](docs/terminal.png)

# Usage 

```
npm init profile-card name
```
![Steps](docs/steps.gif)

# Customising your card

Inside the generated project, you will find a `config.json` file. 

1. This contains keys for all data that you entered previously. Any change to this file will also change the profile card.

2. The key `boxOptions` contains default configuration for [boxen](https://github.com/sindresorhus/boxen) You can customise it providing any of its [options](https://github.com/sindresorhus/boxen#usage).

3. The key `textOptions` contains defaults for text styling using [chalk](https://github.com/chalk/chalk). You can provide any of the options from [styles](https://github.com/chalk/chalk#styles).
You can also combine options like:

```
{
  "textOptions": {
    "label": "bold.green",
    "value": "underline.redBright"
  }
}
```

# License

MIT - see LICENSE

