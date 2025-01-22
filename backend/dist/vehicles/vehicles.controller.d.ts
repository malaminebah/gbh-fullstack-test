import { VehiclesService } from './vehicles.service';
import { PaginatedResponse } from './types/vehicle.types';
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    getManufacturers(): string[];
    findAll(page: number, limit: number, type?: string, manufacturer?: string, minPrice?: number, maxPrice?: number, minYear?: number, maxYear?: number, fuelType?: string): PaginatedResponse;
    findOne(id: string): import("./entities/vehicle.entity").Vehicle;
}
