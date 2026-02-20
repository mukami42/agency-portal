import React from 'react';
import Layout from './Layout';
import { 
  Smartphone, Wifi, Battery, AlertTriangle, RefreshCw, Plus, 
  Filter, MoreVertical, MapPin, Zap, Clock, RotateCcw, ShieldAlert,
  ChevronLeft, ChevronRight
} from 'lucide-react';

export default function Devices(props) {
  const deviceList = [
    { id: 'DEV-9081', outlet: 'Lagos Main Branch', status: 'Online', battery: 83, seen: '2 mins ago' },
    { id: 'DEV-9082', outlet: 'Ikeja Digital Hub', status: 'Online', battery: 95, seen: 'Just now' },
    { id: 'DEV-9082', outlet: 'Unassigned', status: 'Critical', battery: 0, seen: 'Just now' },
    { id: 'DEV-9083', outlet: 'Victoria Island Office', status: 'Idle', battery: 13, seen: '12 hours ago' },
    { id: 'DEV-9085', outlet: 'Lekki Phase 1 Outlet', status: 'Online', battery: 93, seen: '1 min ago' },
  ];

  return (
    <Layout {...props}>
      {/* HEADER AREA */}
      <div style={headerStyle}>
        <div>
          <h2 style={{ margin: 0, color: '#1e293b', fontSize: '24px' }}>Device Management</h2>
          <p style={{ color: '#64748b', margin: '4px 0' }}>Monitor hardware health, assign outlets, and manage remote telemetry.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={whiteBtn}><RefreshCw size={16} /> Sync Status</button>
          <button style={blueBtn}><Plus size={16} /> Onboard Device</button>
        </div>
      </div>

      {/* TOP KPI CARDS */}
      <div style={kpiGrid}>
        <div style={statCard}>
          <div style={statHeader}><span>Active Fleet</span> <div style={iconBlue}><Smartphone size={16} /></div></div>
          <div style={statValue}>1,240 <span style={statLabel}>+12 this week</span></div>
        </div>
        <div style={statCard}>
          <div style={statHeader}><span>Connectivity</span> <div style={iconBlue}><Wifi size={16} /></div></div>
          <div style={statValue}>88% <span style={statLabel}>Net average</span></div>
        </div>
        <div style={statCard}>
          <div style={statHeader}><span>Health Index</span> <div style={iconRed}><Zap size={16} /></div></div>
          <div style={statValue}>92% <span style={statLabel}>Action required</span></div>
        </div>
        <div style={statCard}>
          <div style={statHeader}><span>Critical Battery</span> <div style={iconRed}><Battery size={16} /></div></div>
          <div style={statValue}>14 <span style={statLabel}>Action required</span></div>
        </div>
      </div>

      <div style={mainContentGrid}>
        {/* LEFT COLUMN: TABLE */}
        <div style={{ flex: 1 }}>
          <div style={tabsRow}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span style={activeTab}>All Devices</span>
              <span style={inactiveTab}>Online</span>
              <span style={inactiveTab}>Offline</span>
              <span style={inactiveTab}>Unassigned</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={filterBtn}><Filter size={14} /> Filters</button>
              <button style={filterBtn}><RefreshCw size={14} /></button>
            </div>
          </div>

          <div style={tableWrapper}>
            <table style={deviceTable}>
              <thead>
                <tr style={tableHeadRow}>
                  <th style={thStyle}>Device ID</th>
                  <th style={thStyle}>Assigned Outlet</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Battery</th>
                  <th style={thStyle}>Last Seen</th>
                  <th style={thStyle}></th>
                </tr>
              </thead>
              <tbody>
                {deviceList.map((dev, i) => (
                  <tr key={i} style={tableRow}>
                    <td style={tdStyle}><strong>{dev.id}</strong></td>
                    <td style={{ ...tdStyle, color: dev.outlet === 'Unassigned' ? '#ef4444' : '#1e293b' }}>
                      {dev.outlet}
                    </td>
                    <td style={tdStyle}>
                      {dev.status === 'Critical' ? <span style={critBadge}>Critical</span> : <span style={dotActive}></span>}
                    </td>
                    <td style={tdStyle}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: dev.battery < 15 ? '#ef4444' : '#64748b' }}>
                          <Battery size={14} /> {dev.battery}%
                       </div>
                    </td>
                    <td style={tdStyle}>{dev.seen}</td>
                    <td style={tdStyle}><MoreVertical size={16} color="#94a3b8" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={paginationRow}>
                <span style={{ fontSize: '13px', color: '#64748b' }}>Showing 5 of 1,240 results</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={pageBtn}>Previous</button>
                    <button style={pageBtn}>Next</button>
                </div>
            </div>
          </div>

          {/* SECURITY NOTICE BOX */}
          <div style={noticeBox}>
             <ShieldAlert size={20} color="#64748b" />
             <div style={{ fontSize: '13px', color: '#475569' }}>
                <strong>Security Protocol Notice:</strong> All critical device actions including remote registration and firmware rollback require secondary approval by a designated <strong>Checker</strong>.
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: DETAILS PANEL */}
        <div style={detailsPanel}>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ margin: 0, color: '#000000' }}>DEV-9081</h3>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>SN-445021</span>
          </div>

          <div style={infoGrid}>
            <div>
                <div style={infoLabel}>MODEL</div>
                <div style={infoVal}>Verifone V200c</div>
            </div>
            <div>
                <div style={infoLabel}>FIRMWARE</div>
                <div style={infoVal}>v2.4.1</div>
            </div>
          </div>

          <div style={telemetryList}>
            <div style={telItem}><MapPin size={16} /> <span>Current Outlet</span> <strong>Lagos Main Branch</strong></div>
            <div style={telItem}><Zap size={16} /> <span>Power Level</span> <strong>88%</strong></div>
            <div style={telItem}><Clock size={16} /> <span>Last Pulse</span> <strong>2 mins ago</strong></div>
          </div>

          <div style={{ marginTop: '30px' }}>
            <h4 style={sectionTitle}>RECENT INTERACTIONS</h4>
            <div style={timeline}>
                <TimelineItem title="Remote Restart" desc="Triggered system reboot for troubleshooting" user="Admin Jalon" date="2024.02.18 14:41" />
                <TimelineItem title="Offline" desc="Device disconnected from network" user="System" date="2024.02.16 12:46" />
                <TimelineItem title="Firmware Update" desc="Auto-updated to version 2.5.0" user="System" date="2024.02.14 09:30" />
            </div>
          </div>

          <div style={actionButtonsRow}>
             <button style={restartBtn}><RotateCcw size={14} /> Restart</button>
             <button style={unregBtn}><AlertTriangle size={14} /> Unregister</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// --- SUB-COMPONENTS ---

