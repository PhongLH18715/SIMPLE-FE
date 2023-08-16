import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styles from './register.module.css'
var classNames = require('classnames/bind');
var cx = classNames.bind(styles);

export default function RegisterThree() {
    // const [login, setLogin] = useState({
    //     username: '',
    //     password: ''
    // })
    // const dispatch = useDispatch()
    // const history = useHistory()
    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setLogin({ ...login, [name]: value })
    // }

    return (
        <div className={cx('login_content')}>
            <div className={cx('img_login')}>
                <img src="../loginPhong.png" alt="logo" />
            </div>
            <div className={cx('img_login_form')}>
                <h2 style={{
                    fontSize: '100px',
                    fontFamily: 'cursive',
                    color: 'cyan'
                }}>Nextshop</h2>
                <form >
                    <div className="form-group">
                        <label htmlFor="username" className="sr-only">Email</label>
                        <input type="text" name="username" id="username" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                    </div>
                    
                </form>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <button ><Link to='/shipper/registerFour' style={{ color: 'white', fontSize: 18 }}>Next</Link></button>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
