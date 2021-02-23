import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async (req, res) => {
  const { name, mail, text } = req.body;

  return transporter
    .sendMail({
      from: "homepage@johann-masken.at",
      to: "office@johann-masken.at",
      subject: `Kontakt: ${name} via johann-masken.at`,
      replyTo: mail,
      text: text,
    })
    .then((msg) => res.status(200).json(msg))
    .catch((err) => res.status(500).json(err));
};
