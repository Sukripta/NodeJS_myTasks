import { CreateUserDto } from './dtos/create-user.dto';
import { Injectable } from '@nestjs/common';

// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }





@Injectable()
export class UserService {
    private user: CreateUserDto = {
        email: "",
        password: "",
        isValid: false,
        username: ''
    };

    // userService.valid = true
    set valid(flag: boolean) {
        this.user.isValid = flag;
    }
    // userService.valid
    get valid(): boolean {
        return this.user.isValid;
    }

    // userService.name = "arun"
    set name(n: string) {
        this.user.email = n;
    }
    // userService.name
    get name(): string {
        return this.user.email;
    }

    isUsernameValid(email:string){
        return false;
    }
}
