import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogResolver } from './blog.resolver';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Blog])
    ],
    controllers: [BlogController],
    providers: [BlogService, BlogResolver],
})
export class BlogModule { }
