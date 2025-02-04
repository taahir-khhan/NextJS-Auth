import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromToken = (req: NextRequest) => {
  try {
    const encodedToken = req.cookies.get("token")?.value || "";
    const decodedToken = jwt.verify(
      encodedToken,
      process.env.TOKEN_SECRET!
    ) as JwtPayload;

    return decodedToken?.id;
  } catch {
    throw new Error("Error while getting data from token");
  }
};
