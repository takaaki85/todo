'use strict';
const todoHandler = require('./todo-handler');
const prideHandler = require('./pride-handler');
const learningHandler = require('./learning-handler');
const activelyHandler = require('./actively-handler');

function route(req, res) {
  switch (req.url) {
    case '/todo':
      todoHandler.handle(req, res);
      break;
    case '/pride':
      prideHandler.handle(req, res);
      break;
    case '/learning':
      learningHandler.handle(req, res);
      break;
    case '/actively':
      activelyHandler.handle(req, res);
      break;
    default:
      break;
  }
}

module.exports = {
  route
}