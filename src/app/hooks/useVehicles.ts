import { useQuery } from '@tanstack/react-query';
import { fetchVehicles, FilterOptions } from '../services/api';
import { useState } from 'react';

interface UseVehiclesOptions {
  page?: number;
  limit?: number;
}

export const useVehicles = (initialOptions?: UseVehiclesOptions) => {
  const [filters, setFilters] = useState<FilterOptions>({
    page: initialOptions?.page || 1,
    limit: initialOptions?.limit || 6,
  });

  const query = useQuery({
    queryKey: ['vehicles', filters],
    queryFn: () => fetchVehicles(filters),
  });

  const setPage = (page: number) => {
    setFilters(prev => ({ ...prev, page }));
  };

  const setFilter = (key: keyof FilterOptions, value: unknown) => {
    setFilters(prev => ({ ...prev, [key]: value, page: 1 }));
  };

  return {
    ...query,
    filters,
    setFilter,
    setPage,
  };
}; 