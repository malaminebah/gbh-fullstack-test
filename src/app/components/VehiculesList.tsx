'use client';

import { useQuery } from '@tanstack/react-query';
import { Vehicle, VehicleType } from '../types/vehicule.types';
import { VehiculeCard } from './VehiculeCard';
import { fetchVehicules } from '../hooks/fetchData';
import { useState, useMemo } from 'react';
import { Pagination } from './Pagination';
import { VehiculeFilters, SortOption } from './VehiculeFilters';

const ITEMS_PER_PAGE = 8;

export const VehiculesList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedManufacturer, setSelectedManufacturer] = useState("");
    const [selectedType, setSelectedType] = useState<VehicleType | "">("");
    const [selectedYear, setSelectedYear] = useState<number | "">("");
    const [selectedSort, setSelectedSort] = useState<SortOption>("price_asc");

    const { data: vehicules, isLoading, error } = useQuery<Vehicle[]>({
        queryKey: ['vehicules'],
        queryFn: fetchVehicules
    });

    const manufacturers = useMemo(() => {
        if (!vehicules) return [];
        return [...new Set(vehicules.map((v) => v.manufacturer))].sort();
    }, [vehicules]);

    const years = useMemo(() => {
        if (!vehicules) return [];
        return [...new Set(vehicules.map((v) => v.year))].sort((a, b) => b - a);
    }, [vehicules]);

    const filteredAndSortedVehicules = useMemo(() => {
        if (!vehicules) return [];
        
        const result = vehicules.filter((vehicule) => {
            const manufacturerMatch = !selectedManufacturer || vehicule.manufacturer === selectedManufacturer;
            const typeMatch = !selectedType || vehicule.type === selectedType;
            const yearMatch = !selectedYear || vehicule.year === selectedYear;
            return manufacturerMatch && typeMatch && yearMatch;
        });

        return result.sort((a, b) => {
            switch (selectedSort) {
                case "price_asc": return a.price - b.price;
                case "price_desc": return b.price - a.price;
                case "year_asc": return a.year - b.year;
                case "year_desc": return b.year - a.year;
                default: return 0;
            }
        });
    }, [vehicules, selectedManufacturer, selectedType, selectedYear, selectedSort]);

    const handleFilterChange = (
        filterType: "manufacturer" | "type" | "year",
        value: string | number
    ) => {
        setCurrentPage(1);
        switch (filterType) {
            case "manufacturer": setSelectedManufacturer(value as string); break;
            case "type": setSelectedType(value as VehicleType | ""); break;
            case "year": setSelectedYear(value as number | ""); break;
        }
    };

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="flex justify-center items-center min-h-[200px]">
                    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-blue-500" />
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

    const totalPages = Math.ceil(filteredAndSortedVehicules.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentVehicules = filteredAndSortedVehicules.slice(startIndex, endIndex);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
                Notre Collection de Véhicules
            </h2>
            
            <VehiculeFilters
                manufacturers={manufacturers}
                years={years}
                selectedManufacturer={selectedManufacturer}
                selectedType={selectedType}
                selectedYear={selectedYear}
                selectedSort={selectedSort}
                onFilterChange={handleFilterChange}
                onSortChange={setSelectedSort}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {currentVehicules?.map((vehicule) => (
                    <VehiculeCard key={vehicule.id} vehicule={vehicule} />
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}

            {currentVehicules.length === 0 && (
                <div className="text-center text-gray-500 mt-8">
                    Aucun véhicule ne correspond à vos critères de recherche
                </div>
            )}
        </div>
    );
}; 