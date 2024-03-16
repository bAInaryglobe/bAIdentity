import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'your-aws-region' }); // Specify your region

interface EmailData {
    to: string; // or an array of emails
    subject: string;
    html?: string; // For HTML-formatted emails
    text?: string; // For plain text emails
}

export async function sendEmail(emailData: EmailData) {
    try {
        await ses.sendEmail({
            Destination: { ToAddresses: [emailData.to] },
            Message: {
                Subject: { Data: emailData.subject },
                Body: {
                    ...(emailData.html ? { Html: { Data: emailData.html } } : {}),
                    ...(emailData.text ? { Text: { Data: emailData.text } } : {})
                }
            },
            Source: 'your-verified-sender@example.com'
        }).promise();
    } catch (error) {
        console.error('Email sending error:', error);
        // Handle errors appropriately
    }
}
