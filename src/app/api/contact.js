import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, number, subject, message } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider (Gmail, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email, // sender address
        to: process.env.RECEIVER_EMAIL, // receiver email
        subject: `Contact Form Submission: ${subject}`, // Subject line
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${number}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      // Send a success response
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email.' });
    }
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: 'Method not allowed' });
  }
}
