import React from "react";
import SyncButton from "./SyncButton";

function Navbar({ handleFilterChange }) {
  return (
    <nav>
      <h2 className="logo">Cars</h2>
      <input
        type="text"
        placeholder="Filter by name or email"
        onChange={handleFilterChange}
      />
      <SyncButton />
    </nav>
  );
}

export default Navbar;
