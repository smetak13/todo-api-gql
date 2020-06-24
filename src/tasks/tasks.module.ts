import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksRepository } from './task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksResolver } from './resolvers/task.resolver';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository]), ConfigModule.forRoot()],
  providers: [TasksService, TasksResolver],
})
export class TasksModule {}
