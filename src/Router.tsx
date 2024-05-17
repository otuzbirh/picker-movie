import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from '@/pages/home';
import DetailedView from '@/pages/details';
import NotFound from '@/components/NotFound';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailed/:id" element={<DetailedView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
