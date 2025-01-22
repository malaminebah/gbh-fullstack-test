'use client';

import { FilterOptions, VehicleType, FuelType } from '../services/api';
import { useManufacturers } from '../hooks/useManufacturers';
import { SortSelect } from './SortSelect';

interface VehicleFiltersProps {
  filters: FilterOptions;
  onFilterChange: (key: keyof FilterOptions, value: unknown) => void;
}

export function VehicleFilters({ filters, onFilterChange }: VehicleFiltersProps) {
  const { data: manufacturers, isLoading: isLoadingManufacturers } = useManufacturers();

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-1">
          <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">
            Marque
          </label>
          <select
            id="manufacturer"
            value={filters.manufacturer || ''}
            onChange={(e) => onFilterChange('manufacturer', e.target.value || undefined)}
            className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoadingManufacturers}
          >
            <option value="">Toutes les marques</option>
            {manufacturers?.map((manufacturer) => (
              <option key={manufacturer} value={manufacturer}>
                {manufacturer}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <select
            id="type"
            value={filters.type || ''}
            onChange={(e) => onFilterChange('type', e.target.value || undefined)}
            className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Tous les types</option>
            {Object.values(VehicleType).map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700">
            Carburant
          </label>
          <select
            id="fuelType"
            value={filters.fuelType || ''}
            onChange={(e) => onFilterChange('fuelType', e.target.value || undefined)}
            className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Tous les carburants</option>
            {Object.values(FuelType).map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <SortSelect
          value={filters.sortBy || ''}
          onChange={(value) => onFilterChange('sortBy', value || undefined)}
        />
      </div>
    </div>
  );
} 