const axios = require("axios");
const core = require("@actions/core");
const exec = require("@actions/exec");
const github = require("@actions/github");

const TASK = {
  manifest: "manifest",
  vote: "vote",
};

async function run() {
  const host = core.getInput("host", { required: true });
  const task = core.getInput("task", { required: true });
  const group = core.getInput("group", { required: true });
  const token = core.getInput("token", { required: true });

  const watch = core.getInput("watch", { required: false });
  const finished = core.getInput("finished", { required: false });
  const workflow = core.getInput("workflow", { required: false });
  const workflowId = core.getInput("workflowId", { required: false });
  const repository = core.getInput("repository", { required: false });

  switch (task) {
    case TASK.manifest:
      const payload1 = { group, watch, token, repository, workflowId };
      try {
        const apiUrl = `${host}/${task}`;
        const response = await axios.post(apiUrl, payload1);
        if (response.status === 200) console.log("Manifest created");
        else console.error("Manifest failed");
      } catch (error) {
        console.error("An error occurred:", error.message);
      }
      break;
    case TASK.vote:
      const payload2 = { group, token, workflow, finished };
      try {
        const apiUrl = `${host}/${task}`;
        const response = await axios.post(apiUrl, payload2);
        if (response.status === 200) console.log("Voting success");
        else console.error("Voting failed");
      } catch (error) {
        console.error("An error occurred:", error.message);
      }
      break;
    default:
      console.error(
        'Wrong vote task, please provide either "manifest" or "vote"'
      );
  }
}

run();

