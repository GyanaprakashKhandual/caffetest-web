const nodemailer = require('nodemailer');
require('dotenv').config();

const sendWelcomeEmail = async (to, name) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        const mailOptions = {
            from: `"Bug Tracker Team" <${process.env.EMAIL_USER}>`,
            to,
            subject: 'Welcome to Bug Tracker!',
            html: `
                <h2>Hi ${name},</h2>
                <p>Thank you for registering on Bug Tracker.</p>
                <p>You can now report and manage bugs efficiently.</p>
                <br/>
                <p>Best regards,<br/>Bug Tracker Team</p>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendWelcomeEmail;
