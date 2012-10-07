
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Pretty',url:'pretty.ap01.aws.af.cm' });
};