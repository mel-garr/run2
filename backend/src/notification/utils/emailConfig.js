const nodemailer = require('nodemailer')

async function createTransporter() {
    if (process.env.NODE_ENV === 'production'){
        return nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT, 10),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
    }else{
        const testAccount = await nodemailer.createTestAccount();
        console.log('Ethereal test account created. Preview emails at:', testAccount.user);

        return nodemailer.createTransport({
            host: testAccount.smtp.host,
            port: testAccount.smtp.host,
            secure: testAccount.smtp.secure,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });
    }
}

module.exports = createTransporter;