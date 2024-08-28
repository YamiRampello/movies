import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { Movies } from 'src/models/movies.model';
import { MovieService } from 'src/services/movie/movie.service';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}
  @Get()
  get() {
    return this.movieService
      .findAll()
      .then((res) => {
        return { success: true, data: res };
      })
      .catch((error) => {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Post()
  save(@Body() movie: Movies) {
    return this.movieService
      .create(movie)
      .then((res) => {
        return { success: true, data: res };
      })
      .catch((error) => {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Post('/update')
  update(@Body() movie: Movies) {
    return this.movieService
      .update(movie)
      .then((res) => {
        return { success: true, data: res };
      })
      .catch((error) => {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Get('/delete/:id')
  delete(@Param('id') id) {
    return this.movieService
      .delete(id)
      .then((res) => {
        return { success: true, data: res };
      })
      .catch((error) => {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }
}
