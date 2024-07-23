import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [CoursesModule], //CoursesModule recebe os módulos específicos que vai configurando os controller, os providers e exportações que precisar definir.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
