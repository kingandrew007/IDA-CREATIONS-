import nodemailer from 'nodemailer';
import contactInfo from "../models/contact.js";

const postContact = async (req, res) => {
    const { name, emailId, userText } = req.body;

    // Checking if any field is empty
    if (!name || !emailId || !userText) {
        return res.status(400).send({ msg: "All fields are mandatory" });
    }

    try {
        // Save contact information to the database
        await contactInfo.create({ ...req.body });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'romanreignsjohncena@gmail.com',
                pass: 'ioxl lsvv lfsd amil'
            }
        });

        const mailOptions = {
            from: 'romanreignsjohncena@gmail.com',
            to: 'romanreignsjohncena@gmail.com',
            subject: 'Customer message',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                  <h2 style="color: #4CAF50;">Customer Message</h2>
                  <p>I'm ${name},</p>
                  <h1>Message:</h1>
                  <p>${userText}</p>
                  <p>Contact email: ${emailId}</p>
                </div>
            `
        };

        // Sending the email
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error("Error sending email: ", error);
                return res.status(500).send({ msg: "Message not sent due to an error in sending email" });
            } else {
                console.log('Email sent: ' + info.response);
                return res.send({ msg: "We have received your message, we will contact you soon" });
            }
        });

    } catch (err) {
        console.error("Server error: ", err);
        res.status(500).send({ msg: "Message not sent due to server error" });
    }
};

export default postContact;
