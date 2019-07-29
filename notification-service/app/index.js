const paymentRouter = require('./payment/router');

module.exports = app => {
	app.use('/api/payment', paymentRouter);
};
