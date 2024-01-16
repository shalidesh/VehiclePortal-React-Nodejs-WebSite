import React from 'react'
import LeftBar from '../components/LeftBar'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import LineChart from '../components/LineChart';

function VehicleChart() {

  const { id } = useParams();

 
  return (
    <div id="wrapper">

      <LeftBar/>

      <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">

              <TopBar/>
              <LineChart id={id} />
              
          </div>
          
          <Footer/>
      </div>

  </div>
  )
}

export default VehicleChart