import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// create module     --> nest g module tasks
// create controller --> nest g controller tasks --no-spec
// create service    --> nest g service tasks --no-spec
