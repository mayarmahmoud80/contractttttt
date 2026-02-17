import { Injectable} from '@nestjs/common';
import * as common from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from '../../modules/user/dto/create-user.dto';
import { UpdateUserDto } from '../../modules/user/dto/update-user.dto';
import { IUserService } from './user.service.interface';

@Injectable()
export class UserService implements IUserService {
  constructor(private prisma: PrismaService) {}

async create(dto: CreateUserDto) {
  try {
    return await this.prisma.user.create({
      data: dto,
    });
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      throw new common.ConflictException('Email already exists');
    }
    throw error;
  }
}

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

    private async findOrFail(id: number) {
    const user = await this.findOne(id);
    if (!user) throw new common.NotFoundException('not found');
    return user; }

  async remove(id: number) {
    await this.findOrFail(id);
    return this.prisma.user.delete({ where: { id } });
  }
  async update(id: number, dto: UpdateUserDto) {
    await this.findOrFail(id);
    return this.prisma.user.update({ where: { id }, data: dto });
  }
  
}
