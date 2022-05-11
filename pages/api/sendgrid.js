import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'kim.haaga@hoptech.se', // Your email where you'll receive emails
      from: 'kim.haaga@live.se', // your website email address here
      subject: `Walborg Events Form`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
        <body>
          <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>You've got a new mail from ${req.body.fullname} who submitted the form on Walborg Event page.</h3>
            <div>
            <h2>Their name is:</h2>
            <h3>${req.body.fullname}</h3>
            <br>
            <h2>Their Email is:</h2>
            <h3>✉️ ${req.body.email}</h3>
            <br>
            <h2>Their phone number is:</h2>
            <h3>📞 ${req.body.phone}</h3>
            <br>
            <h2>Message:</h2>
            <h3>${req.body.message}</h3>
            <br>
          </div>
        </body>
      </html>`,
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
