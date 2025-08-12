// src/components/MultiLineChart.jsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', Registered: 0, Won: 0, Ongoing: 0, Lost: 0 },
  { month: 'Feb', Registered: 4, Won: 4, Ongoing: 0, Lost: 0 },
  { month: 'Mar', Registered: 10.2, Won: 7, Ongoing: 0, Lost: 0 },
  { month: 'Apr', Registered: 10.2, Won: 0, Ongoing: 0, Lost: 0 },
  { month: 'May', Registered: 13, Won: 2, Ongoing: 0, Lost: 0 },
  { month: 'Jun', Registered: 7, Won: 0, Ongoing: 3.8, Lost: 2 },
  { month: 'Jul', Registered: 13, Won: 9, Ongoing: 2, Lost: 1 },
  { month: 'Aug', Registered: 13, Won: 0, Ongoing: 0.1, Lost: 0 },
  { month: 'Sep', Registered: 12.9, Won: 0, Ongoing: 0, Lost: 0 },
  { month: 'Oct', Registered: 12.8, Won: 0, Ongoing: 0, Lost: 0 },
  { month: 'Nov', Registered: 12.7, Won: 0, Ongoing: 0, Lost: 0 },
  { month: 'Dec', Registered: 12.6, Won: 0, Ongoing: 0, Lost: 0 },
];

export default function MultiLineChart() {
  return (
    <div className="">
      <h4 className="text-xl font-bold text-gray-500 mb-2">Sales Inquiry Details <sub className="text-gray-400 text-sm">for 2025</sub></h4>
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-center mb-4">Monthly Trends</h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="Registered" stroke="#3b82f6" strokeWidth={2} />
            <Line type="monotone" dataKey="Won" stroke="#ef4444" strokeWidth={2} />
            <Line type="monotone" dataKey="Lost" stroke="#10b981" strokeWidth={2} />
            <Line type="monotone" dataKey="Ongoing" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
