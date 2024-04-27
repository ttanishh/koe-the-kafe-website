const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail', 'yahoo', etc.
    auth: {
      user: 'ttaniishh@gmail.com',
      pass: 'hjvb kwrg ehwt bkev'
    }
  });

  app.post('/send-email', (req, res) => {
    const { username, eml, contactNo, bookDate, countAdult, countChild } = req.body;
  
    const mailOptions = {
      from: 'your_email@example.com',
      to: eml, // Use the email provided in the form
      subject: 'Reservation Details',
      html: `
        <h3>Reservation Details:</h3>
        <p>Name: ${username}</p>
        <p>Email: ${eml}</p>
        <p>Contact Number: ${contactNo}</p>
        <p>Booking Date: ${bookDate}</p>
        <p>Number of Adults: ${countAdult}</p>
        <p>Number of Children: ${countChild}</p>
      `
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error: Unable to send email');
      } else {
        console.log('Email sent: ' + info.response);
        // res.redirect('http://192.168.150.50:5503/index.html');
        res.status(200).send('Email sent successfully');
      }
    });
  });

// const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});