import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav className="space-y-4">
        <Link to="/" className="block px-4 py-2 rounded hover:bg-gray-700">
          Dashboard
        </Link>
        <Link to="/add" className="block px-4 py-2 rounded hover:bg-gray-700">
          Add Product
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
