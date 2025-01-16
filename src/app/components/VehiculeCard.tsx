import Image from 'next/image';
import { Vehicle } from '../types/vehicule.types';

interface VehiculeCardProps {
    vehicule: Vehicle;
}

export const VehiculeCard = ({ vehicule }: VehiculeCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
                <Image
                    src={vehicule.images[0] || '/images/placeholder.jpg'}
                    alt={`${vehicule.manufacturer} ${vehicule.model}`}
                    fill
                    className="object-cover"
                />
            </div>
            
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                    {vehicule.manufacturer} {vehicule.model}
                </h3>
                
                <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-blue-600">
                        {vehicule.price.toLocaleString('fr-FR')} €
                    </span>
                    <span className="text-sm text-gray-500">
                        {vehicule.year}
                    </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                        {vehicule.type}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                        {vehicule.fuelType}
                    </span>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-2">
                    {vehicule.description}
                </p>
                
                <div className="mt-4 flex gap-2 flex-wrap">
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