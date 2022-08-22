import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { AuthorService } from "./author.service";
import { createAuthor, updateAuthor } from "./dto/author.dto";

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

    @Patch("/:id")
    updateAuthor(@Param() params, @Body() updateAuthorDto: updateAuthor) {
        const { id } = params;
        return this.authorService.updateAuthor(id, updateAuthorDto)
    }

    @Delete("/:id")
    deleteAuthor(@Param() params) {
        const { id } = params;

        return this.authorService.deleteAuthor(id)
    }
}