import {
  Get,
  Controller,
  Post,
  Body,
  UseGuards,
  UseInterceptors,
  Param,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // @Get(':id')
  // findOne(
  //   @Param('id', new ParseIntPipe())
  //   id,
  // ) {
  //   // logic
  // }
}
