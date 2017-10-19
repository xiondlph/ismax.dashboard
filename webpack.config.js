/**
 * Точка входа для Webpack кофигов
 */

var env;

switch (process.env.NODE_ENV) {
    case 'production':
        env = 'prod';
        break;
    case 'development':
        env = 'dev';
        break;
    default:
        env = 'default';
        break;

}

module.exports = require('./webpack/webpack.' + env + '.js');