import { Resolver, Query, Args } from "@nestjs/graphql";
import { Author } from "./author.entity";
import { AuthorService } from "./author.service";

@Resolver(of => Author)
export class AuthorResolver {
    constructor(
        private readonly authorService: AuthorService,
    ) { }

    @Query(returns => [Author!])
    async authors(): Promise<Author[]> {
        return await this.authorService.getAllAuthors();
    }

    @Query(returns => Author)
    async author(
        @Args('id') id: number,
    ): Promise<Author> {
        return await this.authorService.getSingleAuthor(id);
    }
}
