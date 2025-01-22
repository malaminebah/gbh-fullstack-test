const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export enum VehicleType {
  SUV = 'SUV',
  SEDAN = 'SEDAN',
  TRUCK = 'TRUCK',
  SPORTS = 'SPORTS',
  LUXURY = 'LUXURY',
  ELECTRIC = 'ELECTRIC'
}

export enum FuelType {
  GASOLINE = 'GASOLINE',
  DIESEL = 'DIESEL',
  ELECTRIC = 'ELECTRIC',
  HYBRID = 'HYBRID',
  PLUGIN_HYBRID = 'PLUGIN_HYBRID'
}

export interface Vehicle {
  id: string;
  manufacturer: string;
  model: string;
  year: number;
  type: VehicleType;
  price: number;
  fuelType: FuelType;
  transmission: string;
  mileage?: number;
  features: string[];
  images: string[];
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FilterOptions {
  type?: VehicleType;
  manufacturer?: string;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  fuelType?: FuelType;
  sortBy?: 'price_asc' | 'price_desc' | 'year_asc' | 'year_desc';
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  totalPages: number;
}

export const fetchVehicles = async (filters?: FilterOptions): Promise<PaginatedResponse<Vehicle>> => {
  const params = new URLSearchParams();
  
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, value.toString());
      }
    });
  }

  const response = await fetch(`${API_BASE_URL}/vehicles?${params.toString()}`);
  if (!response.ok) {
    throw new Error('Failed to fetch vehicles');
  }
  return response.json();
};

export const fetchVehicleById = async (id: string): Promise<Vehicle> => {
  const response = await fetch(`${API_BASE_URL}/vehicles/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch vehicle');
  }
  return response.json();
};

export const fetchManufacturers = async (): Promise<string[]> => {
  const response = await fetch(`${API_BASE_URL}/vehicles/manufacturers`);
  if (!response.ok) {
    throw new Error('Failed to fetch manufacturers');
  }
  return response.json();
}; 