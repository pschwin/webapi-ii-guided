const express = require('express');

const hubsRouter = require('./hubs/hubs-router.js')

const server = express();


//middleware
server.use(express.json());

//routers
server.use('/api/hubs', hubsRouter)

//sanity check
server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

module.exports = server