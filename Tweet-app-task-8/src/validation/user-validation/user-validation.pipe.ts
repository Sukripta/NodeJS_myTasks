// import { CreateUserDto } from './../../../../../webapp_task_7/online-shop-task-7/src/user/dtos/create-user.dto';
// import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

// @Injectable()
// export class UserValidationPipe implements PipeTransform {
//   transform(value: any, metadata: ArgumentMetadata) {
//     return value;
//   }
// }

import {
  ArgumentMetadata,
  Injectable,
  NotAcceptableException,
  PipeTransform,
} from '@nestjs/common';
// import { CreaterUserDto } from '../user.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateUserDto } from 'src/dtos/create-user.dto';
@Injectable()
export class UserValidationPipe implements PipeTransform {
  

  async transform(value: any, metadata: ArgumentMetadata) {
    console.log('Reading value in transform method of pipe');
    console.log(value);
    const userInstance = plainToInstance(CreateUserDto, value);
    console.log(userInstance);

    const errors = await validate(userInstance);
    if (errors.length > 0) {
      console.log('validation failed. errors: ', JSON.stringify(errors));
      throw new NotAcceptableException(errors);
    } else {
      console.log('validation succeed');
      return value;
    }
  }
}

