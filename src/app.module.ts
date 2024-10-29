import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

@Module({
  imports: [],
  controllers: [AppController, PetsController],
  providers: [AppService, PetsService],
})
export class AppModule {}
