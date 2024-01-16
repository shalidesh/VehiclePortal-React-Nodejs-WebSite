import React from 'react';
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Breadcrumbs from './Breadcrumbs'

Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



function LineChart({id}) {

    const breadcrumbs = [
        { label: 'Home', link: '/'},
        { label: `${id}`, link: `/graphs/${id}`},
        ];

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Auguest','Septhember','Octomber','November','December'];
      
      const data = {
        labels,
        datasets: [
          {
            label: '',
            data: [5500000, 6000000, 5600000, 4500000, 6000000, 6300000, 6700000, 6900000, 5500000, 5700000, 5600000, 6000000],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
  return (

    <div className="container-fluid">

        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <h3 className='d-flex justify-content-center'>{id} Vehicles Price Index</h3>
        <div class="row">

            <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                YEAR
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button">2010</button>
                <button className="dropdown-item" type="button">2011</button>
                <button className="dropdown-item" type="button">2012</button>
                <button className="dropdown-item" type="button">2013</button>
                <button className="dropdown-item" type="button">2014</button>
                <button className="dropdown-item" type="button">2015</button>
                <button className="dropdown-item" type="button">2016</button>

            </div>
            </div>

            <div className="btn-group ml-3">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                SubModel
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button">Sub Model 01</button>
                <button className="dropdown-item" type="button">Sub Model 02</button>
                <button className="dropdown-item" type="button">Sub Model 03</button>
                <button className="dropdown-item" type="button">Sub Model 04</button>
                <button className="dropdown-item" type="button">Sub Model 05</button>

            </div>
            </div>

        </div>

        <div className="row">

            <Line options={options} data={data} />

        </div>

        

    </div>
    
  );
}

export default LineChart;
