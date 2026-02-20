import React from 'react';
import Layout from './Layout';
import Agents from './Agents'; // Import the new file
import Devices from './Devices';
import Report from './Report';
import Compliance from './Compliance';

import { User, Building2, Check, ShieldCheck } from 'lucide-react';

export default function Dashboard(props) {
  // If the user clicked "Agents" in the sidebar, show the Agents component instead
  if (props.currentPage === 'Agents') {
    return <Agents {...props} />;
  }

  // 2. NEW: If the user clicked "Devices", show Devices component
  if (props.currentPage === 'Devices') { // Ensure this is plural 'Devices'
  return <Devices {...props} />;
}

if (props.currentPage === 'Compliance') { 
    return <Compliance {...props} />; 
  }

  if (props.currentPage === 'Report') { 
    return <Report {...props} />; 
  }


  return (
    <Layout {...props}>
      <div style={{ marginBottom: '25px' }}>
        <h2 style={{ margin: 0, color: '#1e293b' }}>System Dashboard</h2>
        <p style={{ color: '#64748b' }}>Welcome back, {props.username}.</p>
      </div>

      {/* KPI CARDS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' }}>
        <KPICard title="Total Active Agents" value="1,284" change="+12%" icon={<User color="#007bff" />} />
        <KPICard title="Connected Devices" value="3,412" change="-2%" icon={<Building2 color="#007bff" />} />
        <KPICard title="Avg. Commission" value="$4,120.50" change="+8.4%" icon={<Check color="#007bff" />} />
        <KPICard title="Success Rate" value="99.92%" change="+0.02%" icon={<ShieldCheck color="#007bff" />} />
      </div>

      {/* LOWER CONTENT SECTION */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        {/* Left Box: Chart Placeholder */}
        <div style={contentBoxStyle}>
          <h4 style={{ margin: '0 0 20px 0' }}>Commission Summary</h4>
          <div style={chartPlaceholderStyle}>
            Chart Visualization Placeholder
          </div>
        </div>

        {/* Right Box: Action/Approvals */}
        <div style={contentBoxStyle}>
          <h4 style={{ margin: '0 0 20px 0' }}>Pending Approvals</h4>
          <p style={{ fontSize: '13px', color: '#7f8893' }}>Actions requiring Maker-Checker validation.</p>
          <button style={actionBtnStyle}>View All Approvals</button>
        </div>
      </div>
    </Layout>
  );
}

// --- HELPER COMPONENT FOR KPI CARDS ---
function KPICard({ title, value, change, icon }) {
  return (
    <div style={kpiCardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={iconBoxStyle}>{icon}</div>
        <span style={{ 
          fontSize: '12px', 
          color: change.startsWith('+') ? '#22c55e' : '#ef4444', 
          fontWeight: 'bold' 
        }}>
          {change}
        </span>
      </div>
      <div style={{ color: '#64748b', fontSize: '12px' }}>{title}</div>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginTop: '5px' }}>{value}</div>
    </div>
  );
}

// --- DASHBOARD-SPECIFIC STYLES ---
const kpiCardStyle = { 
  backgroundColor: 'white', 
  padding: '20px', 
  borderRadius: '12px', 
  border: '1px solid #e2e8f0', 
  boxShadow: '0 1px 3px rgba(0,0,0,0.02)' 
};

const iconBoxStyle = { 
  width: '35px', 
  height: '35px', 
  borderRadius: '8px', 
  backgroundColor: '#eff6ff', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center' 
};

const contentBoxStyle = { 
  backgroundColor: 'white', 
  padding: '25px', 
  borderRadius: '12px', 
  border: '1px solid #e2e8f0' 
};

const chartPlaceholderStyle = { 
  height: '200px', 
  backgroundColor: '#f8fafc', 
  borderRadius: '8px', 
  border: '1px dashed #cbd5e1', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  color: '#94a3b8' 
};

const actionBtnStyle = { 
  padding: '12px 20px', 
  backgroundColor: '#007bff', 
  color: 'white', 
  border: 'none', 
  borderRadius: '4px', 
  cursor: 'pointer', 
  fontWeight: 'bold', 
  width: '100%',
  marginTop: '10px'
};