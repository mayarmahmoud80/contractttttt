import { Controller, Post, Get, Patch, Delete, Param, Body, Inject } from '@nestjs/common';
import { UserService } from '../../services/users/user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as userServiceInterface from '../../services/users/user.service.interface';


@Controller('users')

export class UserController {
  constructor(@Inject(UserService) private service: userServiceInterface.IUserService) {}
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.service.create(dto);
  }
  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.service.update(+id, dto);
  }
}
