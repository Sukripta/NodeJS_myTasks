import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { LoanModule } from './loan/loan.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [LoanModule, AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}