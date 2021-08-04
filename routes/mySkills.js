var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/skills', function(req, res, next) {
    res.render('mySkills', { title: 'Express' });
});

module.exports = router;