# Web Development Profile made in React.js and Node.js

## Setting up a development environment
* clone the repository
* cd into the root directory and run 'npm install'
* cd into client and run 'npm install'

* to send messages you will need to have or create a [Mailgun](https://app.mailgun.com) account with a verified domain.
* create a .env file in the root directory and add the following environment variables:
  * Mailgun_Api_Key=your_mailgun_api_key
  * Mailgun_Domain=your_mailgun_domain
  * Mailgun_To_Email=the_email_to_send_messages_to

## Start the dev server
* in the root directory, run 'npm start'. This will start the server and open the browser.
