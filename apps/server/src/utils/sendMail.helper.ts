import nodemailer, { Transporter } from "nodemailer";
import errorHandler from "./errorHandler.helper";

interface IEMailOptions {
  email: string;
  subject: string;
  html: string;
}

const sendMail = async (options: IEMailOptions) => {
  try {
    const transporter: Transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const { email, subject, html } = options;
    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    return new errorHandler("Not able to send activation mail", 550);
  }
};

export default sendMail;
