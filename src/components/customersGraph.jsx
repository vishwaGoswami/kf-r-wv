
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const CustomerGraph = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'New Customer',
                data: [3, null, 3, null, null, 1, 6, null, null, null, null, null,],
                backgroundColor: 'rgba(59, 130, 246, 0.7)', // blue
            },
            {
                label: 'New Site',
                data: [3, null, 3, null, null, 1, 1.8, null, null, null, null, null,],
                backgroundColor: 'rgba(34, 197, 94, 0.7)', // green
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        },
    };

    return (
        <div className=" w-full h-[320px] lg:h-[350px]">
            <Bar data={data} options={{ ...options, maintainAspectRatio: false }} />
        </div>
    );
}

    export default CustomerGraph;
