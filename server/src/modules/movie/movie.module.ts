import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { SearchModule } from '../search/search.module';

@Module({
    imports: [SearchModule],
    providers: [MovieService],
    controllers: [MovieController],
})
export class MovieModule {}
