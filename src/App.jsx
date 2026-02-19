import { useState } from 'react'
import { LogIn, RotateCcw, AlertTriangle, ShieldCheck, XCircle, Check } from 'lucide-react'
// 1. IMPORT YOUR NEW FILE
import Dashboard from './Dashboard.jsx' 

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('English');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [dashboardVisible, setDashboardVisible] = useState(false); 
  const [role, setRole] = useState('');
  const [branch, setBranch] = useState('');

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setLanguage('English');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let assignedRole = "Maker Scimistator"; 
    let assignedBranch = "KISUMU BRANCH";
    const lowerUser = username.toLowerCase();

    if (lowerUser.includes('checker')) {
      assignedRole = "Checker Manager";
      assignedBranch = "UPPERHILL BRANCH";
    } else if (lowerUser.includes('sharon')) {
      assignedRole = "Maker Scimistator";
      assignedBranch = "KISUMU BRANCH";
    } else {
      assignedRole = "Maker Scimistator";
      assignedBranch = "KAMPALA CENTRAL";
    }

    setRole(assignedRole);
    setBranch(assignedBranch);
    setShowDisclaimer(true); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDisclaimer(false);
    setDashboardVisible(false);
    setUsername('');
    setPassword('');
  };

  // ... inside your App() component ...
const [currentPage, setCurrentPage] = useState('Dashboard');

if (dashboardVisible) {
  return (
    <Dashboard 
      username={username} 
      role={role} 
      branch={branch} 
      handleLogout={handleLogout}
      currentPage={currentPage}      // This tells the app which page is active
      setCurrentPage={setCurrentPage} // This allows the sidebar to change the page
    />
  );
}

  // --- SCREEN 2: SECURITY DISCLAIMER ---
  if (showDisclaimer && !isLoggedIn) {
    return (
      <div style={containerStyle}>
        <div style={{ ...cardStyle, width: '500px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#d63031', marginBottom: '15px' }}>
            <AlertTriangle size={24} />
            <h3 style={{ margin: 0 }}>Login Notification/Disclaimer</h3>
          </div>
          
          <div style={{ backgroundColor: '#fff5f5', padding: '15px', borderLeft: '4px solid #d63031', fontSize: '13px', lineHeight: '1.4', color: '#2d3436' }}>
            <p style={{ margin: '5px 0' }}><strong>You are Welcome!</strong></p>
            <p style={{ margin: '5px 0' }}>Your Last Login Attempt was <strong>Refused</strong> on 09:01 Wednesday 18 February 2026 on Device Name: 192.168.100.103.</p>
            <p style={{ margin: '5px 0' }}>You are Attempting to Login on IP: <strong>192.168.100.103</strong> with MAC Address: <strong>D4-AE-52-75-AF-12</strong>.</p>
          </div>

          <div style={{ marginTop: '15px', fontSize: '12px', color: '#636e72', fontStyle: 'italic', backgroundColor: '#f9f9f9', padding: '10px' }}>
            By clicking on the "Proceed" button and logging into the Neptune Demo Bank RUBIKON banking solution, you agree to abide by the terms of the Bank's policies.
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <button onClick={() => setIsLoggedIn(true)} style={{ ...buttonStyle, backgroundColor: '#2d3436' }}>
              <ShieldCheck size={16} style={{ marginRight: '8px' }} /> Proceed
            </button>
            <button onClick={() => setShowDisclaimer(false)} style={{ ...buttonStyle, backgroundColor: '#b2bec3' }}>
              <XCircle size={16} style={{ marginRight: '8px' }} /> Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- SCREEN 3: BUSINESS UNIT ROLE SELECTION ---
  if (isLoggedIn) {
    return (
      <div style={containerStyle}>
        <div style={{ ...cardStyle, width: '650px' }}>
          <h3 style={{ textAlign: 'center', color: '#333', marginBottom: '20px', fontWeight: '500' }}>
            Select Applicable Business Unit Role
          </h3>

          <table style={tableStyle}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={thStyle}>*</th>
                <th style={thStyle}>Business Unit Role Name</th>
                <th style={thStyle}>Business Unit Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>
                  <div style={radioOuterStyle}><div style={radioInnerStyle}></div></div>
                </td>
                <td style={tdStyle}>{role}</td>
                <td style={tdStyle}>{branch}</td>
              </tr>
            </tbody>
          </table>
          
          <div style={{ display: 'flex', gap: '12px', marginTop: '25px', justifyContent: 'flex-start' }}>
            <button 
              onClick={() => setDashboardVisible(true)} // FIXED: Triggers automatic load
              style={{ ...buttonStyle, backgroundColor: '#2d3436', flex: '0 1 120px' }}
            >
              <Check size={16} style={{ marginRight: '8px', color: '#2ecc71' }} /> Select
            </button>
            <button 
              onClick={handleLogout} 
              style={{ ...buttonStyle, backgroundColor: '#2d3436', flex: '0 1 120px' }}
            >
              <XCircle size={16} style={{ marginRight: '8px', color: '#e74c3c' }} /> Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- SCREEN 1: LOGIN ---
  
 return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#007bff', margin: '0', fontWeight: '400' }}>Hello,</h3>
          <h2 style={{ color: '#007bff', margin: '5px 0 0 0', fontSize: '24px' }}>Welcome Back!</h2>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Username:</label>
            <input 
              type="text" 
              placeholder="ENTER USER ID" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password:</label>
            <input 
              type="password" 
              placeholder="Enter password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Language:</label>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={inputStyle}
            >
              <option value="English">English</option>
              <option value="Luganda">Luganda</option>
              <option value="Swahili">Swahili</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '15px' }}>
            <button type="submit" style={{ ...buttonStyle, backgroundColor: '#2d3436' }}>
              <LogIn size={16} style={{ marginRight: '8px', color: '#f1c40f' }} /> Log in
            </button>
            <button type="button" onClick={handleReset} style={{ ...buttonStyle, backgroundColor: '#2d3436' }}>
              <RotateCcw size={16} style={{ marginRight: '8px', color: '#2ecc71' }} /> Reset User
            </button>
          </div>
        </form>
      </div>
    </div>
  )

}

// --- STYLES (login) ---
const containerStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#E0F4FF', fontFamily: '"Segoe UI", sans-serif' };
const cardStyle = { backgroundColor: 'white', padding: '45px', width: '420px', borderRadius: '2px', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' };
const inputGroupStyle = { display: 'flex', flexDirection: 'column', gap: '6px' };
const labelStyle = { fontWeight: '600', color: '#333', fontSize: '14px' };
const inputStyle = { padding: '12px', borderRadius: '4px', border: '1px solid #000', fontSize: '14px' };
const buttonStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 15px', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', marginTop: '10px', fontSize: '13px', border: '1px solid #ddd' };
const thStyle = { border: '1px solid #ddd', padding: '10px', textAlign: 'left', color: '#333', fontWeight: '600' };
const tdStyle = { border: '1px solid #ddd', padding: '10px', backgroundColor: '#f1f8ff' };

// RADIO STYLES for BUSINESS UNIT ROLE SELECTION
const radioOuterStyle = { width: '16px', height: '16px', borderRadius: '50%', border: '2px solid #007bff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' };
const radioInnerStyle = { width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#007bff' };

