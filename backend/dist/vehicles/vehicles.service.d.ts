import { Vehicle } from './entities/vehicle.entity';
import { FilterOptions, PaginationOptions, PaginatedResponse } from './types/vehicle.types';
export declare class VehiclesService {
    private vehicles;
    findAll(filters?: FilterOptions, pagination?: PaginationOptions): PaginatedResponse;
    findOne(id: string): Vehicle;
    getManufacturers(): string[];
}
