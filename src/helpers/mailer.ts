import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";

interface SendMailParams {
  email: string;
  emailType: "VERIFY" | "RESET";
  userId: string;
}

export const sendMail = async ({
  email,
  emailType,
  userId,
}: SendMailParams) => {
  try {
    // Create a hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 2400000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 2400000,
      });
    }

    // Use const instead of var
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_USER_PASS,
      },
    });

    const mailOptions = {
      from: "tahirtrk42@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `
      <p style="color: gray; font-size: 16px; margin-bottom: 10px;">
        Click
        <a
          href="https://${process.env.DOMAIN}/${emailType === "VERIFY" ? "verifyemail" : "resetpassword"}?token=${hashedToken}"
          style="color: blue; font-weight: 600; text-decoration: underline;"
        >
          HERE
        </a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}.
      </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    console.error("Mail sending error:", error);
    throw new Error((error as Error).message);
  }
};
