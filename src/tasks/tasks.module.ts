import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksResolver } from './resolvers/tasks.resolver';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([TasksRepository]),
    ConfigModule.forRoot(),
  ],
  providers: [TasksService, TasksResolver],
})
export class TasksModule {}
