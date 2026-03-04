import React from 'react';
import Layout from './Layout';
import { 
  Search, Filter, Clock, CheckCircle, XCircle, 
  Info, ArrowRight, History, ShieldAlert, User,
  MoreVertical, CheckCircle2
} from 'lucide-react';

export default function Approvals(props) {
  const pendingRequests = [
    { id: 'REQ-1024', type: 'Commission Change', target: 'Blue Horizon Fintech (AG-8829)', maker: 'Sarah Jenkins', time: '2h ago', active: true },
    { id: 'REQ-1025', type: 'Device Registration', target: 'Device: Verifone V240m', maker: 'Michael Chen', time: '45m ago', active: false },
    { id: 'REQ-1026', type: 'Agent Deactivation', target: 'Agent: QuickPay Solutions', maker: 'James Wilson', time: '18h ago', active: false },
  ];

  return (
    <Layout {...props}>
      <div style={pageContainer}>
        
        {/* LEFT COLUMN: PENDING LIST */}
        <div style={sidebar}>
          <div style={sidebarHeader}>
            <h3 style={{ margin: 0, fontSize: '18px', color: '#1e293b' }}>Pending Approval</h3>
            <span style={itemCountBadge}>3 Items</span>
          </div>

          <div style={searchContainer}>
            <div style={searchBar}>
              <Search size={14} color="#94a3b8" />
              <input type="text" placeholder="Search requests..." style={searchInput} />
            </div>
            <button style={iconBtn}><Filter size={14} /></button>
          </div>

          <div style={requestList}>
            {pendingRequests.map((req) => (
              <div key={req.id} style={req.active ? activeListItem : listItem}>
                <div style={listMeta}>
                  <span style={reqIdText}>{req.id}</span>
                  <span style={timeText}><Clock size={12} /> {req.time}</span>
                </div>
                <div style={listTitle}>{req.type}</div>
                <div style={listTarget}>{req.target}</div>
                <div style={makerLine}>
                  <div style={avatarCircle}><User size={10} /></div>
                  <span>{req.maker}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: DETAIL VIEW */}
        <div style={detailView}>
          {/* TOP HEADER */}
          <div style={detailHeader}>
            <div style={headerIconBox}>
              <CheckCircle2 size={24} color="#3b82f6" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={breadcrumb}>
                <span style={{ fontWeight: '700' }}>CASE ID: REQ-1024</span>
                <span style={statusLabel}>PENDING REVIEW</span>
              </div>
              <h2 style={detailTitle}>Commission Change</h2>
              <div style={detailSubtitle}>Agent: Blue Horizon Fintech (AG-8829)</div>
            </div>
            <div style={makerStamp}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '13px', color: '#1e293b' }}>Requested by: <strong>Sarah Jenkins</strong></div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Maker (Branch A)</div>
              </div>
            </div>
          </div>

          {/* CHANGE COMPARISON SECTION */}
          <div style={sectionSection}>
            <div style={sectionHeading}><Info size={16} /> Change Comparison</div>
            <div style={comparisonGrid}>
              <div style={gridLabel}>CURRENT STATE</div>
              <div style={gridLabel}>PROPOSED CHANGES</div>

              {/* Row 1 */}
              <div style={comparisonCard}>
                <div style={cardField}>BASE RATE</div>
                <div style={oldValue}>1.2%</div>
              </div>
              <div style={comparisonCard}>
                <div style={newValue}><ArrowRight size={14} /> 1.5%</div>
              </div>

              {/* Row 2 */}
              <div style={comparisonCard}>
                <div style={cardField}>TIER 2 CAP</div>
                <div style={oldValue}>$500</div>
              </div>
              <div style={comparisonCard}>
                <div style={newValue}><ArrowRight size={14} /> $750</div>
              </div>

              {/* Row 3 */}
              <div style={comparisonCard}>
                <div style={cardField}>PAYOUT CYCLE</div>
                <div style={oldValue}>Weekly</div>
              </div>
              <div style={comparisonCard}>
                <div style={newValue}><ArrowRight size={14} /> Bi-Weekly</div>
              </div>
            </div>
          </div>

          {/* LOWER SECTION: HISTORY & GOVERNANCE */}
          <div style={footerGrid}>
            <div style={{ flex: 1 }}>
              <div style={sectionHeading}><History size={16} /> Entity History</div>
              <div style={historyTimeline}>
                <HistoryItem 
                  date="2024-04-15" 
                  title="Approved Commission" 
                  user="Admin User" 
                  note="Annual review adjustment." 
                />
                <HistoryItem 
                  date="2024-03-01" 
                  title="Onboarded Agent" 
                  user="System" 
                  note="Initial registration." 
                />
              </div>
            </div>

            <div style={governanceBox}>
              <div style={govTitle}><ShieldAlert size={16} /> Governance Notice</div>
              <ul style={govList}>
                <li>Approvals are final and will reflect in production immediately.</li>
                <li>Rejections require a detailed reason to assist the Maker.</li>
                <li>This action will be logged under your Checker ID for audit.</li>
              </ul>
            </div>
          </div>

          {/* ACTIONS AREA */}
          <div style={actionFooter}>
            <div style={{ flex: 1 }}>
              <label style={inputLabel}>DECISION COMMENTS *</label>
              <textarea 
                style={commentArea} 
                placeholder="Explain the reason for approval or rejection (e.g., Verified documents match, rate is within policy range...)"
              />
            </div>
            <div style={actionButtons}>
              <button style={rejectBtn}><XCircle size={16} /> Reject Request</button>
              <button style={approveBtn}><CheckCircle size={16} /> Approve & Commit</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// --- SUB-COMPONENTS ---

function HistoryItem({ date, title, user, note }) {
  return (
    <div style={historyItem}>
      <div style={historyDot}></div>
      <div style={{ flex: 1 }}>
        <div style={historyDate}>{date}</div>
        <div style={historyTitle}>{title}</div>
        <div style={historyUser}><User size={10} /> {user}</div>
        <div style={historyNote}>"{note}"</div>
      </div>
    </div>
  );
}

// --- STYLES ---

const pageContainer = { display: 'flex', height: 'calc(100vh - 64px)', background: '#f8fafc' };

// Sidebar Styles
const sidebar = { width: '350px', borderRight: '1px solid #e2e8f0', background: 'white', display: 'flex', flexDirection: 'column' };
const sidebarHeader = { padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const itemCountBadge = { background: '#eff6ff', color: '#3b82f6', padding: '2px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' };
const searchContainer = { padding: '0 24px 20px', display: 'flex', gap: '8px' };
const searchBar = { flex: 1, display: 'flex', alignItems: 'center', gap: '8px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 12px' };
const searchInput = { border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', width: '100%' };
const iconBtn = { background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px', cursor: 'pointer' };

const requestList = { flex: 1, overflowY: 'auto' };
const listItem = { padding: '20px 24px', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', transition: '0.2s' };
const activeListItem = { ...listItem, background: '#f8fafc', borderLeft: '4px solid #3b82f6' };
const listMeta = { display: 'flex', justifyContent: 'space-between', marginBottom: '6px' };
const reqIdText = { fontSize: '11px', fontWeight: '700', color: '#64748b' };
const timeText = { fontSize: '11px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' };
const listTitle = { fontWeight: '700', fontSize: '14px', color: '#1e293b', marginBottom: '4px' };
const listTarget = { fontSize: '12px', color: '#64748b', marginBottom: '12px' };
const makerLine = { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#475569' };
const avatarCircle = { width: '20px', height: '20px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' };

// Detail View Styles
const detailView = { flex: 1, padding: '40px', overflowY: 'auto', background: 'white' };
const detailHeader = { display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '40px' };
const headerIconBox = { width: '56px', height: '56px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const breadcrumb = { display: 'flex', gap: '12px', fontSize: '11px', color: '#64748b', marginBottom: '8px' };
const statusLabel = { color: '#f59e0b', fontWeight: '700' };
const detailTitle = { margin: '0 0 4px 0', fontSize: '28px', color: '#1e293b' };
const detailSubtitle = { fontSize: '15px', color: '#64748b' };
const makerStamp = { paddingLeft: '20px' };

const sectionSection = { marginBottom: '40px' };
const sectionHeading = { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: '700', color: '#1e293b', marginBottom: '20px' };
const comparisonGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' };
const gridLabel = { fontSize: '11px', fontWeight: '800', color: '#3b82f6', marginBottom: '8px', letterSpacing: '0.5px' };
const comparisonCard = { background: '#fcfcfd', border: '1px solid #f1f5f9', borderRadius: '10px', padding: '16px' };
const cardField = { fontSize: '10px', fontWeight: '700', color: '#94a3b8', marginBottom: '6px' };
const oldValue = { fontSize: '15px', color: '#94a3b8', textDecoration: 'none' };
const newValue = { fontSize: '15px', fontWeight: '700', color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '10px' };

const footerGrid = { display: 'flex', gap: '40px', marginBottom: '40px' };
const governanceBox = { width: '320px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' };
const govTitle = { fontSize: '14px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' };
const govList = { margin: 0, paddingLeft: '18px', fontSize: '12px', color: '#64748b', lineHeight: '1.6' };

const historyTimeline = { paddingLeft: '12px', borderLeft: '2px solid #f1f5f9' };
const historyItem = { position: 'relative', paddingLeft: '24px', marginBottom: '24px' };
const historyDot = { position: 'absolute', left: '-7px', top: '4px', width: '12px', height: '12px', borderRadius: '50%', background: 'white', border: '2px solid #3b82f6' };
const historyDate = { fontSize: '11px', color: '#94a3b8', marginBottom: '4px' };
const historyTitle = { fontSize: '14px', fontWeight: '700', color: '#475569' };
const historyUser = { fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px', margin: '4px 0' };
const historyNote = { fontSize: '13px', color: '#94a3b8', fontStyle: 'italic' };

const actionFooter = { borderTop: '1px solid #f1f5f9', paddingTop: '32px', display: 'flex', gap: '32px', alignItems: 'flex-end' };
const inputLabel = { display: 'block', fontSize: '11px', fontWeight: '800', color: '#ef4444', marginBottom: '8px' };
const commentArea = { width: '100%', height: '100px', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', fontSize: '13px', resize: 'none', background: '#fcfcfd' };
const actionButtons = { display: 'flex', gap: '12px' };
const approveBtn = { padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' };
const rejectBtn = { ...approveBtn, background: 'white', color: '#ef4444', border: '1px solid #e2e8f0' };