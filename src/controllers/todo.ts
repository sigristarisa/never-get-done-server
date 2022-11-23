import { RequestHandler } from "express";
import { Todo } from "../models/todo";
import { sendDataResponse, sendMessageResponse } from "../helpers/responses";

export const createUser: RequestHandler<{
  task: string;
  userId: number;
}> = async (req, res) => {
  const userId = +req.params.userId;
  const { task } = req.body;
  try {
    const createdTodo = await Todo.createTask(task, userId);
    return sendDataResponse(res, 200, createdTodo);
  } catch (error: any) {
    console.error("What happened?: ", error.message);
    return sendMessageResponse(res, 500, "Unable to create todo");
  }
};
