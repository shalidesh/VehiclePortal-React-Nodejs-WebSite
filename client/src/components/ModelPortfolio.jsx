import React, { useEffect, useState } from "react";
import Breadcrumbs from './Breadcrumbs';
import PieChart from './PieChart';
import axios from "axios";
import Pagination from 'react-bootstrap/Pagination';

function ModelPortfolio({id}) {
    const breadcrumbs = [
        { label: 'Home', link: '/'},
        { label: id, link: `/portfolio/${id}`},
    ];

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [subModel, setSubModel] = useState('SubModel 01');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`/portfolio/${id}`, {
                    id,
                    "subModel":"SubModel 03",
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
            const response = await axios.post(`/portfolio/${id}`, {
                id,
                subModel,
            });

        console.log(response.data);
        setData(response.data);
        
        }catch (err) {
            console.error(err);
        }
  };

    // Calculate the number of pages
    const pageCount = Math.ceil(data.length / itemsPerPage);

    // Create an array of page numbers
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    // Get the items for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    
    return (
        <>

            <div className="container">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className="row mt-5 mb-5">
                    <div className="col-6">
                        <PieChart/>
                    </div>
                    <div className="col-6">
                        <PieChart/>
                    </div>
                </div>

                <div className="row mt-5">

                    <div className="btn-group ">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {subModel} 
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <button className="dropdown-item" type="button" onClick={() => setSubModel('SubModel 01')}>SubModel 01</button>
                        <button className="dropdown-item" type="button" onClick={() => setSubModel('SubModel 02')}>SubModel 02</button>
                    </div>
                    </div>

                    <button type="submit" className="btn btn-primary ml-5" onClick={handleSubmit}>SEARCH</button>

                </div>
                
                <div className="row mt-5">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">YOM</th>
                                <th scope="col">Count</th>
                                <th scope="col">Portfolio</th>        
                                <th scope="col">WARL</th>
                                <th scope="col">Collection Ratio</th>
                                <th scope="col">%</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((row, index) => (
                                <tr key={index}>
                                    <th scope="row">{row['YOM']}</th>
                                    <td>{row.Count}</td>
                                    <td>{row.Portfolio}</td>
                                    <td>{row.WARL}</td>
                                    <td>{row['Collection Ratio']}</td>
                                    <td>{row['%']}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination>
                    {pages.map(number => (
                        <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
                            {number}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>
            
        </>
    )
}

export default ModelPortfolio;
