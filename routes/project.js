var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/project', function(req, res, next) {
    res.render('project', { title: 'Express' });
});

module.exports = router;