import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(isDrawerOpen);
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <div className="max-w-screen-xl   mx-auto p-4">
          <Outlet></Outlet>
        </div>

        <div
          className={`fixed inset-y-0 left-0 transform ${
            !isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white w-64 shadow-lg transition-transform ease-in-out duration-300 z-10`}
        >
          <div className="py-6 px-4">
            <h2 className="text-xl font-semibold mb-4">Admin Menu</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/admin/">Dashboard</Link>
              </li>
              <li>
                <Link to="/admin/customers">Customer List</Link>
              </li>
              <li>
                <Link to="/admin/adminOrder">Admin Order List</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Rest of your layout */}
      </div>
    </div>
  );
};

export default AdminLayout;
