import React from 'react';
import Layout from './Layout';
import { Users, TrendingUp, CheckCircle, Clock, Download, Plus, Filter, ChevronRight } from 'lucide-react';

export default function Agents(props) {
  // Mock data to match your template
  const agents = [
    { id: 'AGT-001', name: 'Michael Chen', location: 'Downtown Hub', volume: '$45,200', success: '98.5%', tier: 'Gold (1.2%)', status: 'Active', img: 'MC' },
    { id: 'AGT-002', name: 'Sarah Williams', location: 'North Plaza', volume: '$32,000', success: '94.2%', tier: 'Silver (1.0%)', status: 'Active', img: 'SW' },
    { id: 'AGT-003', name: 'David Okoro', location: 'East Terminal', volume: '$12,400', success: '99.1%', tier: 'Bronze (0.8%)', status: 'Pending Approval', img: 'DO' },
    { id: 'AGT-004', name: 'Elena Rodriguez', location: 'South Market', volume: '$58,500', success: '97.8%', tier: 'Platinum (1.5%)', status: 'Active', img: 'ER' },
    { id: 'AGT-005', name: 'James Wilson', location: 'West Wing', volume: '$2,100', success: '82.4%', tier: 'Bronze (0.8%)', status: 'Inactive', img: 'JW' },
  ];

  return (
    <Layout {...props}>
      {/* 1. HEADER & PRIMARY ACTIONS */}
      <div style={headerSection}>
        <div>
          <h2 style={{ margin: 0, color: '#1e293b', fontSize: '24px' }}>Agent Management</h2>
          <p style={{ color: '#64748b', margin: '5px 0' }}>Onboard, manage, and monitor your agency banking network.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ ...whiteBtn, color: '#000000' }}>
  <Download size={16} color="#000000" /> 
  Export
</button>
          <button style={blueBtn}><Plus size={16} /> Create New Agent</button>
        </div>
      </div>

      {/* 2. KPI CARDS */}
      <div style={kpiGrid}>
        <KPICard title="Total Agents" value="2,543" change="+12.5%" icon={<Users color="#007bff" />} />
        <KPICard title="Active Volume" value="$1.2M" change="+8.2%" icon={<TrendingUp color="#007bff" />} />
        <KPICard title="Avg. Success Rate" value="96.8%" change="-0.4%" isNegative icon={<CheckCircle color="#007bff" />} />
        <KPICard title="Pending Approvals" value="18" change="+4" icon={<Clock color="#007bff" />} />
      </div>

      {/* 3. FILTERS & SEARCH */}
      <div style={filterBar}>
       <button style={{ ...filterBtn, color: '#000000' }}>
  <Filter size={16} color="#000000" /> 
  All Filters 
  <span style={filterBadge}>3</span>
</button>
        <div style={{ color: '#64748b', fontSize: '13px' }}>
          Showing 5 of 2,543 agents 
          <span style={paginationStyle}> 1 2 3 </span>
        </div>
      </div>

      {/* 4. AGENT DATA TABLE */}
      <div style={tableContainer}>
        <table style={mainTable}>
          <thead>
            <tr style={tableHeaderRow}>
              <th style={thStyle}><input type="checkbox" /></th>
              <th style={thStyle}>Agent Information</th>
              <th style={thStyle}>Outlet Assignment</th>
              <th style={thStyle}>Performance</th>
              <th style={thStyle}>Commission</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr key={agent.id} style={tableRow}>
                <td style={tdStyle}><input type="checkbox" /></td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={avatarCircle}>{agent.img}</div>
                    <div>
                      <div style={{ fontWeight: '600', color: '#1e293b' }}>{agent.name}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>{agent.id}</div>
                    </div>
                  </div>
                </td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748b' }}>
                    📍 {agent.location}
                  </div>
                </td>
                <td style={tdStyle}>
                  <div style={{ fontWeight: '500' }}>{agent.volume}</div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: parseFloat(agent.success) < 85 ? '#ef4444' : '#64748b',
                    borderBottom: parseFloat(agent.success) < 85 ? '2px solid #ef4444' : 'none',
                    display: 'inline-block'
                  }}>
                    {agent.success}
                  </div>
                </td>
                <td style={tdStyle}>
                  <span style={tierBadge}>{agent.tier}</span>
                </td>
                <td style={tdStyle}>
                  <StatusBadge status={agent.status} />
                </td>
                <td style={tdStyle}>
                  <button style={viewBtn}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </Layout>
  );
}

// --- SUB-COMPONENTS ---

function KPICard({ title, value, change, icon, isNegative }) {
  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <div style={{ color: '#64748b', fontSize: '14px', marginBottom: '8px' }}>{title}</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b' }}>{value}</div>
          <div style={{ fontSize: '12px', marginTop: '4px', color: isNegative ? '#ef4444' : '#22c55e' }}>
            <strong>{change}</strong> vs last month
          </div>
        </div>
        <div style={iconBox}>{icon}</div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500',
  };

  if (status === 'Active') {
    return <span style={{ ...styles, backgroundColor: '#f0fdf4', color: '#16a34a' }}>Active</span>;
  } else if (status === 'Pending Approval') {
    return <span style={{ ...styles, backgroundColor: '#fff7ed', color: '#c2410c' }}>⏳ Pending Approval</span>;
  } else {
    return <span style={{ ...styles, backgroundColor: '#fef2f2', color: '#dc2626' }}>Inactive</span>;
  }
}

// --- STYLES ---

const headerSection = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' };
const whiteBtn = { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' };
const blueBtn = { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' };

const kpiGrid = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' };
const cardStyle = { backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' };
const iconBox = { width: '45px', height: '45px', backgroundColor: '#eff6ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' };

const filterBar = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0' };
const filterBtn = { display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer' };
const filterBadge = { backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' };
const paginationStyle = { marginLeft: '15px', color: '#007bff', cursor: 'pointer', letterSpacing: '5px' };

const tableContainer = { backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' };
const mainTable = { width: '100%', borderCollapse: 'collapse' };
const tableHeaderRow = { backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' };
const thStyle = { padding: '15px 20px', textAlign: 'left', color: '#64748b', fontSize: '13px', fontWeight: '500' };
const tableRow = { borderBottom: '1px solid #f1f5f9' };
const tdStyle = { padding: '15px 20px', fontSize: '14px', verticalAlign: 'middle' };

const avatarCircle = { width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' };
const tierBadge = { padding: '4px 10px', backgroundColor: '#f1f5f9', borderRadius: '6px', fontSize: '12px', color: '#475569' };
const viewBtn = { color: '#007bff', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500' };

const footerStyle = { marginTop: '40px', padding: '20px 0', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '12px' };