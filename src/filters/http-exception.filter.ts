import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * HttpExceptionFilter - HTTP异常过滤器
 *
 * 这个过滤器用于捕获和处理应用程序中的所有HTTP异常，
 * 提供统一的错误响应格式和详细的错误日志记录。
 */
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  /**
   * catch - 异常处理核心方法
   * @param exception 捕获的异常对象
   * @param host 参数宿主对象
   */
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // 确定HTTP状态码
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // 获取错误消息
    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    // 构建错误响应
    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message: typeof message === 'string' ? message : (message as any).message,
      error: typeof message === 'object' ? (message as any).error : undefined,
    };

    // 记录错误日志
    console.error(`
[Exception Filter] HTTP异常捕获
├─ 路径: ${request.method} ${request.url}
├─ 状态码: ${status}
├─ 错误信息: ${errorResponse.message}
├─ 时间: ${errorResponse.timestamp}
├─ IP: ${request.ip}
└─ User-Agent: ${request.headers['user-agent'] || 'Unknown'}
`);

    // 发送错误响应
    response.status(status).json(errorResponse);
  }
}
