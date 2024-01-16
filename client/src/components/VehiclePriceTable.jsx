import React from 'react'
// import Breadcrumbs from './Breadcrumbs'

function VehiclePriceTable({ id }) {

  // const breadcrumbs = [
  //   { label: 'Home', link: '/'},
  //   { label: `${id}`, link: `/vehicle-price/${id}`},
  //   ];

  return (

    <div className="container-fluid">

        {/* <Breadcrumbs breadcrumbs={breadcrumbs} /> */}
        
        <div className="row">

          <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Reg/UnReg
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">Registered</button>
              <button className="dropdown-item" type="button">Un-Registered</button>
            </div>
          </div>

          <div className="btn-group ml-3">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              SubModel
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">Sub Model 01</button>
              <button className="dropdown-item" type="button">Sub Model 02</button>
            </div>
          </div>

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
              <tr>
                <th scope="row">2012</th>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
              </tr>
              <tr>
                <th scope="row">2013</th>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
              </tr>
              <tr>
                <th scope="row">2014</th>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
                <td>6,500,000</td>
              </tr>
              
            </tbody>
          </table>

        </div>

    </div>
    
    
  )
}

export default VehiclePriceTable