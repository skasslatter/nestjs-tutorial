import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `name: ${createItemDto.name}, Description: ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return `Delete item ${id}`;
  }

  @Put(':id')
  update(
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id: number,
  ): string {
    return `Updated item ${id} - name: ${updateItemDto.name}`;
  }
}
