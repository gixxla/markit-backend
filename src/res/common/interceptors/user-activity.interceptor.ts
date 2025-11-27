import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { UserService } from "src/res/user/user.service";

@Injectable()
export class UserActivityInterceptor implements NestInterceptor {
  constructor(private readonly userService: UserService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest();
    const { user } = request;

    if (user && user.id) {
      this.userService.update(user.id, { lastActiveAt: new Date() });
    }

    return next.handle();
  }
}
