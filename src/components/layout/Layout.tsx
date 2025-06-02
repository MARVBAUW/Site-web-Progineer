import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import ScrollToTop from '@/components/common/ScrollToTop';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Breadcrumb />
      <main className="flex-1 w-full overflow-x-hidden pt-20">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout; 