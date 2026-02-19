import React from 'react';
import { LayoutDashboard, User, Building2, LogOut, Check } from 'lucide-react';

export default function Layout({ children, username, role, branch, handleLogout, currentPage, setCurrentPage }) {
  
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Agents', icon: <User size={18} /> },
    { name: 'Devices', icon: <Building2 size={18} /> },
    { name: 'Outlets', icon: <Check size={18} /> },
    { name: 'Commissions', icon: <Check size={18} /> },
    { name: 'Approvals', icon: <Check size={18} /> },
    { name: 'Reports', icon: <Check size={18} /> },
    { name: 'Compliance', icon: <Check size={18} /> },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw', backgroundColor: '#f8fafc', overflow: 'hidden' }}>
      {/* SIDEBAR */}
      <aside style={sidebarStyle}>
        <div style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '10px', color: '#007bff' }}>
          <LayoutDashboard size={24} />
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>Agency Portal</span>
        </div>
        
        <nav style={{ flex: 1, padding: '10px' }}>
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              onClick={() => setCurrentPage(item.name)}
              style={{ 
                padding: '12px 15px', 
                borderRadius: '6px', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                marginBottom: '4px',
                color: currentPage === item.name ? '#007bff' : '#64748b',
                backgroundColor: currentPage === item.name ? '#eff6ff' : 'transparent',
                fontSize: '14px', 
                fontWeight: currentPage === item.name ? '600' : '400',
                transition: 'all 0.2s ease'
              }}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </nav>

        <div style={{ padding: '20px', borderTop: '1px solid #e2e8f0' }}>
          <button onClick={handleLogout} style={logoutBtn}><LogOut size={16} /> Logout</button>
        </div>
      </aside>

      {/* RIGHT SIDE CONTENT */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* SHARED TOP NAV */}
        <header style={topHeaderStyle}>
          <div style={{ position: 'relative', width: '400px' }}>
            <input type="text" placeholder="Search..." style={searchStyle} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>{username?.toUpperCase()}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>{role} | {branch}</div>
            </div>
            <div style={avatarStyle}>{username?.charAt(0).toUpperCase()}</div>
          </div>
        </header>

       {/* SCROLLABLE PAGE CONTENT */}
        <main style={{ padding: '30px', overflowY: 'auto', flex: 1 }}>
          {children} 

          {/* SHARED FOOTER (Now inside Layout) */}
          <footer style={footerStyle}>
            <div>© 2026 Agency Portal. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span>System Status: <span style={{ color: '#22c55e' }}>● Healthy</span></span>
              <span>Support</span>
              <span>Terms</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

// Styles moved to Layout
const sidebarStyle = { width: '260px', minWidth: '260px', backgroundColor: 'white', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' };
const topHeaderStyle = { height: '70px', backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 30px' };
const searchStyle = { width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', outline: 'none', fontSize: '14px' };
const avatarStyle = { width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#007bff', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' };
const logoutBtn = { display: 'flex', alignItems: 'center', gap: '5px', background: 'none', border: 'none', color: '#d63031', cursor: 'pointer', fontWeight: 'bold' };
const footerStyle = { marginTop: '40px', padding: '20px 0', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '12px' };