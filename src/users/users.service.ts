import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto)
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.usersRepository.fi(username);
  // }
  async findOne(username: string): Promise<User> {
    return this.userModel.findOne(
      {
        username: username
      }
    ).exec();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string): Promise<void> {
    await this.userModel.deleteOne({ _id: id });
  }
}
