import { Module } from '@nestjs/common';
import { UserService } from '../../services/users/user.service';
import { UserController } from './user.controller';
import { UserRepository } from '../../services/users/user.repoitory';
@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UsersModule {}
