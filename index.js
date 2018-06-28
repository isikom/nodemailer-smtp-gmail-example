/*!
 * Nodemailer SMTP Gmail Example
 * Copyright(c) 2018 Michele Menciassi
 * MIT Licensed
 */

'use strict';

const nodemailer = require("nodemailer");
const config = require("config");

let transporter = nodemailer.createTransport(config.get('transport'));

transporter.sendMail(config.get('mail'), (err, info) => {
  if (err)
    return console.log("the email wasn't sent.");

  console.log("the email was successfully sent.");
});
