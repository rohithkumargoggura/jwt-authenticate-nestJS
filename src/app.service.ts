import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getData(): any {
    return {
      name:'Rohith',
      age: 28
    }
  }
  getUserData(data): any {
    return data;
  }
}
