import { Controller, Get, Query } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller()
export class MovieController {
    constructor(public readonly movieService: MovieService) {}

    @Get('movies')
    async getMovies(@Query('search') search: string) {
        if (search !== undefined && search.length > 1) {
            return await this.movieService.findMovies(search);
        }
    }
}
