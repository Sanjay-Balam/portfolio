import nodemailer from "nodemailer";

// Clean the email address by removing any comments
const cleanEmail = (email: string | undefined) => {
  if (!email) return "";
  return email.split("#")[0].trim();
};

export const emailTransporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: cleanEmail(process.env.EMAIL),
    pass: process.env.EMAIL_PASSWORD?.trim(),
  },
});
