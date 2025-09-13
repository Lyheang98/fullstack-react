import React from 'react';
import { Outlet, Link } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      
      {/* Sidebar */}
      <aside style={{
        width: '220px',
        background: '#f3f4f6',
        padding: '32px 16px',
        boxShadow: '2px 0 8px rgba(0,0,0,0.04)'
      }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '18px' }}>
              <Link to="/dashboard" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 'bold' }}>Dashboard</Link>
            </li>
            <li style={{ marginBottom: '18px' }}>
              <Link to="/dashboard/profile" style={{ textDecoration: 'none', color: '#334155' }}>Profile</Link>
            </li>
            <li style={{ marginBottom: '18px' }}>
              <Link to="/dashboard/settings" style={{ textDecoration: 'none', color: '#334155' }}>Settings</Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: '#64748b' }}>Home</Link>
            </li>
          </ul>
        </nav>
      </aside>
      
      {/* Main content */}
      <main style={{ flex: 1, padding: '40px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoardLayout;
