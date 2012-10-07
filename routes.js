var main      = require('./controllers/main');

/**
 * 以下是路由的处理
 * @param  {[type]} app [description]
 * @return {[type]}     [description]
 */
exports = module.exports = function(app) {
    app.get('/', main.index);
}