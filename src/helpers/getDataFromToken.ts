import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromToken = (req: NextRequest) => {
  try {
    const encodedToken = req.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(
      encodedToken,
      process.env.TOKEN_SECRET!
    );
    return decodedToken.id;
  } catch (error) {
    throw new Error("Error while getting data from token");
  }
};
