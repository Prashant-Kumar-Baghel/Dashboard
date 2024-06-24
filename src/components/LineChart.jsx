import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension:0.3,//line coming in straight form so to make it curve form we expeciately use property called tension. 
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true, // Use a point style (circle) for the legend labels
        pointStyle: 'circle', // Specify the point style as 'circle'
      },
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1000,2000,5000,7000,8000,4000,9000],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'red',
    },
    {
      label: 'Dataset 2',
      data: [500,1500,3000,4000,7000,5000,8000],
      borderColor: 'black',
      backgroundColor: 'black',
    },
  ],
};




const LineChart = () => {
  return (
    <Line options={options} data={data} />
  )
}

export default LineChart