function TimelineItem({ title, desc, user, date }) {
    return (
        <div style={tmItem}>
            <div style={tmDot}></div>
            <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', fontSize: '13px' }}>{title}</div>
                <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>{desc}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8' }}>
                    <span>By {user}</span>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
}

// --- STYLES ---
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' };
const whiteBtn = { display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', fontSize: '14px' };
const blueBtn = { ...whiteBtn, backgroundColor: '#3b82f6', color: 'white', border: 'none' };

const kpiGrid = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' };
const statCard = { background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' };
const statHeader = { display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#64748b', marginBottom: '8px' };
const statValue = { fontSize: '22px', fontWeight: '700', color: '#1e293b' };
const statLabel = { fontSize: '12px', color: '#94a3b8', fontWeight: '400', marginLeft: '8px' };

const iconBlue = { width: '32px', height: '32px', borderRadius: '6px', background: '#eff6ff', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const iconRed = { ...iconBlue, background: '#fef2f2', color: '#ef4444' };

const mainContentGrid = { display: 'flex', gap: '24px', alignItems: 'flex-start' };
const tabsRow = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' };
const activeTab = { color: '#ef4444', fontWeight: '600', borderBottom: '2px solid #ef4444', paddingBottom: '8px', fontSize: '14px', cursor: 'pointer' };
const inactiveTab = { color: '#64748b', fontSize: '14px', cursor: 'pointer' };

const filterBtn = { display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' };

const tableWrapper = { background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' };
const deviceTable = { width: '100%', borderCollapse: 'collapse' };
const tableHeadRow = { background: '#f8fafc', borderBottom: '1px solid #e2e8f0' };
const thStyle = { padding: '12px 16px', textAlign: 'left', fontSize: '12px', color: '#64748b', textTransform: 'uppercase' };
const tableRow = { borderBottom: '1px solid #f1f5f9' };
const tdStyle = { padding: '16px', fontSize: '13px' };

const critBadge = { background: '#ef4444', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '600' };
const dotActive = { width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', display: 'inline-block' };

const paginationRow = { padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc' };
const pageBtn = { padding: '6px 12px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' };

const noticeBox = { marginTop: '20px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' };

// RIGHT PANEL STYLES
const detailsPanel = { width: '320px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', position: 'sticky', top: '20px' };
const infoGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', background: '#f8fafc', padding: '12px', borderRadius: '8px' };
const infoLabel = { fontSize: '10px', color: '#94a3b8', fontWeight: '600' };
const infoVal = { fontSize: '13px', fontWeight: '600', color: '#1e293b' };

const telemetryList = { marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' };
const telItem = { display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#64748b' };
const sectionTitle = { fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px', marginBottom: '15px' };

const timeline = { position: 'relative', paddingLeft: '20px', borderLeft: '1px solid #e2e8f0' };
const tmItem = { marginBottom: '20px', position: 'relative' };
const tmDot = { position: 'absolute', left: '-24px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6', border: '2px solid white' };

const actionButtonsRow = { marginTop: '24px', display: 'flex', gap: '10px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' };
const restartBtn = { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'white', cursor: 'pointer', fontSize: '13px' };
const unregBtn = { ...restartBtn, color: '#ef4444' };