var express = require('express');
var router = express.Router();

/* GET add quiz. */
router.get('/', function(req, res) {
    res.render('quiz', { title: 'Add Quiz' });
});
/* GET add quiz. */
router.get('/', function(req, res) {
    res.render('addquiz', { title: 'Add Quiz' });
});
module.exports = router;