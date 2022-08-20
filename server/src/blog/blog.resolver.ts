import { Args, Query, Resolver } from "@nestjs/graphql";
import { BlogService } from "./blog.service";

@Resolver()
export class BlogResolver {

    constructor(private readonly blogService: BlogService) { }

    @Query(returns => String)
    async author() {
        return this.blogService.getAllBlogs();
    }
}