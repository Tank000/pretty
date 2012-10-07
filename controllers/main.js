
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Pretty',url:'192.168.1.151:3000' });
};