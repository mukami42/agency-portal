import React from 'react';
import Layout from './Layout';
import { ShieldCheck, AlertCircle, FileText, Search, Download, Filter, Eye, ShieldAlert } from 'lucide-react';

export default function Compliance(props) {
  const alerts = [
    { id: 'ALR-402', agent: 'Michael Chen', type: 'High Volume', risk: 'Medium', status: 'Pending Review', date: '2024.02.19' },
    { id: 'ALR-405', agent: 'James Wilson', type: 'Multiple Failures', risk: 'High', status: 'Action Required', date: '2024.02.19' },
    { id: 'ALR-398', agent: 'Sarah Williams', type: 'Location Mismatch', risk: 'Low', status: 'Resolved', date: '2024.02.18' },
  ];

  return (
    <Layout {...props}>
      {/* HEADER SECTION */}
      <div style={headerStyle}>
        <div>
          <h2 style={{ margin: 0, color: '#000000', fontWeight: '800' }}>Compliance & Alerts</h2>
          <p style={{ color: '#64748b', margin: '5px 0' }}>Monitor regulatory status, risk alerts, and audit logs.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={whiteBtn}><Download size={16} /> Audit Export</button>
          <button style={redBtn}><ShieldAlert size={16} /> Flag Incident</button>
        </div>
      </div>

      {/* COMPLIANCE STATS */}
      <div style={statsGrid}>
        <StatBox title="Compliance Score" value="94%" color="#22c55e" icon={<ShieldCheck />} />
        <StatBox title="Active Alerts" value="12" color="#ef4444" icon={<AlertCircle />} />
        <StatBox title="Pending KYC" value="45" color="#f59e0b" icon={<FileText />} />
      </div>

      {/* ALERTS TABLE */}
      <div style={tableContainer}>
        <div style={tableHeader}>
          <h4 style={{ margin: 0 }}>Active Risk Alerts</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
             <div style={searchContainer}>
                <Search size={14} color="#94a3b8" />
                <input type="text" placeholder="Search alerts..." style={searchInput} />
             </div>
             <button style={filterBtn}><Filter size={14} /> Filter</button>
          </div>
        </div>
        
        <table style={mainTable}>
          <thead style={{ backgroundColor: '#f8fafc' }}>
            <tr>
              <th style={thStyle}>Alert ID</th>
              <th style={thStyle}>Agent/Entity</th>
              <th style={thStyle}>Alert Type</th>
              <th style={thStyle}>Risk Level</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert) => (
              <tr key={alert.id} style={tableRow}>
                <td style={tdStyle}><strong>{alert.id}</strong></td>
                <td style={tdStyle}>{alert.agent}</td>
                <td style={tdStyle}>{alert.type}</td>
                <td style={tdStyle}>
                   <span style={{ 
                     color: alert.risk === 'High' ? '#ef4444' : alert.risk === 'Medium' ? '#f59e0b' : '#64748b',
                     fontWeight: '700', fontSize: '12px'
                   }}>
                     {alert.risk.toUpperCase()}
                   </span>
                </td>
                <td style={tdStyle}><StatusChip status={alert.status} /></td>
                <td style={tdStyle}>
                  <button style={viewBtn}><Eye size={14} /> Review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

// --- SUB COMPONENTS ---
function StatBox({ title, value, color, icon }) {
  return (
    <div style={statBoxStyle}>
      <div style={{ ...iconCircle, color: color, backgroundColor: `${color}15` }}>{icon}</div>
      <div>
        <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>{title}</div>
        <div style={{ fontSize: '24px', fontWeight: '800', color: '#000000' }}>{value}</div>
      </div>
    </div>
  );
}

function StatusChip({ status }) {
    const isRed = status === 'Action Required';
    const isYellow = status === 'Pending Review';
    return (
        <span style={{ 
            padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '600',
            backgroundColor: isRed ? '#fef2f2' : isYellow ? '#fffbeb' : '#f0fdf4',
            color: isRed ? '#dc2626' : isYellow ? '#b45309' : '#16a34a'
        }}>
            {status}
        </span>
    );
}

// --- STYLES ---
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' };
const whiteBtn = { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '14px' };
const redBtn = { ...whiteBtn, backgroundColor: '#000000', color: 'white', border: 'none' };
const statsGrid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' };
const statBoxStyle = { backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' };
const iconCircle = { width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const tableContainer = { backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' };
const tableHeader = { padding: '20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const searchContainer = { display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#f8fafc', padding: '6px 12px', borderRadius: '8px', border: '1px solid #e2e8f0' };
const searchInput = { border: 'none', background: 'transparent', outline: 'none', fontSize: '13px' };
const filterBtn = { display: 'flex', alignItems: 'center', gap: '6px', background: 'white', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer' };
const mainTable = { width: '100%', borderCollapse: 'collapse' };
const thStyle = { textAlign: 'left', padding: '15px 20px', fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' };
const tdStyle = { padding: '15px 20px', fontSize: '14px', borderBottom: '1px solid #f1f5f9' };
const tableRow = { transition: 'background 0.2s' };
const viewBtn = { display: 'flex', alignItems: 'center', gap: '5px', background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', fontWeight: '600' };