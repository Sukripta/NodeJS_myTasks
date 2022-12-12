import { Body, Controller, Get, Header, Post, Render, Res } from '@nestjs/common';
import { UserService } from './app.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { Response } from 'express';

@Controller()
export class UserController {
  constructor(private _userService: UserService) {}

  emailArr:any = [];
  passArr:any = [];

  // @Get()
  // getHello(): any {
  //   return '';
  //}
  // @Get('/user')
  // @Render('welcome')
  // greet(): any {
  //   {}
  // }


  @Get('/login-page')
  @Render('Login')
  login(): any {
    {};
  }

  @Post('/login-page')
  // @Render('Login')
  @Header('content-type','application/json')
  getLogin(@Body() user: CreateUserDto, @Res() res: Response) {
  // if (user.password === user.email && user.password.trim().length > 0) {
  //     this._userService.valid = true;
  //     this._userService.name = user.username;
  // }
  // return {success: this._userService.valid};
      if (this.emailArr.includes(user.email) && this.passArr.includes(user.password)) {
        this._userService.valid = true;
        this._userService.name = user.email;
        return res.render('welcome.ejs')
      
        return {success: this._userService.valid};
      }
  }

  @Get('/register-page')
  @Render('Register')
  signup(): any {
    {};
  }

  @Post('/register-page')
  @Header('content-type', 'application/json')
    createUser(@Body() body): any {
      console.log(body);
      this.emailArr.push(body.email);
      this.passArr.push(body.password);
    }
  
  @Get('/welcome')
    // @Render('welcome')
    @Header('content-type', 'application/json')
    greet(@Res() res: Response) {
        if (this._userService.valid) {
            res.render('welcome')                //+this._userService.name;
        }
        var message:String ="Not a valid user";
        return message;
    }


}

// import { Controller, Get, Post, Body, Render } from '@nestjs/common';
// import { CreateUserDto } from './dtos/create-user.dto';
// import { UserService } from './app.service';

// @Controller('user')
// export class UserController {
//   constructor(private _userService:UserService){}

//   emailArr:any = [];
//   passArr:any = [];

//   @Get()
//   getHello(): any {
//     return '';
//   }
//   @Get('/login-page')
//   @Render('Login')
//   login(): any {
//     {};
//   }
//   // @Get('/user')
//   // @Render('welcome')
//   // greet(): any {
//   //   {}
//   // }
    
//   @Post('/register-page')
//   createUser(@Body() body): any {
//     console.log(body);
//     this.emailArr.push(body.email);
//     this.passArr.push(body.password);
//   }

//   @Post('/login-page')
//   // @Render('Login')
//   getLogin(@Body() user: CreateUserDto) {
//   // if (user.password === user.email && user.password.trim().length > 0) {
//   //     this._userService.valid = true;
//   //     this._userService.name = user.username;
//   // }
//   // return {success: this._userService.valid};
//       if (this.emailArr.includes(user.email) && this.passArr.includes(user.password)) {
//         this._userService.valid = true;
//         this._userService.name = user.email;
//       }
//       return {success: this._userService.valid};
//   }

//   @Get('/welcome')
//   @Render('welcome')
//   greet() {
//       if (this._userService.valid) {
//           return "Welcome "+this._userService.name;
//       }
//       return "Not a valid user. Please sign up";
//   }
      
// }




