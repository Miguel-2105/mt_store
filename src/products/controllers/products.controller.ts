import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  //ParseIntPipe,
} from '@nestjs/common';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/products/dtos/products.dto';
import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  getProducts(
    @Query('limit') limit: number = 20,
    @Query('offset') offset: number = 12,
    @Query('brand') brand: string,
  ) {
    return this.productService.findAll();
  }

  @Get('/filter')
  getProductFilter() {
    return 'aaa';
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
