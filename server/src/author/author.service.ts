import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Author } from "./author.entity";
import { createAuthor } from "./dto/author.dto";

@Injectable()
export class AuthorService {

    constructor(
        @InjectRepository(Author) private readonly authorRepository: Repository<Author>
    ) { }

    async getAllAuthors(): Promise<Author[]> {
        return this.authorRepository.find()
    }

    async getSingleAuthor(id: number): Promise<Author> {
        return this.authorRepository.findOne({
            where: {
                id: id
            }
        })
    }

    async createAuthor(createAuthorDto: createAuthor) {
        const { firstName, isActive, lastName } = createAuthorDto;

        const newAuthor = this.authorRepository.create({
            firstName,
            isActive,
            lastName
        })

        await this.authorRepository.save(newAuthor)
        return { newAuthor, status: "Created" }
    }
}