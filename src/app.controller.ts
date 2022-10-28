import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from 'dto/product.dto';
import { UpdateProductDto } from 'dto/update.product.dto';
import { Product } from 'entities/product.entities';
import { AppService } from './app.service';

@ApiTags('products')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiOkResponse({ type: Product, isArray: true })
  @Get(':productId')
  findOne(@Param('productId') productId: number): Product {
    // return this.appService.getHello();
    return this.appService.findOneProducts(productId);
  }

  @ApiOkResponse({ status: 200, description: 'The products successfulyy created' })
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.appService.create(createProductDto);
  }

  @Get('')
  findAllProduct(): Product[] {
    return this.appService.product;
  }

  @ApiOkResponse({ status: 200, description: 'The products successfulyy updated' })
  @Put(':productId')
  async update (@Param('productId') productId: number , @Body() post: UpdateProductDto) {
    return this.appService.update(productId , post);
  }

}
