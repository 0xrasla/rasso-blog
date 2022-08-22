import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Author } from "./author.entity";
import { createAuthor, updateAuthor } from "./dto/author.dto";

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

    async updateAuthor(id: number, updateAuthorDto: updateAuthor) {
        const {
            firstName, isActive, lastName
        } = updateAuthorDto

        try {
            const authortoUpdate = await this.authorRepository.findOne({
                where: {
                    id: id
                }
            })

            if (!authortoUpdate) return { message: "Author Not Found", ok: false }

            if (firstName) authortoUpdate.firstName = firstName
            if (isActive) authortoUpdate.isActive = isActive
            if (lastName) authortoUpdate.lastName = lastName

            await this.authorRepository.save(authortoUpdate)

            return {
                message: "Author Updated",
                ok: true
            }

        } catch (e) {
            return new Error(e.message)
        }

    }

    async deleteAuthor(id: number) {
        try {
            const authorToDelete = await this.authorRepository.findOne({ where: { id } })
            if (!authorToDelete) return { message: "Author Not Found", ok: false }

            this.authorRepository.delete(id)

            return {
                message: "Author Deleted Successfully",
                ok: true
            }
        } catch (e: any) {
            return {
                message: e.message,
                ok: false
            }
        }
    }
}