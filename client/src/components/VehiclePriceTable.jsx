import React, { useState } from 'react';
import axios from "axios";
import Breadcrumbs from './Breadcrumbs'


function TableRow({ data }) {
  return (
    <tr>
      <th scope="row">{data.year}</th>
      {data.months.map((month, index) => (
        <td key={index}>{month}</td>
      ))}
    </tr>
  );
}

function VehiclePriceTable({ id}) {

  const [regUnReg, setRegUnReg] = useState('Reg/UnReg');
  const [subModel, setSubModel] = useState('SubModel');
  const [subModel1, setSubMode1] = useState('respone');

   // Function to handle search button click
   const handleSubmit = async (e) => {

        e.preventDefault();
        try {
          const response = await axios.post(`/vehicleprice/${id}`, {
            regUnReg,
            subModel,
          });

          console.log(response.data);
          setSubMode1(response.data.username)
        } catch (error) {
          console.error('Error:', error);
        }
      };

    const rowsData = [
      {
        year: '2012',
        months: ['6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000']
      },
      {
        year: '2013',
        months: ['6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000']
      },
      {
        year: '2014',
        months: ['6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000']
      },
      {
        year: '2015',
        months: ['6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000']
      },
      {
        year: '2016',
        months: ['6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000']
      },
      {
        year: '2017',
        months: ['6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000', '6,500,000']
      },
    ];

  const breadcrumbs = [
    { label: 'Home', link: '/'},
    { label: `${id}`, link: `/vehicle-price/${id}`},
    ];

  return (

    <div className="container-fluid">

        <Breadcrumbs breadcrumbs={breadcrumbs} />

              {subModel1}
            <div className="row">

                  <div className="btn-group ml-5">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {regUnReg} 
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button" onClick={() => setRegUnReg('Registered')}>Registered</button>
                      <button className="dropdown-item" type="button" onClick={() => setRegUnReg('Un-Registered')}>Un-Registered</button>
                    </div>
                  </div>

                  <div className="btn-group ml-3">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {subModel}
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button" onClick={() => setSubModel('Sub Model 01')}>Sub Model 01</button>
                      <button className="dropdown-item" type="button" onClick={() => setSubModel('Sub Model 02')}>Sub Model 02</button>
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary ml-5" onClick={handleSubmit}>SEARCH</button>

            </div>

        <div className="row mt-5">

        <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">YEAR</th>
                <th scope="col">JAN</th>
                <th scope="col">FEB</th>
                <th scope="col">MAR</th>
                <th scope="col">APR</th>
                <th scope="col">MAY</th>
                <th scope="col">JUN</th>
                <th scope="col">JUL</th>
                <th scope="col">AUG</th>
                <th scope="col">SEP</th>
                <th scope="col">OCT</th>
                <th scope="col">NOV</th>
                <th scope="col">DEC</th>
              </tr>
            </thead>
            <tbody>
            {rowsData.map((data, index) => (
              <TableRow key={index} data={data} />
            ))}
            </tbody>
          </table>

        </div>

    </div>
    
    
  )
}

export default VehiclePriceTable