
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const User = (props) => {

    const navigate = useNavigate();

    const { userId } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        if (!firstName || !lastName) {
            alert('First Name and Last Name Required')
            return
        }
        axios.put('https://reqres.in/api/users/' + userId, {
            first_name: firstName,
            last_name: lastName
        })
            .then(response => {
                if (response.data) {
                    setFirstName(response.data.first_name);
                    setLastName(response.data.last_name)
                    alert('Updated')
                    navigate('/users')
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        getData(userId)
    }, []);

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    const getData = (page) => {
        axios.get('https://reqres.in/api/users/' + userId)
            .then(response => {
                setFirstName(response.data.data.first_name);
                setLastName(response.data.data.last_name)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return <>
        <div className="container">
            <form onSubmit={(e) => (onSubmit(e))}>
                <h2 style={{ marginLeft: '20px' }} className="mt-4 mb-4">Update User</h2>
                <div className="form-row">
                    <div className="input-data">
                        <input
                            placeholder='First Name'
                            value={firstName}
                            name="firstName"
                            type="text"
                            onChange={handleFirstNameChange}
                        />
                        <div className="underline"></div>
                    </div>
                    <div className="input-data">
                        <input
                            placeholder='Last Name'
                            value={lastName}
                            name="lastName"
                            type="text"
                            onChange={handleLastNameChange}
                        />
                        <div className="underline"></div>
                    </div>
                </div>
                <div className="input-data textarea">
                    <br />
                    <div className="form-row submit-btn">
                        <div className="input-data">
                            <div className="inner"></div>
                            <input type="submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>;
};

export default User