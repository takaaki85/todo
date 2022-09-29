'use strict';
const pug = require('pug');

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      const page = 'learning';
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8;'
      });
      res.end(pug.renderFile('./views/card.pug', { page }));
      break;
    case 'POST':
      break;
    case 'DELETE':
      break;
    default:
      break;
  }
}

module.exports = {
  handle
};