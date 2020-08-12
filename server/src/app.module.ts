import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { SearchModule } from './modules/search/search.module';
import { MovieModule } from './modules/movie/movie.module';

@Module({
    imports: [ConfigModule, SearchModule, MovieModule],
    controllers: [AppController],
})
export class AppModule {}
