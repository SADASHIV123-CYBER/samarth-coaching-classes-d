import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { StickyMobileBar } from '../components/StickyMobileBar';
import { FloatingActions } from '../components/FloatingActions';
import { Footer } from '../sections/Footer';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-paper text-slate-900">
      <Navbar />
      <main className="overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
      <StickyMobileBar />
      <FloatingActions />
    </div>
  );
}
