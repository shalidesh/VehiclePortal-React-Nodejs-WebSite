import React, { useState,useEffect } from 'react';
import { models,editionlist } from '../constants/models';
import { yom_list } from '../constants/yom';

import {LOGO} from '../assets/img/index';
import Footer from './Footer';
import SingleColumn from './SingleColumn';



function VehicleInformation() {

    const [year, setYear] = useState(2020);
    
    const [regUnReg, setRegUnReg] = useState('REG');

    const [model, setModel] = useState('Nissan');
    const [subModel, setSubModel] = useState(models[model][0]);
    const [edition, setEdition] = useState(editionlist[model][subModel]);

    const [vedition, VsetEdition] = useState("");



   useEffect(() => {
    console.log("use effect called model change");

      setSubModel(models[model][0]);
    //   console.log(model);
      

    }, [model]);

    useEffect(() => {

          console.log("use effect called submodel change");
          
          setEdition(editionlist[model][subModel]);

        //   console.log(edition);
          
    
        }, [subModel]);

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {

            console.log(model);
            console.log(subModel);
            console.log(regUnReg);
            console.log(year);
            console.log(edition);
            console.log(vedition);

            let newStr = vedition.replace(/ /g, '_');

            let img=`${regUnReg}_${model}_${subModel}_${newStr}.jpg`;
            console.log(img);
                      
        } catch (error) {
          
        }
      };



  return (

    <div className="container">
        <div class="row">

            <div className="btn-group ml-0">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {regUnReg} 
                </button>
                <div className="dropdown-menu dropdown-menu-right" style={{
                                    zIndex: 9999,           
                            }}>
                <button className="dropdown-item" type="button" onClick={() => setRegUnReg('REG')}>Registered</button>
                <button className="dropdown-item" type="button" onClick={() => setRegUnReg('UNREG')}>Un-Registered</button>
                </div>
            </div>

            <div className="btn-group ml-3">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {model}
            </button>
            <div className="dropdown-menu dropdown-menu-right"   style={{
                                    height: 'auto',
                                    maxHeight: '200px',
                                    overflowX: 'hidden',
                                    zIndex: 9999,           
                            }}>
                {Object.keys(models).map((model, index) => (
                <button key={index} className="dropdown-item" type="button" onClick={() => setModel(model)}>{model}</button>
                ))}
            </div>
            </div>

            <div className="btn-group ml-3">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {subModel}
                </button>
                <div className="dropdown-menu dropdown-menu-right"   style={{
                                        height: 'auto',
                                        maxHeight: '200px',
                                        overflowX: 'hidden',
                                        zIndex: 9999,
                                        
                                }}>
                        {models[model].map((subModel, index) => (
                            <button key={index} className="dropdown-item" type="button" onClick={() => setSubModel(subModel)}>{subModel}</button>
                        ))}
                </div>
            </div>

            <div className="btn-group ml-3">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {edition}
                </button>
                <div className="dropdown-menu dropdown-menu-right"   style={{
                                        height: 'auto',
                                        maxHeight: '200px',
                                        overflowX: 'hidden',
                                        zIndex: 9999,
                                        
                                }}>
                       {edition.map((subModel, index) => (
                            <button key={index} className="dropdown-item" type="button" onClick={() => VsetEdition(subModel)}>{subModel}</button>
                        ))}
                </div>
            </div>

            <div className="btn-group ml-3" >
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {year}
            </button>
            <div className="dropdown-menu dropdown-menu-right"   style={{
                                    height: 'auto',
                                    maxHeight: '200px',
                                    overflowX: 'hidden',
                                    zIndex: 9999,           
                            }}>
                        {yom_list.map((item, index) => (
                        <button className="dropdown-item" type="button" onClick={() => setYear(item)}>{item}</button>
                            
                        ))}   
            </div>
            </div>

            <button type="submit" class="btn btn-primary ml-5" onClick={handleSubmit}>SEARCH</button>

        </div>

        <div className='mt-5'>
            <SingleColumn/>
        </div>

        <div class="row">
            <div class="col-12">
                {/* {editionlist[model][subModel]}
                {model} */}

                <img src={LOGO} alt="Logo" />;
                <img src={LOGO} alt="Logo" />;
                <img src={LOGO} alt="Logo" />;
                <img src={LOGO} alt="Logo" />;

                <img src={LOGO} alt="Logo" />;

            </div>
        </div>
    </div>

  )
}

export default VehicleInformation;