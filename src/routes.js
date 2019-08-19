const express = require('express');

const routes = express.Router();

const DevController = require('./controllers/DevController');

const LikeController = require('./controllers/LikeController');

const DislikeController = require('./controllers/DislikeController');

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;


// GET, POST, PUT, DELETE

//routes.get('/', (req, res) => {
    //return res.send('Hello World');
    //return res.json(`Hello ${req.query.name}`);
    //return res.json({message:`Olá ${req.query.name}, tudo bem com você?`});
//});