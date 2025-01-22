"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesService = void 0;
const common_1 = require("@nestjs/common");
const vehicle_entity_1 = require("./entities/vehicle.entity");
let VehiclesService = class VehiclesService {
    constructor() {
        this.vehicles = [
            {
                id: "1",
                manufacturer: 'Toyota',
                model: 'Camry',
                year: 2023,
                type: vehicle_entity_1.VehicleType.SEDAN,
                price: 25000,
                fuelType: vehicle_entity_1.FuelType.HYBRID,
                transmission: 'Automatique',
                mileage: 0,
                features: ['Bluetooth', 'Caméra de recul', 'Régulateur de vitesse', 'Apple CarPlay'],
                images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3'],
                description: 'La Toyota Camry 2023 offre un excellent équilibre entre confort, efficacité et fiabilité.',
                createdAt: new Date('2024-01-01'),
                updatedAt: new Date('2024-01-01')
            },
            {
                id: "2",
                manufacturer: 'BMW',
                model: 'Série 3',
                year: 2022,
                type: vehicle_entity_1.VehicleType.LUXURY,
                price: 45000,
                fuelType: vehicle_entity_1.FuelType.GASOLINE,
                transmission: 'Automatique',
                mileage: 5000,
                features: ['Sièges en cuir', 'Toit ouvrant', 'Navigation GPS', 'Système audio premium'],
                images: ['https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?ixlib=rb-4.0.3'],
                description: 'La BMW Série 3 incarne l\'excellence en matière de berline sportive de luxe.',
                createdAt: new Date('2024-01-02'),
                updatedAt: new Date('2024-01-02')
            },
            {
                id: "3",
                manufacturer: 'Tesla',
                model: 'Model 3',
                year: 2023,
                type: vehicle_entity_1.VehicleType.ELECTRIC,
                price: 52000,
                fuelType: vehicle_entity_1.FuelType.ELECTRIC,
                transmission: 'Automatique',
                mileage: 1000,
                features: ['Autopilot', 'Écran tactile 15"', 'Toit en verre', 'Supercharge'],
                images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3'],
                description: 'La Tesla Model 3 redéfinit la mobilité électrique avec des performances exceptionnelles.',
                createdAt: new Date('2024-01-03'),
                updatedAt: new Date('2024-01-03')
            },
            {
                id: "4",
                manufacturer: 'Porsche',
                model: '911',
                year: 2022,
                type: vehicle_entity_1.VehicleType.SPORTS,
                price: 115000,
                fuelType: vehicle_entity_1.FuelType.GASOLINE,
                transmission: 'PDK',
                mileage: 3000,
                features: ['Sport Chrono', 'Échappement sport', 'Suspension adaptative', 'Sièges sport Plus'],
                images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3'],
                description: 'La Porsche 911 représente l\'apogée de l\'ingénierie automobile sportive allemande.',
                createdAt: new Date('2024-01-04'),
                updatedAt: new Date('2024-01-04')
            },
            {
                id: "5",
                manufacturer: 'Mercedes',
                model: 'GLE',
                year: 2023,
                type: vehicle_entity_1.VehicleType.SUV,
                price: 65000,
                fuelType: vehicle_entity_1.FuelType.DIESEL,
                transmission: 'Automatique 9G-TRONIC',
                mileage: 0,
                features: ['MBUX', 'Suspension pneumatique', 'Assistant de conduite', 'Burmester Sound'],
                images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3'],
                description: 'Le Mercedes GLE combine luxe, confort et capacités tout-terrain.',
                createdAt: new Date('2024-01-05'),
                updatedAt: new Date('2024-01-05')
            },
            {
                id: "6",
                manufacturer: 'Audi',
                model: 'RS e-tron GT',
                year: 2023,
                type: vehicle_entity_1.VehicleType.ELECTRIC,
                price: 145000,
                fuelType: vehicle_entity_1.FuelType.ELECTRIC,
                transmission: 'Automatique',
                mileage: 1500,
                features: ['Quattro', 'Matrix LED', 'Bang & Olufsen Sound', 'Massage seats'],
                images: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6'],
                description: 'La première Audi RS 100% électrique combine performance et luxe.',
                createdAt: new Date('2024-01-06'),
                updatedAt: new Date('2024-01-06')
            },
            {
                id: "7",
                manufacturer: 'Range Rover',
                model: 'Sport',
                year: 2023,
                type: vehicle_entity_1.VehicleType.SUV,
                price: 95000,
                fuelType: vehicle_entity_1.FuelType.HYBRID,
                transmission: 'Automatique 8 rapports',
                mileage: 3000,
                features: ['Terrain Response 2', 'Meridian Sound', 'Toit panoramique', 'Suspension pneumatique'],
                images: ['https://images.unsplash.com/photo-1606220838315-056192d5e927'],
                description: 'Le Range Rover Sport allie luxe et capacités tout-terrain exceptionnelles.',
                createdAt: new Date('2024-01-07'),
                updatedAt: new Date('2024-01-07')
            },
            {
                id: "8",
                manufacturer: 'Lexus',
                model: 'LC 500',
                year: 2023,
                type: vehicle_entity_1.VehicleType.LUXURY,
                price: 98000,
                fuelType: vehicle_entity_1.FuelType.GASOLINE,
                transmission: 'Automatique 10 rapports',
                mileage: 1000,
                features: ['Mark Levinson Audio', 'Head-up Display', 'Performance Package', 'Carbon Roof'],
                images: ['https://images.unsplash.com/photo-1582639510494-c80b5de9f148'],
                description: 'Le coupé Lexus LC 500 représente le summum du luxe japonais.',
                createdAt: new Date('2024-01-08'),
                updatedAt: new Date('2024-01-08')
            },
            {
                id: "9",
                manufacturer: 'Ford',
                model: 'F-150 Lightning',
                year: 2023,
                type: vehicle_entity_1.VehicleType.TRUCK,
                price: 75000,
                fuelType: vehicle_entity_1.FuelType.ELECTRIC,
                transmission: 'Automatique',
                mileage: 500,
                features: ['Pro Power Onboard', 'Mega Power Frunk', 'Sync 4A', 'BlueCruise'],
                images: ['https://images.unsplash.com/photo-1613467143018-47d244c8ddb0'],
                description: 'Le pickup électrique qui révolutionne le segment des utilitaires.',
                createdAt: new Date('2024-01-09'),
                updatedAt: new Date('2024-01-09')
            },
            {
                id: "10",
                manufacturer: 'Volkswagen',
                model: 'ID.4',
                year: 2023,
                type: vehicle_entity_1.VehicleType.ELECTRIC,
                price: 45000,
                fuelType: vehicle_entity_1.FuelType.ELECTRIC,
                transmission: 'Automatique',
                mileage: 2000,
                features: ['ID.Light', 'Travel Assist', 'Massage seats', 'Panoramic roof'],
                images: ['https://images.unsplash.com/photo-1617470702892-e01504693cd2'],
                description: 'Le SUV électrique familial par excellence.',
                createdAt: new Date('2024-01-10'),
                updatedAt: new Date('2024-01-10')
            },
            {
                id: "11",
                manufacturer: 'Hyundai',
                model: 'IONIQ 5',
                year: 2023,
                type: vehicle_entity_1.VehicleType.ELECTRIC,
                price: 48000,
                fuelType: vehicle_entity_1.FuelType.ELECTRIC,
                transmission: 'Automatique',
                mileage: 1000,
                features: ['V2L', 'Highway Driving Assist', 'Remote Smart Parking', 'Vision roof'],
                images: ['https://images.unsplash.com/photo-1669739432571-aee1f057c41f'],
                description: 'Design rétro-futuriste et technologie de pointe.',
                createdAt: new Date('2024-01-11'),
                updatedAt: new Date('2024-01-11')
            },
            {
                id: "12",
                manufacturer: 'Bentley',
                model: 'Continental GT',
                year: 2023,
                type: vehicle_entity_1.VehicleType.LUXURY,
                price: 225000,
                fuelType: vehicle_entity_1.FuelType.GASOLINE,
                transmission: 'Automatique 8 rapports',
                mileage: 500,
                features: ['Naim Audio', 'Rotating Display', 'Diamond Knurling', 'City Specification'],
                images: ['https://images.unsplash.com/photo-1621135802920-133df287f89c'],
                description: 'L\'excellence britannique en matière de Grand Tourisme.',
                createdAt: new Date('2024-01-12'),
                updatedAt: new Date('2024-01-12')
            },
            {
                id: "13",
                manufacturer: 'Maserati',
                model: 'MC20',
                year: 2023,
                type: vehicle_entity_1.VehicleType.SPORTS,
                price: 215000,
                fuelType: vehicle_entity_1.FuelType.GASOLINE,
                transmission: 'DCT 8 rapports',
                mileage: 1000,
                features: ['Carbon Fiber Monocoque', 'Butterfly Doors', 'Sonus Faber Audio', 'MIA system'],
                images: ['https://images.unsplash.com/photo-1617027391457-143e6b931f10'],
                description: 'La supercar italienne qui redéfinit la performance.',
                createdAt: new Date('2024-01-13'),
                updatedAt: new Date('2024-01-13')
            },
            {
                id: "14",
                manufacturer: 'Rivian',
                model: 'R1S',
                year: 2023,
                type: vehicle_entity_1.VehicleType.SUV,
                price: 85000,
                fuelType: vehicle_entity_1.FuelType.ELECTRIC,
                transmission: 'Automatique',
                mileage: 1500,
                features: ['Tank Turn', 'Gear Guard', 'Camp Mode', 'Adventure Package'],
                images: ['https://images.unsplash.com/photo-1664199134378-459c61b4a812'],
                description: 'Le SUV électrique conçu pour l\'aventure.',
                createdAt: new Date('2024-01-14'),
                updatedAt: new Date('2024-01-14')
            },
            {
                id: "15",
                manufacturer: 'Lucid',
                model: 'Air',
                year: 2023,
                type: vehicle_entity_1.VehicleType.LUXURY,
                price: 125000,
                fuelType: vehicle_entity_1.FuelType.ELECTRIC,
                transmission: 'Automatique',
                mileage: 500,
                features: ['DreamDrive Pro', 'Glass Canopy', '21-speaker Audio', 'Micro Lens Array'],
                images: ['https://images.unsplash.com/photo-1664196686794-fff0e5e60c53'],
                description: 'La berline électrique qui repousse les limites de l\'autonomie.',
                createdAt: new Date('2024-01-15'),
                updatedAt: new Date('2024-01-15')
            },
            {
                id: "16",
                manufacturer: 'Aston Martin',
                model: 'DBX707',
                year: 2023,
                type: vehicle_entity_1.VehicleType.SUV,
                price: 235000,
                fuelType: vehicle_entity_1.FuelType.GASOLINE,
                transmission: '9G-Tronic',
                mileage: 1000,
                features: ['22" Wheels', 'Carbon Ceramic Brakes', 'Q Customization', 'Sports Plus Seats'],
                images: ['https://images.unsplash.com/photo-1615106806531-183c31fccfde'],
                description: 'Le SUV le plus puissant d\'Aston Martin.',
                createdAt: new Date('2024-01-16'),
                updatedAt: new Date('2024-01-16')
            },
            {
                id: "17",
                manufacturer: 'McLaren',
                model: 'Artura',
                year: 2023,
                type: vehicle_entity_1.VehicleType.SPORTS,
                price: 225000,
                fuelType: vehicle_entity_1.FuelType.PLUGIN_HYBRID,
                transmission: '8-speed SSG',
                mileage: 500,
                features: ['Carbon Lightweight Architecture', 'E-diff', 'Variable Drift Control', 'Track Telemetry'],
                images: ['https://images.unsplash.com/photo-1621135802920-133df287f89c'],
                description: 'La première supercar hybride de série de McLaren.',
                createdAt: new Date('2024-01-17'),
                updatedAt: new Date('2024-01-17')
            },
            {
                id: "18",
                manufacturer: 'Rolls-Royce',
                model: 'Spectre',
                year: 2024,
                type: vehicle_entity_1.VehicleType.LUXURY,
                price: 420000,
                fuelType: vehicle_entity_1.FuelType.ELECTRIC,
                transmission: 'Automatique',
                mileage: 100,
                features: ['Starlight Doors', 'Planar Suspension', 'Bespoke Audio', 'Spirit of Ecstasy'],
                images: ['https://images.unsplash.com/photo-1631295868223-63265b40d9e4'],
                description: 'La première Rolls-Royce 100% électrique.',
                createdAt: new Date('2024-01-18'),
                updatedAt: new Date('2024-01-18')
            },
            {
                id: "19",
                manufacturer: 'Lamborghini',
                model: 'Revuelto',
                year: 2024,
                type: vehicle_entity_1.VehicleType.SPORTS,
                price: 580000,
                fuelType: vehicle_entity_1.FuelType.PLUGIN_HYBRID,
                transmission: '8-speed DCT',
                mileage: 100,
                features: ['Forged Carbon Package', 'Telemetry System', 'Lifting System', 'Ad Personam'],
                images: ['https://images.unsplash.com/photo-1580414057403-c5f451f30e1c'],
                description: 'L\'hypercar hybride qui succède à l\'Aventador.',
                createdAt: new Date('2024-01-19'),
                updatedAt: new Date('2024-01-19')
            },
            {
                id: "20",
                manufacturer: 'Ferrari',
                model: 'SF90 Stradale',
                year: 2023,
                type: vehicle_entity_1.VehicleType.SPORTS,
                price: 520000,
                fuelType: vehicle_entity_1.FuelType.PLUGIN_HYBRID,
                transmission: '8-speed DCT',
                mileage: 500,
                features: ['Assetto Fiorano', 'eManettino', 'RAC-e', 'Carbon Fiber Wheels'],
                images: ['https://images.unsplash.com/photo-1583121274602-3e2820c69888'],
                description: 'La Ferrari hybride la plus puissante jamais produite.',
                createdAt: new Date('2024-01-20'),
                updatedAt: new Date('2024-01-20')
            }
        ];
    }
    findAll(filters, pagination) {
        let filteredVehicles = [...this.vehicles];
        if (filters) {
            if (filters.type) {
                filteredVehicles = filteredVehicles.filter(v => v.type === filters.type);
            }
            if (filters.manufacturer) {
                filteredVehicles = filteredVehicles.filter(v => v.manufacturer.toLowerCase().includes(filters.manufacturer.toLowerCase()));
            }
            if (filters.minPrice) {
                filteredVehicles = filteredVehicles.filter(v => v.price >= filters.minPrice);
            }
            if (filters.maxPrice) {
                filteredVehicles = filteredVehicles.filter(v => v.price <= filters.maxPrice);
            }
            if (filters.minYear) {
                filteredVehicles = filteredVehicles.filter(v => v.year >= filters.minYear);
            }
            if (filters.maxYear) {
                filteredVehicles = filteredVehicles.filter(v => v.year <= filters.maxYear);
            }
            if (filters.fuelType) {
                filteredVehicles = filteredVehicles.filter(v => v.fuelType === filters.fuelType);
            }
        }
        if (filters === null || filters === void 0 ? void 0 : filters.sortBy) {
            switch (filters.sortBy) {
                case 'price_asc':
                    filteredVehicles.sort((a, b) => a.price - b.price);
                    break;
                case 'price_desc':
                    filteredVehicles.sort((a, b) => b.price - a.price);
                    break;
                case 'year_asc':
                    filteredVehicles.sort((a, b) => a.year - b.year);
                    break;
                case 'year_desc':
                    filteredVehicles.sort((a, b) => b.year - a.year);
                    break;
            }
        }
        const total = filteredVehicles.length;
        const page = (pagination === null || pagination === void 0 ? void 0 : pagination.page) || 1;
        const limit = (pagination === null || pagination === void 0 ? void 0 : pagination.limit) || 10;
        const totalPages = Math.ceil(total / limit);
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        return {
            items: filteredVehicles.slice(startIndex, endIndex),
            total,
            page,
            totalPages,
        };
    }
    findOne(id) {
        const vehicle = this.vehicles.find(vehicle => vehicle.id === id);
        if (!vehicle) {
            throw new common_1.NotFoundException(`Vehicle with ID ${id} not found`);
        }
        return vehicle;
    }
    getManufacturers() {
        const manufacturers = new Set(this.vehicles.map(v => v.manufacturer));
        return Array.from(manufacturers).sort();
    }
};
exports.VehiclesService = VehiclesService;
exports.VehiclesService = VehiclesService = __decorate([
    (0, common_1.Injectable)()
], VehiclesService);
//# sourceMappingURL=vehicles.service.js.map