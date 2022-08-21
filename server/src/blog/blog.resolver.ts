import { Args, Query, Resolver } from "@nestjs/graphql";
import { Any } from "typeorm";
import { Blog } from "./blog.entity";
import { BlogService } from "./blog.service";

@Resolver()
export class BlogResolver {

    constructor(private readonly blogService: BlogService) { }

    @Query(returns => Promise<Blog[]>)
    async author() {
        return this.blogService.getAllBlogs();
    }
}