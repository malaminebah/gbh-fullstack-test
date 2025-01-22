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

  if (isLoading) return <div className="flex justify-center p-8">Chargement...</div>;
  if (error) return <div className="flex justify-center p-8 text-red-500">Erreur lors du chargement des véhicules</div>;

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <VehicleFilters filters={filters} onFilterChange={setFilter} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {data?.items.map((vehicle) => (
          <div
            key={vehicle.id}
            className="border rounded-lg p-4 shadow cursor-pointer hover:shadow-lg transition-shadow bg-white"
            onClick={() => {
              setSelectedVehicle(vehicle);
              setIsModalOpen(true);
            }}
          >
            <div className="relative w-full h-48 sm:h-40 lg:h-48">
              <Image
                src={vehicle.images[0]}
                alt={`${vehicle.manufacturer} ${vehicle.model}`}
                fill
                className="object-cover rounded"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="mt-4 space-y-2">
              <h2 className="text-lg sm:text-xl font-bold truncate">
                {vehicle.manufacturer} {vehicle.model}
              </h2>
              <p className="text-gray-600">Année : {vehicle.year}</p>
              <p className="text-green-600 font-bold">
                Prix : {vehicle.price.toLocaleString()}€
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {vehicle.type}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {vehicle.fuelType}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data && data.items.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucun véhicule ne correspond à vos critères
        </div>
      )}

      {data && data.totalPages > 1 && (
        <div className="mt-8">
          <Pagination
            currentPage={data.page}
            totalPages={data.totalPages}
            onPageChange={setPage}
          />
        </div>
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