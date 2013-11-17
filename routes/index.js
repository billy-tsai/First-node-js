
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.Demo = function(reg , res){
    res.render('Demo' , {
        title : '12333',
        header : '456'
    });
};
exports.app = function(reg , res){
    res.render('bootstrap' , {
        title : 'Bootstrap',
        content : 'aaaaa.......'
    });
};