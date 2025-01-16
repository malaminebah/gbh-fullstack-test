import { Vehicle } from "../types/vehicule.types";

export const fetchVehicules = async (): Promise<Vehicle[]> => {
    const response = await fetch('/api/vehicules');
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des véhicules');
    }
    return response.json();
};