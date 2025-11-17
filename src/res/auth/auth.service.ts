import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async registerAnonymous(anonymousId: string): Promise<User> {
    let newUser = await this.userRepository.findOne({ where: { anonymousId: anonymousId } });

    if (newUser) {
      newUser.lastActiveAt = new Date();
      await this.userRepository.save(newUser);
      return newUser;
    }

    newUser = this.userRepository.create({
      anonymousId: anonymousId,
      isRegistered: false,
      lastActiveAt: new Date(),
    });

    await this.userRepository.save(newUser);
    return newUser;
  }
}
