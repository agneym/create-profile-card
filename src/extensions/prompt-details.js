const { prompt } = require("enquirer");

module.exports = toolbox => {

  function promptMain(props) {
    const {
      prompt
    } = toolbox;
    const questions = [{
      message: "Enter your name?",
      name: "name",
      type: "input",
      initial: props.name,
    }, {
      message: "Enter nickname/handle",
      name: "handle",
      type: "input"
    }, {
      message: "Work/Education",
      name: "work",
      type: "input"
    }];
    return prompt.ask(questions);
  }

  function promptNetworkList() {
    return prompt({
      type: 'list',
      required: true,
      message: "List of networks (comma seperated values):",
      name: "networkList",
    })
  }

  function promptNetworks(networks) {
    return prompt({
      type: 'snippet',
      name: 'details',
      message: "Fill fields for networks",
      template: networks.map((network) => (
        `${network}: \${${network} URL}`
      )).join("\n"),
    });
  }

  async function promptDetails(props) {
    const mainResponse = await promptMain(props, prompt);
    const listResponse = await promptNetworkList();
    const detailsResponse = await promptNetworks(listResponse.networkList);
    return {
      main: mainResponse,
      networks: detailsResponse,
    }
  }

  toolbox.promptDetails = promptDetails;
}