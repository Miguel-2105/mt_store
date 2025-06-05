import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands() {
    return 'Lista de brands';
  }

  @Get(':brandId')
  getBrand(@Param('brandId') brandId: number) {
    return `el id del brand es ${brandId}`;
  }
}
