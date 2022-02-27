import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { CommitsModule } from './commits/commits.module';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProjectsModule, CommitsModule, GroupsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
