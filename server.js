const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // Replace with your Gmail address
    pass: "your-email-password", // Replace with your Gmail password or app-specific password
  },
});

// Endpoint to handle form submission
app.post("/send-email", (req, res) => {
  const { name, email, phone, company, description } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com", // Sender address
    to: "gaur.gulshan@gmail.com", // Receiver address
    subject: "New Form Submission", // Subject line
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company}
      Description: ${description}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});