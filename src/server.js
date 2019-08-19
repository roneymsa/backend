const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const server = express();
const cors = require('cors');

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-54oh8.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
server.use(cors());

server.use(express.json());

server.use(routes);

server.listen(3333);