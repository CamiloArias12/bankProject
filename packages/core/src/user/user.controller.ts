import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

export class SignInReqDTO {
  identification: number;
  password: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post('/signin')
  async signIn(@Body() signInReqDTO: SignInReqDTO) {
    return await this.userService.signIn(signInReqDTO);
  }
}
