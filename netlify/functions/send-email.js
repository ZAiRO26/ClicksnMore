const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { firstName, lastName, email, phone, eventDate, serviceType, budget, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail', // Or use 'host', 'port' etc. if not using Gmail
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `"${firstName} ${lastName}" <${email}>`,
        to: process.env.EMAIL_USER, // Send TO yourself
        subject: `New Inquiry: ${serviceType} - ${firstName} ${lastName}`,
        text: `
            New connection from ClicksnMore Contact Form!
            
            Name: ${firstName} ${lastName}
            Email: ${email}
            Phone: ${phone}
            Event Date: ${eventDate}
            Service Type: ${serviceType}
            Budget: ${budget}
            
            Message:
            ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' })
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email', error: error.toString() })
        };
    }
};
