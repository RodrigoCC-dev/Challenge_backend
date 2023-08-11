import repl from 'repl';
import models from './db/models/index.js';
import sequelize from 'sequelize';

Object.keys(models).forEach(modelName => {
  global[modelName] = models[modelName];
});

global['Op'] = sequelize.Op;

let replServer = repl.start({
  prompt: 'app > '
});

replServer.context.db = models;
