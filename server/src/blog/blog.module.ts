import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogResolver } from './blog.resolver';
import { BlogService } from './blog.service';

@Module({
    imports: [
    ],
    controllers: [BlogController],
    providers: [BlogService, BlogResolver],
})
export class BlogModule { }
