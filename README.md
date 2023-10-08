# Workflow Dispatcher

Maintain the state of workflows in a group and invoke a workflow_dispatch withing the project

- host: **application host url ex. "https://example.com"**
- task: **provide remaining route path ex. manifest or vote**
- group: **provide anything name you want to group the workflow status ex. ci**
- token: **provide the pat or token for further request ex. {{ secrets.GITHUB_TOKEN }}**
- watch: **provide the workflow names using commas ex. "ci-product,ci-users"**
- finished: **provide wherther workflow has finised ex. true or false**
- workflow: **provide workflow name ex. custom-workflow-ci**
- workflowId: **provide workflow id or workflow file name ex. ci.yml**
- repository: **provide the repository path ex. username/repository**

```yml
- name: Workflow Dispatcher Running
  uses: gh-actions-projects/workflow-dispatcher@v1.0.0
  with:
    host: https://cute-blue.cyclic.sh
    task: manifest
    group: ci
    token: ${{ secrets.GITHUB_TOKEN }}
    watch: ci-products,ci-users
    finished: false
    workflow: ci-products
    workflowId: ci.yml
    repository: username/nodejs-express-api-app
```
