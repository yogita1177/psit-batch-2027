import { sign } from "crypto";
import { User } from "../model/User";
import { UserService } from "./UserService";
import bcrypt from "bcrypt";

export class AuthService {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async signUp(signUpRequest: User): Promise<User | null> {
    const user = await this.userService.findByEmail(signUpRequest.email);

    if (user) {
      return null;
    }

    const hashedPassword = await bcrypt.hash(signUpRequest.password, 10);

    const createdUser = await this.userService.saveUser({
      name: signUpRequest.name,
      email: signUpRequest.email,
      password: hashedPassword,
    });
    return createdUser;
  }

  async signIn(signInRequest: User): Promise<User | null> {
    const user = await this.userService.findByEmail(signInRequest.email);

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(
      signInRequest.password,
      user.password
    );

    if (isPasswordValid) {
      return user;
    }
    return null;
  }
}
