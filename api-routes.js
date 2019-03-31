const router = require('express').Router();

const cattController = require('./controllers/cattController');

router.route('/catts')
    .get(cattController.index)
    .post(cattController.new);

router.route('/catts/:id')
    .get(cattController.view)
    .put(cattController.update)
    .delete(cattController.delete);

router.get('/', function (req, res) {
    res.json({
        status: 'API Working',
        message: 'Welcome to Catter API!'
    });
});

module.exports = router;
