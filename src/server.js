const express = require('express');

const server = express();

// GET, POST, PUT, DELETE

server.get('/', (req, res) => {
    //return res.send('Hello World');
    return res.send(`Hello ${req.query.name}`);
});

server.listen(3333);