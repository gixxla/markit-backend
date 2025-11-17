import { Controller, Post, Body, HttpException, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";

class RegisterAnonymousDto {
  anonymousId: string;
}

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("anonymous")
  async registerAnonymous(@Body() registrationData: RegisterAnonymousDto) {
    if (!registrationData.anonymousId) {
      throw new HttpException("Anonymous ID is required", HttpStatus.BAD_REQUEST);
    }

    const user = await this.authService.registerAnonymous(registrationData.anonymousId);

    return {
      id: user.id,
      anonymousId: user.anonymousId,
      isRegistered: user.isRegistered,
      createdAt: user.createdAt,
    };
  }
}
