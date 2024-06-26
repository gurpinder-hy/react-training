import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaginationComponent from './Pagination';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

const Users = () => {

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getData = (page) => {
        axios.get('https://reqres.in/api/users?page=' + page)
            .then(response => {
                setData(response.data.data);
                setTotalPages(response.data.total_pages)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        getData(currentPage)
    }, []);

    const handlePageChange = (page) => {
        getData(page)
        setCurrentPage(page);
    };

    const editUser = (id) => {
        navigate('/users/' + id);
    }

    const deleteUser = (index) => {
        let newData = [...data]
        newData.splice(index, 1)
        setData(newData)
        alert('Deleted')
        // axios.delete('https://reqres.in/api/users/' + id)
        //     .then(response => {
        //         alert('Deleted')
        //         setCurrentPage(1);
        //         getData(1)
        //     })
        //     .catch(error => {
        //         console.error('Error fetching data:', error);
        //     });
    }

    return (
        <div>
            <h2 style={{ marginLeft: '20px' }} className="mt-4 mb-4">Users List</h2>
            <table style={{ marginLeft: '20px' }} className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => (
                        <tr key={item.id} >
                            <th scope="row">{item.id}</th>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td><button onClick={() => editUser(item.id)} type="button" className="btn btn-primary">Edit</button><button onClick={() => deleteUser(index)} type="button" style={{ marginLeft: "1rem" }} className="btn btn-primary">Delete</button></td>
                        </tr>

                    ))}
                </tbody>
            </table>
            <div
                style={{ marginLeft: '20px' }}
            >
                <PaginationComponent
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>

        </div >
    );
};

export default Users;