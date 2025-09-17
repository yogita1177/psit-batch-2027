import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const verifyToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log("1 verifyToken");
  const authHeaders = request.headers.authorization;
  if (!authHeaders || !authHeaders.startsWith("Bearer")) {
    return new Error("Token doesn't exist");
  }

  console.log("2 verifyToken");

  const token = authHeaders.split(" ")[1];
  try {
    const res = jwt.verify(
      token!,
      "dOJbhcdcszQTmsBnLfj5lDO56yRhyrmpGgJkc6xrIQY"
    ) as JwtPayload;
    console.log("2 verifyToken");
    console.log(res);
    next();
  } catch (err) {
    console.error("Failed to verify the token.", err);
  }
};
