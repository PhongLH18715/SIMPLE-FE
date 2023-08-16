import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { dispatchGetAdmin, dispatchLoginAdmin } from '../redux/actions/authAction';
import styles from './login.module.css'
var classNames = require('classnames/bind');
var cx = classNames.bind(styles);

export default function LoginAll() {
    const [login, setLogin] = useState({
        username: '',
        password: '',
        remember: true,
    })
    const dispatch = useDispatch()
    const history = useHistory()
    const handleChange = (e)=>{
        const {name, value} = e.target
        setLogin({...login, [name]: value})
    }
    const handleSumitForm = async(event)=>{
        event.preventDefault();
        const {username, password, remember} = login
        try {
            const res = await axios.post('https://simpay-api.hpscamera.com/api/auth/login', {username, password, remember})
             //console.log(res)
            localStorage.setItem('admin', true)
                    
            localStorage.setItem('refresh_token_admin', res.data.tokens.refresh.token)
            localStorage.setItem('profile_admin', JSON.stringify(res.data.user))

             dispatch(dispatchGetAdmin(res))
            dispatch(dispatchLoginAdmin())
            history.push("/admin/dashboard")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={cx('login_content')}>
            <div className={cx('img_login')}>
                <img src="./loginPhong.png" alt="logo" />
            </div>
            <div className={cx('img_login_form')}>
                <h2 style={{
                    fontSize: '100px',
                    fontFamily: 'cursive',
                    color: 'cyan'
                }}>Nextshop</h2>
                <form onSubmit={handleSumitForm}>
                    <div className="form-group">
                        <label htmlFor="username" className="sr-only">Email</label>
                        <input type="text" name="username" id="username" className="form-control" placeholder="Username" onChange={handleChange}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" id="password" className="form-control" placeholder="Password" onChange={handleChange}/>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-5">
                       <button onClick={handleSumitForm}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
