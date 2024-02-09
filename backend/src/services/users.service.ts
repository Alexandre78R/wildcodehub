import { In, Like, Repository } from "typeorm";
import { User, CreateUserInput, UpdateUserInput } from "../entities/user.entity";
import { validate } from "class-validator";
import datasource from "../lib/db";
//import { aggregateErrors } from "../lib/utilities";
// import AggregateError from "aggregate-error";

export default class UsersService {
  db: Repository<User>;
  constructor() {
    this.db = datasource.getRepository(User);
  }
  async list() {
    return this.db.find();
  }

  async find(id: number) {
    const user = await this.db.findOne({
      where: { id },
    });

    return user;
  }

  async create(data: CreateUserInput) {
    const newUser = this.db.create({ ...data });
    return await this.db.save(newUser);
  }

  async update(id: number, data: Omit<UpdateUserInput, "id">) {
    const userToUpdate = await this.find(id);
    if (!userToUpdate) {
      throw new Error("L'user n'existe pas!");
    }
    const userToSave = this.db.merge(userToUpdate, {
      ...data,
    });
    const errors = await validate(userToSave);
    if (errors.length !== 0) {
      console.log(errors);
      throw new Error("il y a eu une erreur");
    }
    return await this.db.save(userToSave);
  }
}
