import { RequestHandler } from "express";
import { User } from "../models/user";
import { sendDataResponse, sendMessageResponse } from "../helpers/responses";

export const createUser: RequestHandler<{ name: string }> = async (
  req,
  res
) => {
  const userName = req.params.name;
  try {
    const createdUser = await User.createUser(userName);
    console.log("in controller", createdUser);
    return sendDataResponse(res, 200, createdUser);
  } catch (error: any) {
    console.error("What happened?: ", error.message);
    return sendMessageResponse(res, 500, "Unable to create user");
  }
};
