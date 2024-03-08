const nodemailer = require("nodemailer");

const sendMailFunction = async (req, res) => {
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
    to: "rajagarwalgood@gmail.com",
    subject: "A question has been asked from your portfolio",
    html: `<div style="font-family: sans-serif">
        <div style="text-align: center">
          <strong style="font-size: xx-large"
            >You got a question to answer</strong
          >
        </div>
        <div style="display: flex; justify-content: center">
          <div
            style="
              border: 1px solid grey;
              padding: 10px;
              text-align: center;
              display: inline-block;
              border-radius: 3%;
              margin-top: 2%;
              line-height: 2;
            "
          >
            <b style="font-size: x-large">Contact Form</b>
            <p>
              Name : ${req.body.name}<br />Email From : ${req.body.email}<br />Subject :
              ${req.body.subject}<br />Message : ${req.body.message}
            </p>
            <p>Thanks,<br />Raj Agarwal</p>
          </div>
        </div>
        <p style="color: grey; text-align: center; margin-top: 4%">
          You're receiving this email because someone has send a message from your
          portfolio contact form.
        </p>
      </div>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        reject(error);
        res.status(400).json({ error: error });
      } else {
        console.log("Email sent:", info.response);
        resolve(info.response);
        res.status(200).json({ message: "Mail sent", body: info.response });
      }
    });
  });
};

module.exports = sendMailFunction;
