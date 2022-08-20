import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {

    getAllBlogs() {
        return "Hello World!"
    }

}
