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
    { name: 'Jan', Warranty: 0, AMC: 0 },
    { name: 'Feb', Warranty: 1.0, AMC: 0 },
    { name: 'Mar', Warranty: 0, AMC: 0 },
    { name: 'Apr', Warranty: 0, AMC: null },
    { name: 'May', Warranty: 0, AMC: null },
    { name: 'Jun', Warranty: 0, AMC: 0 },
    { name: 'Jul', Warranty: 1.0, AMC: 0 },
    { name: 'Aug', Warranty: 0, AMC: 0 },
    { name: 'Sep', Warranty: 0, AMC: null },
    { name: 'Oct', Warranty: 0, AMC: null },
    { name: 'Nov', Warranty: 0, AMC: 0 },
    { name: 'Dec', Warranty: 1.0, AMC: 0 },
];

function AMC_Contract() {
    return (
        <div className="w-full h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Warranty" stroke="#3B82F6" strokeWidth={2} />
                    <Line type="monotone" dataKey="AMC" stroke="#22C55E" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AMC_Contract;
