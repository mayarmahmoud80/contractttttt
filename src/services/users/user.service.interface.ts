
import { CreateUserDto } from '../../modules/user/dto/create-user.dto';
import { UpdateUserDto } from '../../modules/user/dto/update-user.dto';

 
export interface IUserService {
 

  create(dto: CreateUserDto) : Promise<any>;

    findAll() : Promise<any>;

    findOne(id: number) : Promise<any>;

    remove(id: number) : Promise<any>;  
    update(id: number, dto: UpdateUserDto) : Promise<any>;
}
