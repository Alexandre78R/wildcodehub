import { In, Like, Repository } from "typeorm";
import { User, CreateUserInput, UpdateUserInput, ROLE } from "../entities/user.entity";
import { validate } from "class-validator";
import datasource from "../lib/db";
import ProjectsService from "./projects.service";
import { Project } from "../entities/project.entity";

export default class UsersService {
  db: Repository<User>;
  constructor() {
    this.db = datasource.getRepository(User);
  }

  async list() {
    return this.db.find();
  }

  async listByRole(role: ROLE) {
    return this.db.find({
      where: {
        role : role
      }
    });
  }

  async findById (id: number) {
    const user = await this.db.findOne({
      where: { id },
    });

    return user;
  }

  async findByEmail (email: string) {
    const user = await this.db.findOne({
      where: { email },
    });

    return user;
  }

  async findByPseudo (pseudo: string) {
    const user = await this.db.findOne({
      where: { pseudo },
    });

    return user;
  }

  async create (data: CreateUserInput) {
    const newUser = this.db.create({ ...data });
    return await this.db.save(newUser);
  }

  async update (id: number, data: Omit<UpdateUserInput, "id">) {
    const userToUpdate = await this.findById(id);
    if (!userToUpdate) {
      throw new Error("The user does not exist !");
    }
    const userToSave = this.db.merge(userToUpdate, {
      ...data,
    });
    const errors = await validate(userToSave);
    if (errors.length !== 0) {
      console.log(errors);
      throw new Error("Error format data");
    }
    return await this.db.save(userToSave);
  }

  async delete (id: number) {
    const userToDelete = await this.findById(id);
    if (!userToDelete) {
      throw new Error("The user does not exist !");
    }

    return await this.db.remove(userToDelete);
  }

  async listLikedProjects(userId: number) {
    const user = await this.db.findOne({
      where: { id: userId },
      relations: ['likedProjects']
    });
  
    if (!user) {
      throw new Error("User not found!");
    }
  
    return user.likedProjects;
  }

  async likeProject(userId: number, projectId: number) {
    const projectRepository = datasource.getRepository(Project);

    const user = await this.db.findOne({
      where: { id: userId },
      relations: ['likedProjects']
    });

    const project = await projectRepository.findOne({
      where: { id : projectId },
    });

    if (!user || !project) {
      throw new Error("User or project not found!");
    }
    const filterByProjectId = user.likedProjects.filter(likedProject => likedProject.id === projectId);
    
    if (filterByProjectId.length !== 0) {
      throw new Error("Project already liked by the user!");
    }
  
    user.likedProjects.push(project);
    await this.db.save(user);

    return user.likedProjects;
  }

  async dislikeProject(userId: number, projectId: number) {
    const projectRepository = datasource.getRepository(Project);

    const user = await this.db.findOne({
      where: { id: userId },
      relations: ['likedProjects']
    });

     const project = await projectRepository.findOne({
      where: { id : projectId },
    });

    if (!user || !project) {
      throw new Error("User or project not found!");
    }

    const likedProjectIndex = user.likedProjects.findIndex(likedProject => likedProject.id === projectId);
    if (likedProjectIndex === -1) {
      throw new Error("The user did not like this project!");
    }

    user.likedProjects.splice(likedProjectIndex, 1);
    await this.db.save(user);

    return user.likedProjects;
  }
}

