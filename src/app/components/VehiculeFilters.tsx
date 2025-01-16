import { VehicleType } from "../types/vehicule.types";

export type SortOption = "price_asc" | "price_desc" | "year_asc" | "year_desc";

interface VehiculeFiltersProps {
  manufacturers: string[];
  years: number[];
  selectedManufacturer: string;
  selectedType: VehicleType | "";
  selectedYear: number | "";
  selectedSort: SortOption;
  onFilterChange: (
    filterType: "manufacturer" | "type" | "year",
    value: string | number
  ) => void;
  onSortChange: (value: SortOption) => void;
}

export const VehiculeFilters = ({
  manufacturers,
  years,
  selectedManufacturer,
  selectedType,
  selectedYear,
  selectedSort,
  onFilterChange,
  onSortChange,
}: VehiculeFiltersProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
      <div>
        <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700 mb-1">
          Marque
        </label>
        <select
          id="manufacturer"
          value={selectedManufacturer}
          onChange={(e) => onFilterChange("manufacturer", e.target.value)}
          className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Toutes les marques</option>
          {manufacturers.map((manufacturer) => (
            <option key={manufacturer} value={manufacturer}>
              {manufacturer}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
          Type
        </label>
        <select
          id="type"
          value={selectedType}
          onChange={(e) => onFilterChange("type", e.target.value)}
          className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Tous les types</option>
          {Object.values(VehicleType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
          Année
        </label>
        <select
          id="year"
          value={selectedYear}
          onChange={(e) => onFilterChange("year", Number(e.target.value))}
          className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Toutes les années</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
          Trier par
        </label>
        <select
          id="sort"
          value={selectedSort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="price_asc">Prix croissant</option>
          <option value="price_desc">Prix décroissant</option>
          <option value="year_asc">Année croissante</option>
          <option value="year_desc">Année décroissante</option>
        </select>
      </div>
    </div>
  );
}; 