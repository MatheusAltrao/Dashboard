import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, CategoryScale, BarElement, LinearScale, Title, Tooltip, Legend } from "chart.js";
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)



const BarChat = () => {

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],

      datasets: [
        {
          label: 'Sales $',
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgb(53, 162, 235, 0.4',
        },
      ]

    })

    setChartOptions({
      plugins: {

        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Daily Revenue'
        },

      },
      maintainAspectRatio: false,
      responsive: true
    })
  }, [])

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[50vh] h-[40vh]  mx-auto  p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  )
}

export default BarChat