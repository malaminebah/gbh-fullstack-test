import { Vehicle } from '../entities/vehicle.entity';
export interface FilterOptions {
    type?: string;
    manufacturer?: string;
    minPrice?: number;
    maxPrice?: number;
    minYear?: number;
    maxYear?: number;
    fuelType?: string;
    sortBy?: 'price_asc' | 'price_desc' | 'year_asc' | 'year_desc';
}
export interface PaginationOptions {
    page: number;
    limit: number;
}
export interface PaginatedResponse {
    items: Vehicle[];
    total: number;
    page: number;
    totalPages: number;
}
