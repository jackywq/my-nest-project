// 导入必要的模块和依赖
import { Module } from '@nestjs/common'; // NestJS 核心模块装饰器
import { AppController } from './app.controller'; // 应用程序控制器
import { AppService } from './app.service'; // 应用程序服务
import { ServeStaticModule } from '@nestjs/serve-static'; // 静态文件服务模块
import { join } from 'path'; // Node.js 路径处理工具
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core'; // 应用拦截器和过滤器提供者
import { LoggingInterceptor } from './interceptors/logging.interceptor'; // 日志记录拦截器
import { HttpExceptionFilter } from './filters/http-exception.filter.js'; // HTTP异常过滤器

/**
 * AppModule - 应用程序根模块
 *
 * 这个模块是应用程序的入口模块，负责组织和配置应用程序的所有组件。
 * 使用 @Module 装饰器来定义模块的元数据。
 */
@Module({
  // imports 数组用于导入其他模块
  imports: [
    // 配置静态文件服务模块，用于提供前端静态资源
    ServeStaticModule.forRoot({
      // 设置静态文件的根目录路径
      rootPath: join(__dirname, '..', 'public'), // 指向项目根目录下的 public 文件夹
    }),
  ],
  // controllers 数组用于注册控制器
  controllers: [AppController], // 注册应用程序控制器
  // providers 数组用于注册服务提供者
  providers: [
    AppService, // 注册应用程序服务
    {
      provide: APP_INTERCEPTOR, // 全局拦截器令牌
      useClass: LoggingInterceptor, // 使用日志记录拦截器
    },
    {
      provide: APP_FILTER, // 全局过滤器令牌
      useClass: HttpExceptionFilter, // 使用HTTP异常过滤器
    },
  ],
  // exports 数组用于导出模块中的提供者，使其可供其他模块使用
  exports: [], // 当前模块没有需要导出的提供者
})
/**
 * AppModule 类
 *
 * 这个类代表应用程序的根模块，是 NestJS 应用程序的组织核心。
 * 它负责协调应用程序中的所有组件，包括控制器、服务和其他模块。
 */
export class AppModule {}
