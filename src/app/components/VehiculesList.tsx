'use client';

import { useQuery } from '@tanstack/react-query';
import { Vehicle } from '../types/vehicule.types';
import { VehiculeCard } from './VehiculeCard';
import { fetchVehicules } from '../hooks/fetchData';

export const VehiculesList = () => {
    const { data: vehicules, isLoading, error } = useQuery<Vehicle[]>({
        queryKey: ['vehicules'],
        queryFn: fetchVehicules
    });

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="flex justify-center items-center min-h-[200px]">
                    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="text-center text-red-500 text-sm sm:text-base">
                    Une erreur est survenue lors du chargement des véhicules
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
                Notre Collection de Véhicules
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {vehicules?.map((vehicule) => (
                    <VehiculeCard key={vehicule.id} vehicule={vehicule} />
                ))}
            </div>
        </div>
    );
}; 