import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styles from './register.module.css'
var classNames = require('classnames/bind');
var cx = classNames.bind(styles);

export default function RegisterTwo() {
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
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="text" name="email" id="email" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="phonenumber" className="sr-only">Phone Number</label>
                        <input type="text" name="phonenumber" id="phonenumber" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="address" className="sr-only">Address</label>
                        <input type="text" name="address" id="address" className="form-control" placeholder="Address" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="address" className="sr-only">Locality</label>
                        <select name="locality" id="" className='form-control'>
                            <option value="hanoi">Ha Noi</option>
                            <option value="hcm">Ho Chi Minh</option>
                        </select>
                    </div>
                </form>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <button ><Link to='/shipper/registerThree' style={{ color: 'white', fontSize: 18 }}>Next</Link></button>
                    </div>
            </div>
            <div>
            </div>
        </div>
    )
}
