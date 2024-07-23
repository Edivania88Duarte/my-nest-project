import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/courses.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, CoursesController],
  providers: [AppService, CoursesService],
})
export class AppModule {}
