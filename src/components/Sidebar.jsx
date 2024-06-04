import React, { useState } from 'react';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button onClick={toggleSidebar}>
        {collapsed ? 'Expand' : 'Collapse'}
      </button>
      {/* Sidebar content */}
    </aside>
  );
}

export default Sidebar;