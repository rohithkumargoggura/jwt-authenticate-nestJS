import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.model';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/gaudrs/local-auth.guard';
import { JwtAuthGuard } from './auth/gaudrs/jwt-auth.guard';
import { Login } from './login.model';
// import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
// import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('data')
  getData(): string {
    return this.appService.getData();
  }

  @Post('register')
    // @ApiCreatedResponse({ type: UserVm })
    // @ApiBadRequestResponse({ type: ApiException })
    // @ApiOperation(GetOperationId(User.modelName, 'Register'))
    async register(@Body() data: User): Promise<any> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { firstName, lastName } = data;
        return this.appService.getUserData(data);
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Body() req: Login) {
      return this.authService.login(req);
    }
  
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      console.log('User',req.user);
      return req.user;
    }

     

}
