import '@/App.css';

import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Router } from '@/Router';
import { QueryClientProvider, DataLoaderProvider } from '@/providers';

export default function App() {
  return (
    <QueryClientProvider>
      <DataLoaderProvider>
        <Router />

        <Toaster position="top-right" />
        <ReactQueryDevtools initialIsOpen={false} />
      </DataLoaderProvider>
    </QueryClientProvider>
  );
}
