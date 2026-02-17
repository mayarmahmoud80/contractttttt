// src/modules/user/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { IUserService } from './user.service.interface';
import { UserRepository } from './user.repoitory';
import { CreateUserDto } from '../../modules/user/dto/create-user.dto';
import { UpdateUserDto } from '../../modules/user/dto/update-user.dto';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly repository: UserRepository) {}

  async create(dto: CreateUserDto) {
    return this.repository.create(dto);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const user = await this.repository.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, dto: UpdateUserDto) {
    await this.findOne(id); 
    return this.repository.update(id, dto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.repository.remove(id);
  }
}