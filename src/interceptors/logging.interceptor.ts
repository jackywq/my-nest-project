import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * LoggingInterceptor - 日志记录拦截器
 *
 * 这个拦截器用于记录API请求的详细信息和响应时间，
 * 在中间件的基础上提供更丰富的请求处理生命周期监控。
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  /**
   * intercept - 拦截器核心方法
   * @param context 执行上下文
   * @param next 下一个调用处理器
   * @returns 可观察对象
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, originalUrl, ip, headers } = request;
    const startTime = Date.now();

    // 记录请求信息
    console.log(`
[Interceptor] 请求接收
├─ 方法: ${method}
├─ URL: ${originalUrl} 
├─ IP: ${ip}
├─ 时间: ${new Date().toISOString()}
└─ User-Agent: ${headers['user-agent'] || 'Unknown'}
`);

    return next.handle().pipe(
      tap({
        next: () => {
          const processingTime = Date.now() - startTime;
          console.log(`
[Interceptor] 响应发送
├─ 方法: ${method}
├─ URL: ${originalUrl}
├─ 状态: 成功
├─ 耗时: ${processingTime}ms
└─ 时间: ${new Date().toISOString()}
`);
        },
        error: (error) => {
          const processingTime = Date.now() - startTime;
          console.log(`
[Interceptor] 响应发送
├─ 方法: ${method}
├─ URL: ${originalUrl} 
├─ 状态: 错误
├─ 错误: ${error.message}
├─ 耗时: ${processingTime}ms
└─ 时间: ${new Date().toISOString()}
`);
        },
      }),
    );
  }
}
