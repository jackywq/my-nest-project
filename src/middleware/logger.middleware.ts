import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * LoggerMiddleware - 日志记录中间件
 *
 * 这个中间件用于记录所有进入应用的HTTP请求信息，包括：
 * - 请求方法
 * - 请求URL
 * - 请求时间
 * - 响应状态码
 * - 处理时间
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  /**
   * use - 中间件核心方法
   * @param req Express请求对象
   * @param res Express响应对象
   * @param next 下一个中间件函数
   */
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const startTime = Date.now();

    // 监听响应完成事件
    res.on('finish', () => {
      const { statusCode } = res;
      const processingTime = Date.now() - startTime;

      // 记录请求日志
      console.log(
        `[${new Date().toISOString()}] ${method} ${originalUrl} - ${statusCode} - ${processingTime}ms`,
      );
    });

    next();
  }
}
