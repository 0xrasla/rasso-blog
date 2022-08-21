import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from "./blog.entity"
@Injectable()
export class BlogService {

    constructor(
        @InjectRepository(Blog) private blogRepository: Repository<Blog>
    ) { }

    async getAllBlogs(): Promise<Blog[]> {
        return await this.blogRepository.find()
    }

}
