import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit: number = 20,
    @Query('offset') offset: number = 12,
    @Query('brand') brand: string,
  ) {
    return `limit ${limit} offset ${offset} brand ${brand}`;
  }

  @Get('/filter')
  getProductFilter() {
    return 'i am filter';
  }

  @Get(':productIds')
  getProduct(@Param('productIds') product: string) {
    return `product ${product}`;
  }
}
