const router = require('express').Router();

const controllers = require('./controllers');

router.post('/success', controllers.paymentSucess);

module.exports = router;
