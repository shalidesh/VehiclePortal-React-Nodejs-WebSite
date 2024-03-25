import React, { useState,useEffect} from 'react';
import axios from "axios";
import Breadcrumbs from './Breadcrumbs';
import { nissan_list } from '../constants/nissan';
import { suzuki_list } from '../constants/suzuki';
import { honda_list } from '../constants/honda';
import { toyota_list } from '../constants/toyota';
import { micro_list } from '../constants/micro';


function VehiclePriceTable({ id}) {

  const [subModel, setSubModel] = useState('SUNNY');
  const [regUnReg, setRegUnReg] = useState('REG');
  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {

      switch (id) {
        case 'nissan':
          setSubModel('SUNNY');
          break;
        case 'suzuki':
          setSubModel('ZEN');
          break;
        case 'honda':
          setSubModel('HIACE');
          break;
        case 'toyota':
          setSubModel('TOYOTA');
          break;
        default:
          setSubModel('MICRO');
        }

        try {
          const response = await axios.post(`/vehicleprice/${id}`, {
            regUnReg,
            subModel,
          });

          console.log(response.data);
          setData(response.data);
        
        }catch (err) {
            console.error(err);
        }
    };

    fetchData();
}, [id]);

   // Function to handle search button click
   const handleSubmit = async (e) => {

        e.preventDefault();
        try {
          const response = await axios.post(`/vehicleprice/${id}`, {
            regUnReg,
            subModel,
          });

          console.log(response.data);
          setData(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      const idMap = {
        'nissan':'NISSAN',
        'suzuki':'SUZUKI',
        'honda':'HONDA',
        'toyota':'TOYOTA',
        'micro':"MICRO"
      }

  const breadcrumbs = [
    { label: 'Home', link: '/'},
    { label: `${id}`, link: `/vehicle-price/${id}`},
    ];

  return (

    <div className="container-fluid">

        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <h1 className='mt-2 mb-3'><strong>{idMap[id]}</strong> VEHICLE PRICE INDEX -<span style={{color: 'blue'}}>{subModel}</span></h1>
            <div className="row">

                  <div className="btn-group ml-5">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {regUnReg} 
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" style={{zIndex:9999}}>
                      <button className="dropdown-item" type="button" onClick={() => setRegUnReg('REG')}>REG</button>
                      <button className="dropdown-item" type="button" onClick={() => setRegUnReg('UNREG')}>UNREG</button>
                    </div>
                  </div>

                
                  <div class="btn-group ml-5">
                      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {subModel} 
                      </button>

                            <div className="dropdown-menu dropdown-menu-right" style={{
                                      height: 'auto',
                                      maxHeight: '200px',
                                      overflowX: 'hidden',
                                      zIndex: 9999,
                                      top: '20%'
                                      
                            }}>

                              {id==='nissan' ? nissan_list.map((item, index) => (
                                        <button  className="dropdown-item" type="button" onClick={() => setSubModel(item)}>{item}</button>
                                        ))
                              : id==='suzuki' ? suzuki_list.map((item, index) => (
                                <button  className="dropdown-item" type="button" onClick={() => setSubModel(item)}>{item}</button>
                                ))
                              :id==='honda' ? honda_list.map((item, index) => (
                                      <button  className="dropdown-item" type="button" onClick={() => setSubModel(item)}>{item}</button>
                                ))
                              :id==='toyota' ? toyota_list.map((item, index) => (
                                  <button  className="dropdown-item" type="button" onClick={() => setSubModel(item)}>{item}</button>
                              ))
      
                              :id==='micro' ? micro_list.map((item, index) => (
                                <button  className="dropdown-item" type="button" onClick={() => setSubModel(item)}>{item}</button>
                            )):nissan_list.map((item, index) => (
                              <button  className="dropdown-item" type="button" onClick={() => setSubModel(item)}>{item}</button>
                          ))}
            
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
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.YEAR}</td>
                <td>{item.JAN}</td>
                <td>{item.FEB}</td>
                <td>{item.MAR}</td>
                <td>{item.APR}</td>
                <td>{item.MAY}</td>
                <td>{item.JUN}</td>
                <td>{item.JUL}</td>
                <td>{item.AUG}</td>
                <td>{item.SEP}</td>
                <td>{item.OCT}</td>
                <td>{item.NOV}</td>
                <td>{item.DEC}</td>
              </tr>
            ))}
            </tbody>
          </table>

        </div>

    </div>
    
    
  )
}

export default VehiclePriceTable