import React from 'react'
import Breadcrumbs from './Breadcrumbs';
import PieChart from './PieChart';

function Overview({id}) {
  
    const breadcrumbs = [
            { label: 'Home', link: '/'},
            { label: 'all', link: `/portfolio/all`},
        ];

    // Function to handle search button click
   const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      // const response = await axios.post('/vehicleprice/nissan', {
      //   regUnReg,
      //   subModel,
      // });

      // console.log(response.data);
      // setSubMode1(response.data.username)
    } catch (error) {
      console.error('Error:', error);
    }
  };
    
      return (

        <>
    
        <div className="container-fluid">
    
         <Breadcrumbs breadcrumbs={breadcrumbs} />

            <div className="row mt-5">
    
              <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Vehicle Category</th>
                      <th scope="col">Count</th>
                      <th scope="col">Portfolio</th>
                      <th scope="col">% from AF</th>
                      <th scope="col">Collection Ratio</th>
                      <th scope="col">WARL</th>
                      <th scope="col">NPL %</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Motor Car</th>
                      <td>18,658</td>
                      <td>31,944,564,587</td>
                      <td>70.52%</td>
                      <td>93%</td>
                      <td>19</td>
                      <td>8</td>

                    </tr>
                    <tr>
                    <th scope="row">Motor Car</th>
                      <td>18,658</td>
                      <td>31,944,564,587</td>
                      <td>70.52%</td>
                      <td>93%</td>
                      <td>19</td>
                      <td>8</td>
                    </tr>
                    <tr>
                    <th scope="row">Motor Car</th>
                      <td>18,658</td>
                      <td>31,944,564,587</td>
                      <td>70.52%</td>
                      <td>93%</td>
                      <td>19</td>
                      <td>8</td>
                    </tr>
                    <tr>
                    <th scope="row">Motor Car</th>
                      <td>18,658</td>
                      <td>31,944,564,587</td>
                      <td>70.52%</td>
                      <td>93%</td>
                      <td>19</td>
                      <td>8</td>
                    </tr>
                    <tr>
                    <th scope="row">Motor Car</th>
                      <td>18,658</td>
                      <td>31,944,564,587</td>
                      <td>70.52%</td>
                      <td>93%</td>
                      <td>19</td>
                      <td>8</td>
                    </tr>


                  </tbody>
                </table>

            </div>
    
        </div>

        <div className="container">
            <div className="row mt-5">
              <div className="col-6">
                <PieChart/>

              </div>
            
            <div className="col-6">
          <PieChart/>

        </div>

        </div>
          

        </div>

        </>
        
        
      )
}

export default Overview