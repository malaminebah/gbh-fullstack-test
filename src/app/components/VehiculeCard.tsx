import Image from 'next/image';
import { Vehicle } from '../types/vehicule.types';

interface VehiculeCardProps {
    vehicule: Vehicle;
}

export const VehiculeCard = ({ vehicule }: VehiculeCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                    src={vehicule.images[0] || '/images/placeholder.jpg'}
                    alt={`${vehicule.manufacturer} ${vehicule.model}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-1">
                    {vehicule.manufacturer} {vehicule.model}
                </h3>
                
                <div className="flex justify-between items-center mb-3">
                    <span className="text-base sm:text-lg font-semibold text-blue-600">
                        {vehicule.price.toLocaleString('fr-FR')} €
                    </span>
                    <span className="text-sm text-gray-500">
                        {vehicule.year}
                    </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs sm:text-sm">
                        {vehicule.type}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs sm:text-sm">
                        {vehicule.fuelType}
                    </span>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-2 mb-3 flex-grow">
                    {vehicule.description}
                </p>
                
                <div className="flex gap-2 flex-wrap mt-auto">
                    {vehicule.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="text-xs text-gray-500">
                            • {feature}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}; 