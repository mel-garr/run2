const createTransport = require("../utils/emailConfig");

let transporter;

async function initTransporter() {
    if (transporter) return transporter;
    transporter = await createTransport();
    return transporter;
}

async function sendEmail(to, subject, html) {
    const transporter = await initTransporter();

    const info = await transporter.sendEmail({
        from: `"Ascendance Eve" <no-reply@ascendance.com>`,
        to,
        subject,
        html,
    });

    if (process.env.NODE_ENV !== "production"){
        console.log('Preview URL:', require('nodemailer').getTestMessageUrl(info));
    }

    return info;
}

async function sendWelcomeEmail(user) {
    const subject = "Welcome to Ascendance Eve!";
    const html = `
        <h1>Hello ${user.name} 👋</h1>
        <p>Welcome to Ascendance Eve. We're excited to have you on board!</p>
    `;
    return sendEmail(user.email, subject, html);
}

module.exports = {
    sendEmail, sendWelcomeEmail
};
