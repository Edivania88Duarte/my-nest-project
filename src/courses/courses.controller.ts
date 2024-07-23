import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses') //endpoint
export class CoursesController {// CoursesController trata a rota
  constructor(private readonly coursesService : CoursesService) {}
  @Get()
  findAll() {
    return 'Listagem de cursos';
  }

  @Get(':id')
  findOne(@Param('id') id : string) {
    return `Curso ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id : string, @Body() body){
    return `Atualização do Curso ${id}`;
  }

  @Delete(':id')
  remove(@Param ('id') id : string){
    return `Exclusão do Curso ${id}`;
  }
}
