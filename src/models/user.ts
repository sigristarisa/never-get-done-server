import dbClient from "../helpers/dbClient";
import { UserType } from "../helpers/types";

export class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  static async createUser(user: string) {
    const createdUser: UserType = await dbClient.user.create({
      data: {
        name: user,
      },
    });
    return createdUser;
  }

  static async findUser(user: string) {
    const foundUser: UserType | null = await dbClient.user.findFirst({
      where: { name: user },
      include: {
        todo: true,
      },
    });
    return foundUser;
  }
}
