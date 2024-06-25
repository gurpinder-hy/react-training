import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        props.setIsLoggedIn(false)
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onButtonClick = () => {
        props.setIsLoggedIn(true)
        navigate('/home')
    }

    return (
        <div className="container">
            <form>
                <h2 style={{ marginLeft: '20px' }} className="mt-4 mb-4">Login</h2>
                <div className="form-row">
                    <div className="input-data">
                        <input
                            value={email}
                            placeholder="Enter your email here"
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                        <div className="underline"></div>
                    </div>
                    <div className="input-data">
                        <input
                            value={password}
                            placeholder="Enter your password here"
                            onChange={(ev) => setPassword(ev.target.value)}
                            className={'inputBox'}
                        />
                        <div className="underline"></div>
                    </div>
                </div>
                <div className="input-data textarea">
                    <br />
                    <div className="form-row submit-btn">
                        <div className="input-data">
                            <div className="inner"></div>
                            <input type='submit' onClick={onButtonClick} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login