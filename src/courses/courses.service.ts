import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [{
        id: 1,
        name: "Fundamentos de NestJS",
        description: "Aprenda NestJs do zero",
        tags: "node", "nest", "javascript", "typescript",
    }];
}
