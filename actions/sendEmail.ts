"use server";

import { validateEmail, validateEmailData } from "@/lib/utils";
import { emailTransporter } from "@/lib/emailTransport";
import { UserInfo } from "@/@types/userData";

const MIN_LENGTH = 100; // minimum message length

// Clean the email address by removing any comments
const cleanEmail = (email: string | undefined) => {
  if (!email) return "";
  return email.split("#")[0].trim();
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;
  const subject = formData.get("subject") as string;

  // Validate environment variables first
  if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD || !process.env.RECEIVER_EMAIL) {
    console.error("Missing email configuration:", {
      email: !!process.env.EMAIL,
      password: !!process.env.EMAIL_PASSWORD,
      receiver: !!process.env.RECEIVER_EMAIL
    });
    throw new Error("Email configuration is missing");
  }

  if (!validateEmailData(message.trim(), MIN_LENGTH)) {
    throw new Error("Message is too short");
  }

  if (!validateEmail(senderEmail.trim())) {
    throw new Error("Invalid email");
  }

  try {
    const fromEmail = cleanEmail(process.env.EMAIL);
    const toEmail = cleanEmail(process.env.RECEIVER_EMAIL);

    console.log("Attempting to send email with config:", {
      to: toEmail,
      from: fromEmail,
      subject: `PORTFOLIO WEBSITE - from ${senderEmail.trim()} - ${subject.trim()}`
    });

    const result = await emailTransporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `PORTFOLIO WEBSITE - from ${senderEmail.trim()} - ${subject.trim()}`,
      html: `<div>
        <p>${message.trim()}</p>
        <p>Sent from sanjay's Portfolio Website by ${senderEmail}</p>
      </div>`,
    });

    console.log("Email sent successfully:", result);
    
    return {
      error: false,
      message: "Email sent successfully",
    };
  } catch (error: any) {
    console.error("Failed to send email:", error);
    throw new Error(error.message || "Email could not be sent");
  }
};

// // <p>${JSON.stringify(userData)}</p>
