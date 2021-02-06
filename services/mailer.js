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

async function mail({ name, mail, text }) {
  try {
    let msg = await transporter.sendMail({
      from: `"${name} <${mail}>"`,
      to: "man.koell@gmail.com",
      subject: "Kontakt via johann-masken.at",
      text,
    });
  } catch (error) {
    console.log(error);
  }
}

export default mail;
