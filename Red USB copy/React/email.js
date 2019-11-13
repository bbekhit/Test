// step 1  note that sendEmail is function created by me which differs from smpt.sendMail
// so there are two setup functions(const smpt && smptTransport) that i added in my created function then i get the mail data to be
// sent by another function(getEmailDatat())

const sendEmail = (to, name, token, type) => {
  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "boutrossamir78@gmail.com",
      pass: process.env.EMAIL_PASS
    }
  });

  const mail = getEmailData(to, name, token, type);

  smtpTransport.sendMail(mail, function(err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent");
    }
    smtpTransport.close();
  });
};
