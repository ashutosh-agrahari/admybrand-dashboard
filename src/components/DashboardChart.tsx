"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 4000, users: 2400, conversions: 240 },
  { name: "Feb", revenue: 3000, users: 2210, conversions: 210 },
  { name: "Mar", revenue: 5000, users: 2290, conversions: 190 },
  { name: "Apr", revenue: 4780, users: 2000, conversions: 250 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export function DashboardChart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Line Chart */}
      <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Revenue Over Time</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Users per Month</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Conversion Breakdown</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="conversions"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
