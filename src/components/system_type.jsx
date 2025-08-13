import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
  } from 'recharts';
  
  const data = [
    { name: 'Completed', value: 100 },
    { name: 'Dummy', value: 0.00001 },
  ];
  
  const COLORS = ['#3B82F6', 'transparent'];
  
  function SystemType() {
    return (
      <div className="relative h-[300px] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={450}
              innerRadius={80}
              outerRadius={100}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
  
        {/* Centered label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-md font-semibold text-gray-500">Addressable Fire <br/> Alarm System</div>
        </div>
      </div>
    );
  }
  
  export default SystemType;
  