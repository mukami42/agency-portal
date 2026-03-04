import React from 'react';
import Layout from './Layout'; // Assuming Layout is in the same directory
import { 
  Search, Filter, Calendar, MoreVertical, 
  Download, FileText, CheckCircle2, AlertCircle, 
  Clock, ArrowUpRight
} from 'lucide-react';

export default function ReportsAndAlerts(props) {
  // Data based on the provided image table
  const transactions = [
    { id: 'TXN-88291', agent: 'Sarah Jenkins', agentId: 'AG-042', type: 'Cash-In', amount: '$1,240.00', status: 'Success', timestamp: '2024-05-24 14:22:01' },
    { id: 'TXN-88292', agent: 'Michael Chen', agentId: 'AG-109', type: 'Transfer', amount: '$450.00', status: 'Failed', timestamp: '2024-05-24 14:15:44' },
    { id: 'TXN-88293', agent: 'Babatunde Okafor', agentId: 'AG-015', type: 'Bill Payment', amount: '$3,000.00', status: 'Success', timestamp: '2024-05-24 14:02:12' },
    { id: 'TXN-88294', agent: 'Linda Thompson', agentId: 'AG-088', type: 'Cash-Out', amount: '$55.00', status: 'Pending', timestamp: '2024-05-24 13:55:09' },
    { id: 'TXN-88295', agent: 'Sarah Jenkins', agentId: 'AG-042', type: 'Cash-In', amount: '$820.00', status: 'Success', timestamp: '2024-05-24 13:48:33' },
  ];

  return (
    <Layout {...props}>
      {/* HEADER SECTION */}
      <div style={headerStyle}>
        <div>
          <h2 style={{ margin: 0, color: '#1e293b', fontSize: '24px', fontWeight: '700' }}>Reports & Alerts</h2>
          <p style={{ color: '#64748b', margin: '4px 0', fontSize: '14px' }}>Monitor system transactions and resolve operational alerts.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={whiteBtn}><Download size={16} /> Export CSV</button>
          <button style={blueBtn}><FileText size={16} /> PDF Report</button>
        </div>
      </div>

      {/* TOP KPI CARDS */}
      <div style={kpiGrid}>
        <div style={statCard}>
          <div style={statHeader}>
            <span>Audit Success Rate</span> 
            <CheckCircle2 size={18} color="#64748b" />
          </div>
          <div style={statValue}>98.4% <span style={trendUp}><ArrowUpRight size={14}/> +0.2%</span></div>
          <div style={statSubtext}>Vs. previous 30-day average</div>
        </div>

        <div style={statCard}>
          <div style={statHeader}>
            <span>Active Critical Alerts</span> 
            <div style={iconRedBg}><AlertCircle size={18} /></div>
          </div>
          <div style={statValue}>12 <span style={{...trendUp, color: '#ef4444'}}><ArrowUpRight size={14}/> +3</span></div>
          <div style={statSubtext}>Requires immediate attention</div>
        </div>

        <div style={statCard}>
          <div style={statHeader}>
            <span>Total Processed (24h)</span> 
            <div style={iconBlueBg}><Clock size={18} /></div>
          </div>
          <div style={statValue}>$142,509 <span style={trendUp}><ArrowUpRight size={14}/> +12%</span></div>
          <div style={statSubtext}>Across all registered agents</div>
        </div>
      </div>

      {/* MAIN CONTENT TABLE */}
      <div style={tableContainer}>
        <div style={tabsRow}>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={activeTab}>Transaction Reports</span>
            <span style={inactiveTab}>System Alerts <span style={alertBadge}>2</span></span>
          </div>
        </div>

        <div style={tableControls}>
          <div style={searchWrapper}>
            <Search size={16} color="#94a3b8" />
            <input type="text" placeholder="Search logs..." style={searchInput} />
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button style={filterBtn}><Filter size={16} /> Status</button>
            <button style={filterBtn}><Calendar size={16} /> Date Range</button>
            <span style={resultsCount}>Showing 5 of 1,244 entries</span>
          </div>
        </div>

        <table style={mainTable}>
          <thead>
            <tr style={tableHeadRow}>
              <th style={thStyle}>Transaction ID</th>
              <th style={thStyle}>Agent Name</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Amount</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Timestamp</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, i) => (
              <tr key={i} style={tableRow}>
                <td style={{ ...tdStyle, color: '#3b82f6', fontWeight: '500' }}>{txn.id}</td>
                <td style={tdStyle}>
                  <div style={{ fontWeight: '600', color: '#1e293b' }}>{txn.agent}</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>{txn.agentId}</div>
                </td>
                <td style={tdStyle}>
                  <span style={typeBadge}>{txn.type}</span>
                </td>
                <td style={{ ...tdStyle, fontWeight: '700', color: '#1e293b' }}>{txn.amount}</td>
                <td style={tdStyle}>{renderStatus(txn.status)}</td>
                <td style={{ ...tdStyle, color: '#64748b' }}>{txn.timestamp}</td>
                <td style={tdStyle}><MoreVertical size={18} color="#94a3b8" style={{ cursor: 'pointer' }} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div style={paginationRow}>
          <span style={{ fontSize: '13px', color: '#64748b' }}>Page 1 of 248</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={pageBtn}>Previous</button>
            <button style={pageBtnActive}>Next</button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'left', fontSize: '12px', color: '#cbd5e1' }}>Made with Visly</div>
    </Layout>
  );
}

