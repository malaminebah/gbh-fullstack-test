import '@testing-library/jest-dom';
import { describe, expect, it, jest, beforeEach } from '@jest/globals';
import { fetchVehicules } from '../hooks/fetchData';

describe('fetchVehicules', () => {
  beforeEach(() => {
    // Réinitialiser les mocks entre chaque test
    jest.resetAllMocks();
  });

  it('should fetch vehicules', async () => {
    const mockVehicules = [
      { id: 1, name: 'Voiture 1', price: 10000 },
      { id: 2, name: 'Voiture 2', price: 20000 }
    ];

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockVehicules)
      })
    ) as unknown as typeof global.fetch;

    const result = await fetchVehicules();
    
    expect(fetch).toHaveBeenCalledWith('/api/vehicules');
    expect(result).toEqual(mockVehicules);
  });

  it('should handle errors', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false
      })
    ) as unknown as typeof global.fetch;

    await expect(fetchVehicules()).rejects.toThrow('Erreur lors de la récupération des véhicules');
  });
});