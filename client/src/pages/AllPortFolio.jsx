import React from 'react'
import LeftBar from '../components/LeftBar'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import Overview from '../components/Overview';
import PieChart from '../components/PieChart';

function AllPortFolio() {

  const { id } = useParams();

 
  return (
    <div id="wrapper">

      <LeftBar/>

      <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">

              <TopBar/>
              <Overview id={id} />
              
          </div>
          
          <Footer/>
      </div>

  </div>
  )
}

export default AllPortFolio