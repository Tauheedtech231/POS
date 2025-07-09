import LeftSidebar from '@/components/adminpanel/LeftSidebar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar (left) */}
      <aside className="w-20 sm:w-24 md:w-28 lg:w-64 sm:border-r border-white min-h-screen p-2 sm:p-3 lg:p-4 transition-all duration-300">
        <LeftSidebar />
      </aside>

      {/* Main content (right) */}
      <main className="flex-1 p-4 sm:p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
