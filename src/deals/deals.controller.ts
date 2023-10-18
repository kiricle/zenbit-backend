import { Controller, Get } from '@nestjs/common';
import { DealsService } from './deals.service';
import { Public } from 'src/common/decorators';

@Controller('deals')
export class DealsController {
  constructor(private dealsService: DealsService) {}

  @Public()
  @Get('')
  getDeals() {
    return this.dealsService.getDeals();
  }
}
