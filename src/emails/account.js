const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//test email
// sgMail.send({
//   to: "tmagin06@gmail.com",
//   from: "tmagin06@gmail.com",
//   subject: "This is the first creation",
//   text: "I hope you get this",
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "tmagin06@gmail.com",
    subject: "test",
    text: `Sup son, ${name} you motherfucking wop cocksucker`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "tmagin06@gmail.com",
    subject: "departure",
    text: `Why are you leaving ${name} ?, goodbye...`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