// Helper to render status badges
const renderStatus = (status) => {
  const styles = {
    Success: { bg: '#f0fdf4', color: '#16a34a', border: '#bbf7d0' },
    Failed: { bg: '#fef2f2', color: '#dc2626', border: '#fecaca' },
    Pending: { bg: '#f8fafc', color: '#64748b', border: '#e2e8f0' }
  };
  const current = styles[status] || styles.Pending;
  return (
    <span style={{
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '500',
      backgroundColor: current.bg,
      color: current.color,
      border: `1px solid ${current.border}`
    }}>{status}</span>
  );
};

// --- STYLES ---
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' };
const whiteBtn = { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '14px', color: '#475569' };
const blueBtn = { ...whiteBtn, backgroundColor: '#3b82f6', color: 'white', border: 'none' };

const kpiGrid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' };
const statCard = { background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' };
const statHeader = { display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#64748b', marginBottom: '16px', fontWeight: '500' };
const statValue = { fontSize: '28px', fontWeight: '700', color: '#1e293b', display: 'flex', alignItems: 'baseline', gap: '10px' };
const statSubtext = { fontSize: '13px', color: '#94a3b8', marginTop: '8px' };
const trendUp = { fontSize: '12px', color: '#22c55e', fontWeight: '600', display: 'flex', alignItems: 'center' };

const iconRedBg = { padding: '6px', borderRadius: '50%', background: '#fef2f2', color: '#ef4444', display: 'flex' };
const iconBlueBg = { padding: '6px', borderRadius: '50%', background: '#eff6ff', color: '#3b82f6', display: 'flex' };

const tableContainer = { background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' };
const tabsRow = { padding: '0 24px', borderBottom: '1px solid #e2e8f0', background: '#fcfcfd' };
const activeTab = { display: 'inline-block', padding: '16px 0', color: '#1e293b', fontWeight: '600', borderBottom: '2px solid #3b82f6', fontSize: '14px', cursor: 'pointer' };
const inactiveTab = { display: 'inline-block', padding: '16px 0', color: '#64748b', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' };
const alertBadge = { background: '#ef4444', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '10px' };

const tableControls = { padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const searchWrapper = { display: 'flex', alignItems: 'center', gap: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 12px', width: '300px' };
const searchInput = { border: 'none', background: 'transparent', outline: 'none', fontSize: '14px', width: '100%' };
const filterBtn = { display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', cursor: 'pointer', color: '#475569' };
const resultsCount = { fontSize: '13px', color: '#94a3b8' };

const mainTable = { width: '100%', borderCollapse: 'collapse' };
const tableHeadRow = { borderBottom: '1px solid #e2e8f0' };
const thStyle = { padding: '12px 24px', textAlign: 'left', fontSize: '12px', color: '#64748b', textTransform: 'none', fontWeight: '500' };
const tableRow = { borderBottom: '1px solid #f1f5f9' };
const tdStyle = { padding: '16px 24px', fontSize: '14px' };
const typeBadge = { padding: '4px 10px', background: '#f1f5f9', borderRadius: '6px', fontSize: '12px', color: '#475569', border: '1px solid #e2e8f0' };

const paginationRow = { padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const pageBtn = { padding: '8px 16px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', cursor: 'pointer', color: '#64748b' };
const pageBtnActive = { ...pageBtn, background: '#f8fafc', color: '#1e293b' };