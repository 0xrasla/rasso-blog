import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AuthorService } from "./author.service";
import { createAuthor } from "./dto/author.dto";

@Controller("author")
export class AuthorController {

    constructor(private authorService: AuthorService) { }

    @Get("authors")
    getAllAuthors() {
        return this.authorService.getAllAuthors()
    }

    @Get("/:id")
    getSingleAuthor(@Param() params) {
        const { id } = params;
        return this.authorService.getSingleAuthor(id)
    }

    @Post("/create")
    createAuthor(@Body() createAuthorDto: createAuthor) {
        return this.authorService.createAuthor(createAuthorDto)
    }


}