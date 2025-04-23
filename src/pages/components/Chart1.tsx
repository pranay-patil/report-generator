import React from 'react'
import { Line } from 'react-chartjs-2'
import {userData} from './data'
import { Chart as ChartJS, CategoryScale, LinearScale,PointElement,LineElement,Title,Tooltip, Legend } from 'chart.js'
ChartJS.register( CategoryScale, LinearScale,PointElement,LineElement,Title,Tooltip, Legend )
export default function Chart1() {
    const option={};
    const data={};
  return (
    <div>
      <Line options={option} data={userData}/>
    </div>
  )
}
