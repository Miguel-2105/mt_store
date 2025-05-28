import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders() {
    return 'lista de orders';
  }

  @Get(':orderId')
  getOrder(@Param('orderId') orderId: number) {
    return `el id de order es ${orderId}`;
  }
}
