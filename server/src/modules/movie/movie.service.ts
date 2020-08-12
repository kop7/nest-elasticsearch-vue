import { Injectable } from '@nestjs/common';
import { SearchService } from '../search/search.service';

@Injectable()
export class MovieService {
    constructor(readonly esService: SearchService) {}

    async findMovies(search: string = '') {
        return await this.esService.search(search);
    }
}
