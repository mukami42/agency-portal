import React, { useState } from 'react';
import Layout from './Layout';
import { 
  FileText, Download, Search, Filter, 
  Calendar, MoreVertical, AlertTriangle, 
  CheckCircle, Zap, ChevronLeft, ChevronRight 
} from 'lucide-react';

export default function Report(props) {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState('transactions');

  // --- MOCK DATA ---
  const transactionData = [
    { id: 'TXN-85261', name: 'Selah Jenkins', code: 'AC-002', type: 'Cash-In', amount: '$1,240.00', status: 'Success', time: '2024-03-24 14:22:01' },
    { id: 'TXN-88492', name: 'Michael Chen', code: 'AB-125', type: 'Transfer', amount: '$450.00', status: 'Failed', time: '2024-03-24 14:15:38' },
    { id: 'TXN-88093', name: 'Babatunde Okafor', code: 'AG-012', type: 'Bill Payment', amount: '$3,000.00', status: 'Success', time: '2024-03-24 13:33:17' },
    { id: 'TXN-88254', name: 'Linda Thompson', code: 'AC-302', type: 'Cash-Out', amount: '$55.00', status: 'Pending', time: '2024-03-24 12:22:00' },
    { id: 'TXN-88255', name: 'Sarah Jenkins', code: 'AC-002', type: 'Cash-In', amount: '$630.00', status: 'Success', time: '2024-03-24 12:45:30' },
  ];

  const alertData = [
    { id: 'ALT-101', name: 'System Core', code: 'ERR-01', type: 'Critical', amount: 'N/A', status: 'Failed', time: '2024-03-24 15:00:00' },
  ];

  const currentData = activeTab === 'transactions' ? transactionData : alertData;

  return (
    <Layout {...props}>
      {/* 1. HEADER SECTION */}
      <div style={headerStyle}>
        <div>
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#1e293b' }}>Reports & Alerts</h2>
          <p style={{ color: '#64748b', marginTop: '4px' }}>Monitor system transactions and resolve operational alerts.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={whiteBtn}><FileText size={16} /> Export CSV</button>
          <button style={blueBtn}><Download size={16} /> PDF Report</button>
        </div>
      </div>

      {/* 2. KPI CARDS SECTION */}
      <div style={kpiGrid}>
        <div style={card}>
          <div style={cardTop}>
            <span style={cardLabel}>Audit Success Rate</span>
            <Zap size={16} color="#64748b" />
          </div>
          <div style={cardValue}>98.4% <span style={trendUp}>↑ +0.2%</span></div>
          <div style={cardSub}>Vs. previous 30-day average</div>
        </div>

        <div style={card}>
          <div style={cardTop}>
            <span style={cardLabel}>Active Critical Alerts</span>
            <AlertTriangle size={16} color="#ef4444" />
          </div>
          <div style={cardValue}><span style={{ color: '#1e293b' }}>12</span> <span style={alertTrend}>+3</span></div>
          <div style={cardSub}>Requires immediate attention</div>
        </div>

        <div style={card}>
          <div style={cardTop}>
            <span style={cardLabel}>Total Processed (24h)</span>
            <div style={iconCircle}><CheckCircle size={14} color="#007bff" /></div>
          </div>
          <div style={cardValue}>$142,509 <span style={trendUp}>↑ +12%</span></div>
          <div style={cardSub}>Across all registered agents</div>
        </div>
      </div>

      {/* 3. MAIN TABLE CONTAINER */}
      <div style={tableContainer}>
        {/* TABS */}
        <div style={tabContainer}>
          <button 
            style={activeTab === 'transactions' ? activeTabBtn : tabBtn}
            onClick={() => setActiveTab('transactions')}
          >
            Transaction Reports
          </button>
          <button 
            style={activeTab === 'alerts' ? activeTabBtn : tabBtn}
            onClick={() => setActiveTab('alerts')}
          >
            System Alerts <span style={alertBadge}>7</span>
          </button>
        </div>

        {/* FILTERS BAR */}
        <div style={filterBar}>
          <div style={searchWrapper}>
            <Search size={16} color="#94a3b8" />
            <input type="text" placeholder="Search logs..." style={searchInput} />
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button style={utilBtn}><Filter size={14} /> Status</button>
            <button style={utilBtnActive}><Calendar size={14} /> Date Range</button>
            <span style={recordText}>Showing 5 of 1,241 records</span>
          </div>
        </div>

        {/* DATA TABLE */}
        <table style={table}>
          <thead>
            <tr style={tableHeaderRow}>
              <th style={th}>Transaction ID</th>
              <th style={th}>Agent Name</th>
              <th style={th}>Type</th>
              <th style={th}>Amount</th>
              <th style={th}>Status</th>
              <th style={th}>Timestamp</th>
              <th style={th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, idx) => (
              <tr key={idx} style={tableRow}>
                <td style={{ ...td, color: '#007bff', fontWeight: '500' }}>{row.id}</td>
                <td style={td}>
                  <div style={{ fontWeight: '600', color: '#1e293b' }}>{row.name}</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>{row.code}</div>
                </td>
                <td style={td}><span style={typeBadge}>{row.type}</span></td>
                <td style={{ ...td, fontWeight: '600' }}>{row.amount}</td>
                <td style={td}><StatusBadge status={row.status} /></td>
                <td style={{ ...td, color: '#64748b', fontSize: '12px' }}>{row.time}</td>
                <td style={td}><MoreVertical size={16} color="#64748b" style={{ cursor: 'pointer' }} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* FOOTER / PAGINATION */}
        <div style={paginationArea}>
          <span style={{ fontSize: '13px', color: '#64748b' }}>Page 1 of 248</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={pageBtn}>Previous</button>
            <button style={pageBtnActive}>Next</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// --- SUB-COMPONENTS ---
function StatusBadge({ status }) {
  const base = { padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '500' };
  if (status === 'Success') return <span style={{ ...base, backgroundColor: '#f0fdf4', color: '#16a34a', border: '1px solid #dcfce7' }}>Success</span>;
  if (status === 'Failed') return <span style={{ ...base, backgroundColor: '#fef2f2', color: '#ef4444', border: '1px solid #fee2e2' }}>Failed</span>;
  return <span style={{ ...base, backgroundColor: '#f8fafc', color: '#64748b', border: '1px solid #e2e8f0' }}>Pending</span>;
}

// --- STYLES ---
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' };
const whiteBtn = { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' };
const blueBtn = { ...whiteBtn, backgroundColor: '#007bff', color: 'white', border: 'none' };

const kpiGrid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '24px' };
const card = { backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' };
const cardTop = { display: 'flex', justifyContent: 'space-between', marginBottom: '12px' };
const cardLabel = { color: '#64748b', fontSize: '14px', fontWeight: '500' };
const cardValue = { fontSize: '28px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', color: '#1e293b' };
const cardSub = { fontSize: '12px', color: '#94a3b8', marginTop: '4px' };
const trendUp = { fontSize: '12px', color: '#22c55e', fontWeight: '600' };
const alertTrend = { fontSize: '12px', color: '#ef4444', fontWeight: '600', backgroundColor: '#fef2f2', padding: '2px 6px', borderRadius: '4px' };
const iconCircle = { backgroundColor: '#eff6ff', padding: '4px', borderRadius: '50%', display: 'flex' };

const tableContainer = { backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' };
const tabContainer = { display: 'flex', borderBottom: '1px solid #f1f5f9', padding: '0 20px' };
const tabBtn = { padding: '16px 20px', fontSize: '14px', color: '#64748b', background: 'none', border: 'none', cursor: 'pointer', borderBottom: '2px solid transparent' };
const activeTabBtn = { ...tabBtn, color: '#1e293b', fontWeight: 'bold', borderBottom: '2px solid #007bff' };
const alertBadge = { backgroundColor: '#ef4444', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '10px', marginLeft: '6px' };

const filterBar = { display: 'flex', justifyContent: 'space-between', padding: '20px' };
const searchWrapper = { display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#f8fafc', padding: '8px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', width: '300px' };
const searchInput = { border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '14px' };
const utilBtn = { display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', backgroundColor: 'white', fontSize: '13px', cursor: 'pointer' };
const utilBtnActive = { ...utilBtn, color: '#007bff', borderColor: '#007bff' };
const recordText = { fontSize: '12px', color: '#94a3b8' };

const table = { width: '100%', borderCollapse: 'collapse' };
const tableHeaderRow = { backgroundColor: '#f8fafc', textAlign: 'left' };
const th = { padding: '14px 20px', fontSize: '13px', color: '#64748b', fontWeight: '500', borderBottom: '1px solid #f1f5f9' };
const tableRow = { borderBottom: '1px solid #f1f5f9' };
const td = { padding: '16px 20px', fontSize: '14px' };
const typeBadge = { border: '1px solid #e2e8f0', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', color: '#64748b', backgroundColor: '#f8fafc' };

const paginationArea = { padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const pageBtn = { padding: '8px 16px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: 'white', color: '#94a3b8', fontSize: '13px', cursor: 'not-allowed' };
const pageBtnActive = { ...pageBtn, color: '#1e293b', cursor: 'pointer' };