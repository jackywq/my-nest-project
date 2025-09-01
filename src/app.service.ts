import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  getUsers() {
    return [
      { id: 1, name: '张三', email: 'zhangsan@example.com' },
      { id: 2, name: '李四', email: 'lisi@example.com' },
      { id: 3, name: '王五', email: 'wangwu@example.com' },
    ];
  }
  
  getStatus() {
    return {
      status: 'ok',
      timestamp: new Date(),
      version: '1.0.0',
    };
  }
}
