var express = require("express");
var router = express.Router();
var API_KEY = process.env.Mailgun_Api_Key;
var DOMAIN = process.env.Mailgun_Domain;
var EMAIL = process.env.Mailgun_To_Email;
var mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

router.post('/send', (req, res) => {
	const data = {
		from: req.body.email,
		to: EMAIL,
		subject: 'BrianTHart.com Message from ' + req.body.name,
		text: req.body.message
	};

	mailgun.messages().send(data, (error) => {
		if (error) {
			console.log(error);
			res.json({ message: 'error' });
		}
		res.json({ message: 'success' });
	});
});

module.exports = router;