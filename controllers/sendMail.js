const nodemailer = require("nodemailer");

const sendMailFunction = (req, res) => {
  // Credentials for a trusted email service provider (replace with your own)
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use a reliable service like Gmail or SendGrid
    auth: {
      user: "rajagarwalgood@gmail.com",
      pass: "mujy wgvo iyyd bvxe",
    },
  });

  const mailOptions = {
    from: '"Raj Agarwal" <rajagarwalgood@gmail.com>',
    to: "rajagarwalawesom29@gmail.com",
    subject: "Test Email from Node.js",
    text: "This is a plain text email sent using Nodemailer.",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Mail sent", body: info.response });
    }
  });
};

module.exports = sendMailFunction;
