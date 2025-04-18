import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_USER, SMTP_PASS, EMAIL_RECEIVER } from "./envs"; 
import { mailData } from "../types/mailTypes"; 
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 587, // Port 587 for TLS, 465 for SSL
  secure: false, // true for 465, false for 587
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export const sendEmail = async (data: mailData) => {
  try {
    const info = await transporter.sendMail({
      from: SMTP_USER,
      to: EMAIL_RECEIVER, 
      subject: "Nieuwe Formulier Inzending",
      html: `
        <h2>Nieuwe Formulier Inzending</h2>
        <p><strong>Naam:</strong> ${data.naam} ${data.voornaam}</p>
        <p><strong>Geboortedatum:</strong> ${data.geboortedatum}</p>
        <p><strong>Haarkleur:</strong> <span style="color:${data.haarkleur}">${data.haarkleur}</span></p>
        <p><strong>Lengte:</strong> ${data.lengte} cm</p>
        <p><strong>Geslacht:</strong> ${data.geslacht}</p>
        <p><strong>Opmerking:</strong> ${data.opmerking}</p>
      `,
    });

    console.log(" Email sent successfully:", info.messageId);
  } catch (error) {
    console.error(" Error sending email:", error);
  }
};
