import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './config/data-source';
@Module({
  imports: [
    AuthModule,
    UsersModule,
    VideosModule,
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'ERROR_DUP_ENTRY',
      useFactory: () => {
        return 'ER_DUP_ENTRY';
      },
    },
  ],
})
export class AppModule {}
