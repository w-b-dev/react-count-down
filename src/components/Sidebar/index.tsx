import React from "react";
const Sidebar = React.memo(function Sidebar() {
  return (
    <aside className="sidebar">
      <h1>Counting tasks:</h1>
      <div>Open: X</div>
      <div>Total: Y</div>
    </aside>
  );
});
export default Sidebar;
