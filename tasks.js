const serverless = require('serverless-http');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/tasks', function (request, response) {

  const username = request.query.username;

  const tasks = {
    tasks: "buy some milk" + ", go for a run" + ", walk the dog"
  }

  response.json(tasks);

});

module.exports.handler = serverless(app);
