import { Controller, Get, Param, Query, ParseIntPipe, DefaultValuePipe } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehicleType, FuelType } from './entities/vehicle.entity';
import { PaginatedResponse } from './types/vehicle.types';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get('manufacturers')
  getManufacturers() {
    return this.vehiclesService.getManufacturers();
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('type') type?: string,
    @Query('manufacturer') manufacturer?: string,
    @Query('minPrice', new DefaultValuePipe(0), ParseIntPipe) minPrice?: number,
    @Query('maxPrice', new DefaultValuePipe(1000000), ParseIntPipe) maxPrice?: number,
    @Query('minYear', new DefaultValuePipe(1900), ParseIntPipe) minYear?: number,
    @Query('maxYear', new DefaultValuePipe(2024), ParseIntPipe) maxYear?: number,
    @Query('fuelType') fuelType?: string,
  ): PaginatedResponse {
    return this.vehiclesService.findAll(
      {
        type,
        manufacturer,
        minPrice,
        maxPrice,
        minYear,
        maxYear,
        fuelType,
      },
      { page, limit }
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id);
  }
} 