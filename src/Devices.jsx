import React, { useState } from 'react';
import { 
  Monitor, Wifi, BatteryMedium, ShieldAlert, 
  MoreVertical, RotateCcw, XCircle, Search, Filter, ArrowUpRight 
} from 'lucide-react';

export default function Devices() {
  // Sample Data reflecting the image
  const devices = [
    { id: 'DEV-9081', outlet: 'Lagos Main Branch', status: 'Online', battery: '88%', lastSeen: '2 mins ago', model: 'Verifone V200c' },
    { id: 'DEV-9082', outlet: 'Ikeja Digital Hub', status: 'Online', battery: '12%', lastSeen: 'Just now', model: 'Verifone V200c' },
    { id: 'DEV-9083', outlet: 'Unassigned', status: 'Offline', battery: '0%', lastSeen: '5 hours ago', model: 'Pax S90' },
    { id: 'DEV-9084', outlet: 'Victoria Island Office', status: 'Idle', battery: '54%', lastSeen: '12 mins ago', model: 'Verifone V200c' },
    { id: 'DEV-9085', outlet: 'Lekki Phase 1 Outlet', status: 'Online', battery: '95%', lastSeen: '1 min ago', model: 'Pax S90' },
  ];

  return (
    <div style={{ width: '100%', animation: 'fadeIn 0.5s ease' }}>
      {/* 1. HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
        <div>
          <h2 style={{ margin: 0, color: '#1e293b', fontSize: '24px' }}>Device Management</h2>
          <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
            Monitor hardware health, assign outlets, and manage remote telemetry.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={secondaryBtnStyle}><RotateCcw size={16} /> Sync Status</button>
          <button style={primaryBtnStyle}>+ Onboard Device</button>
        </div>
      </div>

      {/* 2. KPI SUMMARY CARDS */}
      <div style={kpiGridStyle}>
        <DeviceStatCard title="Active Fleet" value="1,240" sub="+12 this week" icon={<Monitor size={20} color="#007bff" />} />
        <DeviceStatCard title="Connectivity" value="98.2%" sub="Fleet average" icon={<Wifi size={20} color="#007bff" />} />
        <DeviceStatCard title="Critical Battery" value="14" sub="Action required" icon={<BatteryMedium size={20} color="#ef4444" />} isAlert />
        <DeviceStatCard title="Pending Approvals" value="3" sub="In Checker queue" icon={<ShieldAlert size={20} color="#f59e0b" />} />
      </div>

      {/* 3. MAIN INVENTORY TABLE */}
      <div style={tableContainerStyle}>
        <div style={tableHeaderStyle}>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['All Devices', 'Online', 'Offline', 'Unassigned'].map((tab, i) => (
              <span key={tab} style={i === 0 ? activeTabStyle : tabStyle}>{tab}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
             <button style={filterBtnStyle}><Filter size={14} /> Filters</button>
             <button style={filterBtnStyle}><ArrowUpRight size={14} /></button>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>
              <th style={thStyle}>Device ID</th>
              <th style={thStyle}>Assigned Outlet</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Battery</th>
              <th style={thStyle}>Last Seen</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((dev) => (
              <tr key={dev.id} style={trStyle}>
                <td style={{ ...tdStyle, fontWeight: 'bold' }}>{dev.id}</td>
                <td style={{ ...tdStyle, color: dev.outlet === 'Unassigned' ? '#ef4444' : '#1e293b' }}>
                  {dev.outlet}
                </td>
                <td style={tdStyle}>
                  <span style={getStatusBadge(dev.status)}>{dev.status}</span>
                </td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <BatteryMedium size={14} color={parseInt(dev.battery) < 20 ? '#ef4444' : '#22c55e'} />
                    {dev.battery}
                  </div>
                </td>
                <td style={tdStyle}>{dev.lastSeen}</td>
                <td style={tdStyle}><MoreVertical size={16} cursor="pointer" color="#94a3b8" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4. SECURITY NOTICE FOOTER */}
      <div style={securityNoticeStyle}>
        <ShieldAlert size={18} color="#475569" />
        <p style={{ margin: 0, fontSize: '13px', color: '#475569' }}>
          <strong>Security Protocol Notice:</strong> All critical device actions, including remote unregistration and firmware rollback, 
          require secondary approval by a designated <strong>**Checker**</strong>. Pending actions will appear in the <strong>Approvals queue</strong>.
        </p>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS & STYLES ---

function DeviceStatCard({ title, value, sub, icon, isAlert }) {
  return (
    <div style={kpiCardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>{title}</span>
        <div style={iconCircleStyle}>{icon}</div>
      </div>
      <div style={{ fontSize: '24px', fontWeight: 'bold', margin: '8px 0', color: '#1e293b' }}>{value}</div>
      <div style={{ fontSize: '12px', color: isAlert ? '#ef4444' : '#94a3b8' }}>{sub}</div>
    </div>
  );
}

// CSS-in-JS Styles
const kpiGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' };
const kpiCardStyle = { backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' };
const iconCircleStyle = { width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const tableContainerStyle = { backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' };
const tableHeaderStyle = { padding: '15px 20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const thStyle = { padding: '15px 20px', color: '#64748b', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' };
const tdStyle = { padding: '15px 20px', fontSize: '14px', color: '#1e293b' };
const trStyle = { borderBottom: '1px solid #f1f5f9' };
const primaryBtnStyle = { backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 18px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' };
const secondaryBtnStyle = { backgroundColor: 'white', border: '1px solid #e2e8f0', padding: '10px 18px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: '#475569' };
const tabStyle = { fontSize: '14px', color: '#64748b', cursor: 'pointer' };
const activeTabStyle = { fontSize: '14px', color: '#007bff', fontWeight: '600', borderBottom: '2px solid #007bff', paddingBottom: '14px' };
const filterBtnStyle = { padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: 'white', cursor: 'pointer', color: '#64748b' };
const securityNoticeStyle = { marginTop: '25px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', gap: '12px', alignItems: 'center' };

const getStatusBadge = (status) => ({
  padding: '4px 10px',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: '600',
  backgroundColor: status === 'Online' ? '#dcfce7' : status === 'Offline' ? '#fee2e2' : '#fef9c3',
  color: status === 'Online' ? '#166534' : status === 'Offline' ? '#991b1b' : '#854d0e',
});