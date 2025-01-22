'use client';

import { Vehicle } from '../services/api';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VehicleModal({ vehicle, isOpen, onClose }: VehicleModalProps) {
  if (!vehicle) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-6 w-full">
          <Dialog.Title className="text-2xl font-bold mb-4">
            {vehicle.manufacturer} {vehicle.model}
          </Dialog.Title>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-64">
              <Image
                src={vehicle.images[0]}
                alt={`${vehicle.manufacturer} ${vehicle.model}`}
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Caractéristiques</h3>
                <p>Type: {vehicle.type}</p>
                <p>Année: {vehicle.year}</p>
                <p>Prix: {vehicle.price.toLocaleString()}€</p>
                <p>Carburant: {vehicle.fuelType}</p>
                <p>Transmission: {vehicle.transmission}</p>
                {vehicle.mileage !== undefined && (
                  <p>Kilométrage: {vehicle.mileage.toLocaleString()} km</p>
                )}
              </div>
              
              <div>
                <h3 className="font-semibold text-lg">Équipements</h3>
                <ul className="list-disc list-inside">
                  {vehicle.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <p className="text-gray-600">{vehicle.description}</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            Fermer
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
} 