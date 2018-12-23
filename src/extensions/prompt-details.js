module.exports = toolbox => {

  async function promptDetails(props) {
    const {
      prompt
    } = toolbox;
    const questions = [{
      message: "Enter your name?",
      name: "userName",
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
    const response = await prompt.ask(questions);

  }

  toolbox.promptDetails = promptDetails;
}