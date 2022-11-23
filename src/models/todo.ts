import dbClient from "../helpers/dbClient";
import { TodoType } from "../helpers/types";

export class Todo {
  task: string;

  constructor(task: string) {
    this.task = task;
  }

  static async createTask(todo: string, userId: number) {
    const createdTodo: TodoType = await dbClient.todo.create({
      data: {
        task: todo,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return createdTodo;
  }
}
