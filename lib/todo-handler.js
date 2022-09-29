'use strict';
const pug = require('pug');

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8;'
      });
      res.end(pug.renderFile('./views/index.pug'));
      break;
    case 'POST':
      break;
    case 'DELETE':
      break;
  }
}

module.exports = {
  handle
};