import { Module } from '@nestjs/common';
import { ConfigModule as NextConfigModule } from '@nestjs/config';
@Module({
  imports: [NextConfigModule.forRoot()],
})
export class ConfigModule {}
