'use client';

import { useState } from 'react';
import { useVehicles } from '../hooks/useVehicles';
import { VehicleModal } from './VehicleModal';
import { VehicleFilters } from './VehicleFilters';
import { Pagination } from './Pagination';
import { Vehicle } from '../services/api';
import Image from 'next/image';

export function VehiculesList() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, error, filters, setFilter, setPage } = useVehicles({
    page: 1,
    limit: 6,
  });

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur lors du chargement des véhicules</div>;

  return (
    <div className="container mx-auto px-4">
      <VehicleFilters filters={filters} onFilterChange={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.items.map((vehicle) => (
          <div
            key={vehicle.id}
            className="border rounded-lg p-4 shadow cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => {
              setSelectedVehicle(vehicle);
              setIsModalOpen(true);
            }}
          >
            <div className="relative w-full h-48">
              <Image
                src={vehicle.images[0]}
                alt={`${vehicle.manufacturer} ${vehicle.model}`}
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h2 className="text-xl font-bold mt-2">
              {vehicle.manufacturer} {vehicle.model}
            </h2>
            <p className="text-gray-600">Année : {vehicle.year}</p>
            <p className="text-green-600 font-bold">
              Prix : {vehicle.price.toLocaleString()}€
            </p>
            <div className="mt-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {vehicle.type}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {vehicle.fuelType}
              </span>
            </div>
          </div>
        ))}
      </div>

      {data && (
        <Pagination
          currentPage={data.page}
          totalPages={data.totalPages}
          onPageChange={setPage}
        />
      )}

      <VehicleModal
        vehicle={selectedVehicle}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedVehicle(null);
        }}
      />
    </div>
  );
} 