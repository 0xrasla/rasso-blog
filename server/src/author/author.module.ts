import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthorController } from "./author.controller";
import { Author } from "./author.entity";
import { AuthorResolver } from "./author.resolver";
import { AuthorService } from "./author.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Author
        ])
    ],
    controllers: [AuthorController],
    providers: [AuthorService, AuthorResolver]
})
export class AuthorModule { }