import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styles from './register.module.css'
var classNames = require('classnames/bind');
var cx = classNames.bind(styles);

export default function RegisterOne() {
    const [register, setRegister] = useState({
        username: '',
        password: '',
        email: '',
        fullName: '',
        dob: '',
        phoneNumber: '',
        address: '',
        gender: 'Female'
    })
    const dispatch = useDispatch()
    const history = useHistory()
    const handleChange = (e) => {
        const { name, value } = e.target
        setRegister({ ...register, [name]: value })
    }
    console.log(register)
    const handleSumitForm = async (event) => {
        event.preventDefault();
        const { username, password, email, fullName, dob, phoneNumber, address, gender} = register
        try {
            const res = await axios.post('https://simpay-api.hpscamera.com/api/auth/register', { username, password, email, fullName, dob, phoneNumber, address, gender })
            console.log(res)

            // dispatch(dispatchGetAdmin(res))
            // dispatch(dispatchLoginShipper())
            history.push("/shipper")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={cx('login_content')}>
            <div className={cx('img_login')}>
                <img src="../loginPhong.png" alt="logos" />
            </div>
            <div className={cx('img_login_form')}>
                <h2 style={{
                    fontSize: '100px',
                    fontFamily: 'cursive',
                    color: 'cyan',
                    margin: 0
                }}>Nextshop</h2>
                <form >
                    <div className="form-group">
                        <label htmlFor="fullName" className="sr-only">fullName</label>
                        <input type="text" name="fullName" id="fullName" defaultValue={register.fullName} className="form-control" placeholder="Fullname"  onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input type="text" name="username" id="username" defaultValue={register.username} className="form-control" placeholder="Username"  onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass" className="sr-only">Passwrod</label>
                        <input type="password" name="password" id="pass" className="form-control" defaultValue={register.password} placeholder="Password"  onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="text" name="email" id="pass" className="form-control" placeholder="Email" defaultValue={register.email}  onChange={handleChange}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password" className="sr-only">Birthday</label>
                        <input type="date" name="dob" id="text" className="form-control" placeholder="Birthday" defaultValue={register.dob} onChange={handleChange}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="phoneNumber" className="sr-only">Phone</label>
                        <input type="text" name="phoneNumber" id="phoneNumber" className="form-control"  defaultValue={register.phoneNumber} placeholder="Phone" onChange={handleChange} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="address" className="sr-only">Address</label>
                        <input type="text" name="address" id="address" className="form-control" placeholder="Address" defaultValue={register.address} onChange={handleChange}/>
                    </div>
                    <div className="form-group mb-3">
                        <select name="gender" className='form-control' id="gender"  onChange={handleChange}>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <button onClick={handleSumitForm}  style={{color: 'white', fontSize: 18}}>Register</button>
                    </div>
                </form>
                 
                </div>
                <div>
            </div>
        </div>
    )
}
