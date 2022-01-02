// Dependencies
var express = require("express");
var path = require("path");
var router = express.Router();
const axios = require('axios');

router.post('/send', (req, res) => {
    const SECRET = process.env.Contact_Secret;
    const PROFILE_API_URL= process.env.Profile_Api_Url;

	const data = {
		email: req.body.email,
        message: req.body.message,
        name: req.body.name,
		secret: SECRET
	};

    axios.get(PROFILE_API_URL, {params: data})
    .then(response => {
        res.json({
            status: response.status,
            statusText: response.statusText,
            message: response.data
        });
    })
    .catch(err => {
        res.json({ message: err.message });
    })

});

module.exports = router;