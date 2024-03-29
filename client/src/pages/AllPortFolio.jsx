import React from 'react'
import LeftBar from '../components/LeftBar'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import Overview from '../components/Overview';
import PieChart from '../components/PieChart';
import ModelPortfolio from '../components/ModelPortfolio';

function AllPortFolio() {

  const { id } = useParams();

 
  return (
      <div id="wrapper">

        <LeftBar/>

        <div id="content-wrapper" className="d-flex flex-column" style={{paddingLeft:'220px'}} >
            <div id="content">

                <TopBar/>

                {id === 'all' ? <Overview id={id} /> : <ModelPortfolio id={id} />}
                
            </div>
            
            <Footer/>
        </div>

    </div>
  )
}

export default AllPortFolio