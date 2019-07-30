const nodemailer = require('nodemailer');

exports.paymentSucess = async (req, res) => {
	console.log('Payment Success');

	// To test
	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'carlos66@ethereal.email',
			pass: 'pq1Ex1ggEGzjd4SjgE'
		}
	});

	let info = await transporter
		.sendMail({
			from: '"Lameco Sanderfoo 👻" <foo@example.com>', // sender address
			to: 'carlos66@ethereal.email, lameck.santos@capgemini.com', // list of receivers
			subject: 'Hello Test✔', // Subject line
			text: 'Hello world?', // plain text body
			html: '<p> <h1 align="center">Hello World</h1></p>' // html body
		})
		.then(s => res.json(s))
		.catch(err => console.log(err));

	console.log('Message sent: %s', info);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
};
