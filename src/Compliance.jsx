import React from 'react';
import Layout from './Layout';
import { 
  ShieldCheck, AlertCircle, Clock, FileText, RefreshCw, 
  Plus, Filter, Download, ExternalLink, ChevronRight, Info 
} from 'lucide-react';

export default function Compliance(props) {
  // Mock data for the Maker-Checker Audit Trail
  const auditLogs = [
    { id: 'LOG-8821', activity: 'Agent Deactivation', risk: 'MEDIUM RISK', requester: 'Maker_Sarah', approver: 'Admin_Mike', status: 'Approved', time: '2024-05-24 14:22:01' },
    { id: 'LOG-8819', activity: 'Limit Increase', risk: 'HIGH RISK', requester: 'Maker_Kevin', approver: 'Admin_Mike', status: 'Rejected', time: '2024-05-21 10:10:45' },
    { id: 'LOG-8815', activity: 'Device Registration', risk: 'LOW RISK', requester: 'Maker_Sarah', approver: 'Waiting...', status: 'Pending', time: '2024-05-20 11:05:12' },
    { id: 'LOG-8812', activity: 'Commission Change', risk: 'MEDIUM RISK', requester: 'Maker_James', approver: 'Admin_Mike', status: 'Approved', time: '2024-05-20 10:45:30' },
    { id: 'LOG-8808', activity: 'Outlet Mapping', risk: 'LOW RISK', requester: 'Maker_Sarah', approver: 'Admin_Mike', status: 'Approved', time: '2024-05-19 09:12:10' },
  ];

  return (
    <Layout {...props}>
      {/* HEADER SECTION */}
      <div style={headerSection}>
        <div>
          <h2 style={{ margin: 0, color: '#1e293b', fontSize: '24px', fontWeight: '700' }}>Compliance & Alerts</h2>
          <p style={{ color: '#64748b', margin: '4px 0' }}>Monitor regulatory adherence, manage alert rules, and audit system-wide approvals.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={whiteBtn}><RefreshCw size={16} /> Refresh</button>
          <button style={blueBtn}><Plus size={16} /> New Compliance Rule</button>
        </div>
      </div>

      {/* KPI CARDS */}
      <div style={kpiGrid}>
        <div style={{ ...statCard, borderLeft: '4px solid #ef4444' }}>
          <div style={statContent}>
            <div style={statLabel}>High Risk Alerts</div>
            <div style={statValue}>12</div>
          </div>
          <div style={statIconRed}><AlertCircle size={20} /></div>
        </div>
        <div style={statCard}>
          <div style={statContent}>
            <div style={statLabel}>Pending Approvals</div>
            <div style={statValue}>08</div>
          </div>
          <div style={statIconGrey}><Clock size={20} /></div>
        </div>
        <div style={statCard}>
          <div style={statContent}>
            <div style={statLabel}>Compliance Score</div>
            <div style={statValue}>98.4%</div>
          </div>
          <div style={statIconGreen}><ShieldCheck size={20} /></div>
        </div>
        <div style={{ ...statCard, borderLeft: '4px solid #3b82f6' }}>
          <div style={statContent}>
            <div style={statLabel}>Audit Checks (24h)</div>
            <div style={statValue}>142</div>
          </div>
          <div style={statIconBlue}><FileText size={20} /></div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div style={mainGrid}>
        {/* LEFT COLUMN: AUDIT TRAIL */}
        <div style={{ flex: 1 }}>
          <div style={tabContainer}>
            <div style={{ display: 'flex', gap: '24px' }}>
              <span style={activeTab}>Audit Log</span>
              <span style={inactiveTab}>Commission Reports</span>
              <span style={inactiveTab}>Rule Config</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={toolBtn}><Filter size={14} /> Filters</button>
              <button style={toolBtn}>CSV</button>
              <button style={toolBtn}>PDF</button>
            </div>
          </div>

          <div style={tableWrapper}>
            <div style={tableHeader}>
              <h4 style={{ margin: 0, fontSize: '16px' }}>Maker-Checker Audit Trail</h4>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Showing 1-5 of 142 entries</span>
            </div>
            <table style={auditTable}>
              <thead>
                <tr style={thRow}>
                  <th style={thStyle}>Log ID</th>
                  <th style={thStyle}>Activity Type</th>
                  <th style={thStyle}>Requester</th>
                  <th style={thStyle}>Approver</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map((log) => (
                  <tr key={log.id} style={trStyle}>
                    <td style={{ ...tdStyle, color: '#3b82f6', fontWeight: '600' }}>{log.id}</td>
                    <td style={tdStyle}>
                      <div style={{ fontWeight: '500' }}>{log.activity}</div>
                      <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700' }}>{log.risk}</div>
                    </td>
                    <td style={tdStyle}>{log.requester}</td>
                    <td style={tdStyle}>{log.approver}</td>
                    <td style={tdStyle}><StatusBadge status={log.status} /></td>
                    <td style={{ ...tdStyle, color: '#64748b', fontSize: '12px' }}>{log.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={paginationRow}>
              <button style={pageBtn}>Previous</button>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={pageCircleActive}>1</span>
                <span style={pageCircle}>2</span>
                <span style={pageCircle}>3</span>
                <span style={{ color: '#94a3b8' }}>...</span>
                <span style={pageCircle}>12</span>
              </div>
              <button style={pageBtn}>Next</button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SIDEBARS */}
        <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* ACTIVE INCIDENTS */}
          <div style={sideCard}>
            <div style={sideHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444' }}>
                <AlertCircle size={16} /> <span style={{ fontWeight: '700', fontSize: '13px' }}>Active Incidents</span>
              </div>
              <span style={liveBadge}>Live</span>
            </div>
            <div style={incidentList}>
              <IncidentItem id="ALT-01" type="High" title="Suspicious Transaction Pattern" entity="AG-9821 (John Store)" time="Triggered 2 hours ago" />
              <IncidentItem id="ALT-05" type="Medium" title="Frequent Offline Status" entity="AG-4412 (General Kiosk)" time="Triggered 5 hours ago" />
              <IncidentItem id="ALT-12" type="High" title="Bulk Payout Threshold Exceeded" entity="AG-1102 (North Hub)" time="Triggered 12 mins ago" />
            </div>
            <button style={viewAllBtn}>VIEW ALL ALERT HISTORY</button>
          </div>

          {/* QUICK TIP */}
          <div style={tipCard}>
            <div style={{ display: 'flex', gap: '10px', color: '#3b82f6', marginBottom: '10px' }}>
              <Info size={18} /> <span style={{ fontWeight: '600', fontSize: '13px' }}>Compliance Quick Tip</span>
            </div>
            <p style={{ margin: 0, fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>
              Maker-checker approvals for <strong>Commission Settings</strong> now require a mandatory comment if the change is greater than 12% of the previous value.
            </p>
            <a href="#" style={{ fontSize: '12px', color: '#3b82f6', textDecoration: 'none', marginTop: '8px', display: 'block' }}>Read Policy Update</a>
          </div>

          {/* RECENT EXPORTS */}
          <div style={sideCard}>
            <div style={{ fontWeight: '700', fontSize: '13px', marginBottom: '15px' }}>Recent Exports</div>
            <ExportItem name="April_Full_Audit.csv" time="2d ago" />
            <ExportItem name="Q1_Commission_Review.pdf" time="1w ago" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// --- SUB-COMPONENTS ---

function StatusBadge({ status }) {
  const base = { padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' };
  if (status === 'Approved') return <span style={{ ...base, color: '#16a34a', backgroundColor: '#f0fdf4' }}>✓ Approved</span>;
  if (status === 'Rejected') return <span style={{ ...base, color: 'white', backgroundColor: '#ef4444' }}>Rejected</span>;
  return <span style={{ ...base, color: '#64748b', backgroundColor: '#f1f5f9' }}>Pending</span>;
}

function IncidentItem({ id, type, title, entity, time }) {
  return (
    <div style={{ padding: '12px 0', borderBottom: '1px solid #f1f5f9' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
        <span style={{ fontSize: '11px', fontWeight: '800' }}>{id}</span>
        <span style={{ fontSize: '10px', padding: '1px 6px', borderRadius: '4px', backgroundColor: type === 'High' ? '#fee2e2' : '#fef3c7', color: type === 'High' ? '#ef4444' : '#d97706', fontWeight: '800' }}>{type}</span>
      </div>
      <div style={{ fontWeight: '700', fontSize: '12px', marginBottom: '2px' }}>{title}</div>
      <div style={{ fontSize: '11px', color: '#94a3b8' }}>{entity}</div>
      <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Clock size={10} /> {time}
      </div>
    </div>
  );
}

function ExportItem({ name, time }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#475569' }}>
        <FileText size={14} color="#94a3b8" /> {name}
      </div>
      <span style={{ fontSize: '11px', color: '#94a3b8' }}>{time}</span>
    </div>
  );
}

// --- STYLES ---

const headerSection = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' };
const whiteBtn = { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '14px', color: '#475569' };
const blueBtn = { ...whiteBtn, backgroundColor: '#3b82f6', color: 'white', border: 'none' };

const kpiGrid = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' };
const statCard = { backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const statContent = { display: 'flex', flexDirection: 'column' };
const statLabel = { color: '#64748b', fontSize: '12px', fontWeight: '600', marginBottom: '4px' };
const statValue = { fontSize: '24px', fontWeight: '800', color: '#1e293b' };

const statIconRed = { width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#fef2f2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const statIconGrey = { ...statIconRed, backgroundColor: '#f8fafc', color: '#64748b' };
const statIconGreen = { ...statIconRed, backgroundColor: '#f0fdf4', color: '#22c55e' };
const statIconBlue = { ...statIconRed, backgroundColor: '#eff6ff', color: '#3b82f6' };

const mainGrid = { display: 'flex', gap: '24px', alignItems: 'flex-start' };
const tabContainer = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '0' };
const activeTab = { color: '#1e293b', fontWeight: '700', borderBottom: '2px solid #1e293b', paddingBottom: '12px', fontSize: '13px', cursor: 'pointer' };
const inactiveTab = { color: '#94a3b8', fontWeight: '600', paddingBottom: '12px', fontSize: '13px', cursor: 'pointer' };
const toolBtn = { padding: '6px 12px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px', fontWeight: '600', color: '#475569', cursor: 'pointer', marginBottom: '8px' };

const tableWrapper = { backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' };
const tableHeader = { padding: '16px 20px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const auditTable = { width: '100%', borderCollapse: 'collapse' };
const thRow = { backgroundColor: '#f8fafc', borderBottom: '1px solid #f1f5f9' };
const thStyle = { textAlign: 'left', padding: '12px 20px', fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' };
const trStyle = { borderBottom: '1px solid #f1f5f9' };
const tdStyle = { padding: '16px 20px', fontSize: '13px', color: '#1e293b' };

const paginationRow = { padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const pageBtn = { background: 'none', border: 'none', color: '#94a3b8', fontSize: '13px', fontWeight: '600', cursor: 'pointer' };
const pageCircle = { width: '28px', height: '28px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '600', color: '#64748b', cursor: 'pointer' };
const pageCircleActive = { ...pageCircle, backgroundColor: '#3b82f6', color: 'white' };

const sideCard = { backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' };
const sideHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' };
const liveBadge = { fontSize: '10px', fontWeight: '800', backgroundColor: '#fee2e2', color: '#ef4444', padding: '2px 8px', borderRadius: '10px', textTransform: 'uppercase' };
const incidentList = { display: 'flex', flexDirection: 'column' };
const viewAllBtn = { width: '100%', padding: '10px', marginTop: '15px', background: 'none', border: 'none', color: '#3b82f6', fontSize: '11px', fontWeight: '800', cursor: 'pointer', borderTop: '1px solid #f1f5f9' };

const tipCard = { backgroundColor: '#eff6ff', border: '1px solid #dbeafe', borderRadius: '12px', padding: '20px' };