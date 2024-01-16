import React from 'react'
import LeftBar from '../components/LeftBar'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import VehiclePriceTable from '../components/VehiclePriceTable'
import { useParams } from 'react-router-dom';

function VehiclePrice() {

  const { id } = useParams();

  return (
    <div id="wrapper">

      <LeftBar/>

      <div id="content-wrapper" className="d-flex flex-column" style={{paddingLeft:'220px'}}>
          <div id="content">

              <TopBar/>
              <VehiclePriceTable id={id} />

          </div>
          
          <Footer/>
      </div>

  </div>
  )
}

export default VehiclePrice