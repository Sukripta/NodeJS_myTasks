import { Module } from '@nestjs/common';
import { SavingsModule } from './savings/savings.module';

@Module({
  imports: [SavingsModule]
})
export class AccountModule {}
