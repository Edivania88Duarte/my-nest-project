import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // garante que todas as informações indesejadas, ou seja, tudo o que não está definido no DTO de criação-create ou de atualização-update, seja retirado do objeto. Só vai passar o que tá na whitelist, que é o dto.
    forbidNonWhitelisted: true, // não permite que sejam enviadas informações não listadas
    transform: true, // vai transformar os dados-objeto que chegarem para o recurso course e tipar o obejto com o DTO, automaticamente
  }));
  await app.listen(3000);
}
bootstrap();
