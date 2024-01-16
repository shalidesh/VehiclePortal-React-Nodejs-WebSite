import React from 'react'
import { Link } from "react-router-dom";

function LeftBar() {
  return (
    <div>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                                    <div className="sidebar-brand-icon rotate-n-15">
                                        <i className="fas fa-laugh-wink"></i>
                                    </div>
                                    <div className="sidebar-brand-text mx-3">CDB Admin</div>
            </a>

            <hr className="sidebar-divider my-0"/>

            <Link to="/">

                <li className="nav-item active">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

            </Link>

            <hr className="sidebar-divider"/>


            <div className="sidebar-heading">
                Features
            </div>


            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span> Vehicles Prices</span>
                        
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Fast Moving Vehicles:</h6>
                        <Link to='/vehicle-price/nissan'>
                            <a className="collapse-item">Nissan</a>
                        </Link>
                        <Link to="/vehicle-price/suzuki">
                            <a className="collapse-item">Suzuki</a>
                        </Link>
                        <Link to="/vehicle-price/toyota">
                            <a className="collapse-item">Toyota</a>
                        </Link>
                        <Link to="/vehicle-price/honda">
                            <a className="collapse-item">Honda</a>
                        </Link>
                        <Link to="/vehicle-price/micro">
                            <a className="collapse-item">Micro</a>
                        </Link>
                        
                    </div>
                </div>
            </li>


            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Portfolio</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Overview:</h6>
                        <Link to="/portfolio/all">
                            <a className="collapse-item" >All Vehicles</a>
                        </Link>
                        
                        <h6 className="collapse-header">Fast Moving Vehicles:</h6>
                        
                        <Link to="/portfolio/nissan">
                            <a className="collapse-item" >Nissan</a>

                        </Link>
                        <Link to="/portfolio/suzuki">
                            <a className="collapse-item" >Suzuki</a>

                        </Link>
                        <Link to="/portfolio/toyota">
                            <a className="collapse-item" >Toyota</a>

                        </Link>
                        <Link to="/portfolio/honda">
                            <a className="collapse-item" >Honda</a>

                        </Link>
                        <Link to="/portfolio/micro">
                            <a className="collapse-item" >Micro</a>

                        </Link>
                
                    </div>
                </div>
            </li>


            <hr className="sidebar-divider"/>


            <div className="sidebar-heading">
                Addons
            </div>


            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Graphs</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Graphs Types:</h6>
                        <Link to="/graphs/fastmoving">
                            <a className="collapse-item" >Fast Moving Car Price</a>
                        </Link>
                        <Link to="/graphs/minicar">
                            <a className="collapse-item" >Mini Car Price</a>

                        </Link>
                        <Link to="/graphs/normalcar">
                            <a className="collapse-item" >Normal car</a>

                        </Link>
                        <Link to="/graphs/suvcar">
                            <a className="collapse-item" >SUV Car Price</a>

                        </Link>
                        <Link to="/graphs/hybrid">
                            <a className="collapse-item">Hybrid Car Price</a>
                        </Link>
                        
                    </div>
                </div>
            </li>

            <hr className="sidebar-divider d-none d-md-block"/>


            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    </div>
  )
}

export default LeftBar