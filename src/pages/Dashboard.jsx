
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MonthlyLineChart from "../components/montlylinechart";
import CallWaiting from "../components/callwaiting";
import Cards from "../components/cards";
import Year_Month from "../components/select_y_m";
import Sales_priority from "../components/sales_priority";
import CustomerGraph from "../components/customersGraph";
import AMC_Contract from "../components/amc_contrat";
import SalesReport from "../components/sales_report";
import SystemType from "../components/system_type";
import Calls from "../components/callsTable";
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(false)}
        />
        <main className="flex-1 bg-gray-100 mt-20 sm:mt-24 p-4 lg:pl-80">
          {/* Write Code here */}
          <h1 className="text-3xl text-gray-800">Dashboard</h1>
          <Year_Month />
          <Cards />
          <Sales_priority />

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="bg-white p-6 rounded m-2 shadow-lg">
              <MonthlyLineChart />
            </div>
            <div className="bg-white p-6 rounded  shadow-lg m-2">
              <CallWaiting />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="bg-white p-6 rounded m-2 shadow-lg">
              <div className="">
                <h4 className="text-xl font-bold text-gray-500 mb-2">New Customer & New Site Details <sub className="text-gray-400 text-sm">for 2025</sub></h4>
                <div className="bg-white shadow-lg rounded-xl p-6 max-w-5xl mx-auto h-[400px]">
                  <CustomerGraph />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded  shadow-lg m-2">
              <div className="">
                <h4 className="text-md font-bold text-gray-500 mb-2">Warranty & AMC Contract Expiring Details<sub className="text-gray-400 text-sm">for 2025</sub></h4>
                <div className="bg-white shadow-lg rounded-xl p-6  h-[400px] mx-auto">
                  <AMC_Contract />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="bg-white p-6 rounded m-2 shadow-lg">
            <h4 className="text-xl font-bold text-gray-500 mb-2">Sales Report <sub className="text-gray-400 text-sm">for July 2025</sub></h4>
              <SalesReport/>
            </div>
            <div className="bg-white p-6 rounded  shadow-lg m-2">
            <h4 className="text-xl font-bold text-gray-500 mb-2">System Type Details <sub className="text-gray-400 text-sm">for July 2025</sub></h4>
              <SystemType />
            </div>
          </div>
          <Calls/>
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 