import { IsNotEmpty, IsAlphanumeric } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsAlphanumeric()
    username: string;

    @IsAlphanumeric()
    password: string;
}
