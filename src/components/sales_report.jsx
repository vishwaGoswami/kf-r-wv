import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Quoted Value', value: 9492000 },
    { name: 'Won Value', value: 450000 },
    { name: 'Lost Value', value: 625000 },
];

const COLORS = ['#3B82F6', '#22C55E', '#F59E0B'];

function SalesReport() {
    return (
        <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Tooltip />
                    <Legend />
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={70}   // 👈 Makes it a donut
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SalesReport;
