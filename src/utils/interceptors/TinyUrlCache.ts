import { CacheInterceptor, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class TinyUrlCache extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    return context.getArgs()[0]['keyUrl'];
  }
}
