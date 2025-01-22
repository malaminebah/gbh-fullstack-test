import { useQuery } from '@tanstack/react-query';
import { fetchManufacturers } from '../services/api';

export const useManufacturers = () => {
  return useQuery({
    queryKey: ['manufacturers'],
    queryFn: fetchManufacturers,
  });
}; 