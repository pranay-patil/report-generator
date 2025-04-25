import React from 'react'
import './style.css'
import Chart1 from './Chart1'

export default function Cart() {
  return (
    <div className='main'>
      <div className='main-div1'>
        <div className='div1'>Month to Date (April 30-1)</div>
        <div className='div2'>MRR & Coustomers</div>
        <div className='main-div2'>
            <div className='div3'>
              <p>23.45%</p>
            </div>
            <div className='div3'>
              <p>50.00%</p>
            </div>


        </div>
         

        </div>
        <div className='main-div3'>
             <Chart1></Chart1>
        </div>
        

      </div>
   
  )
}

