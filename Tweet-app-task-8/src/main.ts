import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
// import { ValidationPipe } from '@nestjs/common';


// import { NestFactory } from '@nestjs/core';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true,
  // })
  // )


app.useStaticAssets(join(__dirname + '/../public'));
app.setBaseViewsDir(join(__dirname + '/../views'));

app.setViewEngine('ejs');



  await app.listen(3000, ()=>{
    console.log("App is running on port: 3000");
    
  });
}
bootstrap();
