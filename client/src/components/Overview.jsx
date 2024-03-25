import React, { useEffect, useState } from "react";
import Breadcrumbs from './Breadcrumbs';
import PieChart from './PieChart';
import axios from "axios";
import Pagination from 'react-bootstrap/Pagination';

function Overview({id}) {
    const breadcrumbs = [
        { label: 'Home', link: '/'},
        { label: 'all', link: `/portfolio/all`},
    ];

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [regUnReg, setRegUnReg] = useState('Registered');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/portfolio/all');
                setData(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

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

                <h1 className='mt-2 mb-3'><strong style={{color: 'black'}}>ALL</strong> VEHICLE PORTFOLIO</h1>

                <div class="row mt-5">

                        <div className="btn-group ml-0">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {regUnReg} 
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button" onClick={() => setRegUnReg('Registered')}>Registered</button>
                            <button className="dropdown-item" type="button" onClick={() => setRegUnReg('Un-Registered')}>Un-Registered</button>
                            </div>
                        </div>
                </div>      
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
                            {currentItems.map((row, index) => (
                                <tr key={index}>
                                    <th scope="row">{row['Vehicle Category']}</th>
                                    <td>{row.Count}</td>
                                    <td>{row.Portfolio}</td>
                                    <td>{row['% from AF']}</td>
                                    <td>{row['Collection Ratio']}</td>
                                    <td>{row.WARL}</td>
                                    <td>{row['NPL %']}</td>
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

export default Overview;
