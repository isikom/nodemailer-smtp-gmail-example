/*!
 * Nodemailer SMTP Gmail Example
 * Copyright(c) 2018 Michele Menciassi
 * MIT Licensed
 */

'use strict';

const nodemailer = require("nodemailer");
const config = require("config");

let transporter = nodemailer.createTransport(config.get('transport'));

transporter.on('token', token => {
    console.log('A new access token was generated');
    console.log('User: %s', token.user);
    console.log('Access Token: %s', token.accessToken);
    console.log('Expires: %s', new Date(token.expires));
});

transporter.sendMail(config.get('mail'), (err, info) => {
  if (err)
    return console.log("the email wasn't sent.");

  console.log("the email was successfully sent.");
});
