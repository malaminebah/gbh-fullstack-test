'use client';

interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div>
      <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
        Trier par
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Par défaut</option>
        <option value="price_asc">Prix croissant</option>
        <option value="price_desc">Prix décroissant</option>
        <option value="year_asc">Année croissante</option>
        <option value="year_desc">Année décroissante</option>
      </select>
    </div>
  );
} 