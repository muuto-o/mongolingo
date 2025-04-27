import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white border rounded shadow">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs text-gray-500">Completed: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function WeeklyActivityChart() {
  const data = [
    { date: "2025-04-16", count: 0 },
    { date: "2025-04-17", count: 1 },
    { date: "2025-04-18", count: 2 },
    { date: "2025-04-19", count: 0 },
    { date: "2025-04-20", count: 1 },
    { date: "2025-04-21", count: 3 },
    { date: "2025-04-22", count: 0 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barCategoryGap={20}>
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#f0f0f0"
        />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} tickLine={false} />
        <YAxis allowDecimals={false} tick={{ fontSize: 12 }} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="count"
          radius={[10, 10, 0, 0]}
          fill="url(#colorGradient)"
        />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#6366f1" stopOpacity={0.3} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
}
