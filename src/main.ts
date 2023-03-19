import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:{origin:["https://3148k433o8.zicp.fun","http://127.0.0.1:4200"]}});
  // app.enableCors({origin:["https://3148k433o8.zicp.fun","http://127.0.0.1"]});

  await app.listen(3000);


}
bootstrap();
