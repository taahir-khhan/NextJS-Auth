import { connect } from "@/DBConfig/dbConfig";
import { sendMail } from "@/helpers/mailer";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    // Ensure email is provided
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Fix: Await the database query
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User not found with this email" },
        { status: 404 }
      );
    }

    // Send reset email
    await sendMail({ email, emailType: "RESET", userId: user._id });

    return NextResponse.json(
      { message: "Reset email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error in forgot password:", error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
