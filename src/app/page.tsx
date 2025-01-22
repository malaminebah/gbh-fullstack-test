'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { VehiculesList } from './components/VehiculesList';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
    },
  },
});

export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <VehiculesList />
            </main>
        </QueryClientProvider>
    );
}
