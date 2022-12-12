// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { MovieController } from './app.controller';

@Module({
  providers: [],
  controllers: [MovieController],
  imports: [],
  exports: [],
})
export class AppModule {
  constructor() {
    console.log(`This is app module`);
  }
}

