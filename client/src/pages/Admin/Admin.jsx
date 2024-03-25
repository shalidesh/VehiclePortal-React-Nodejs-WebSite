import React from 'react'
import LeftBar from '../../components/LeftBar'
import TopBar from '../../components/TopBar'
import Footer from '../../components/Footer'
import Dashboard from '../Dashboard'

function Admin() {
  return (
   
    <div id="wrapper">

        <LeftBar/>

        <div id="content-wrapper" className="d-flex flex-column" style={{paddingLeft:'220px'}}>
            <div id="content">

                <TopBar/>
                <h1>ADMIN DASHNOARD</h1>
                {/* <Dashboard/> */}

            </div>
            
            <Footer/>
        </div>
    
    </div>
  )
}

export default Admin