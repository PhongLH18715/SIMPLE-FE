import React from 'react';
import {
    FormOutlined
  } from '@ant-design/icons';
import classNames from 'classnames/bind';
import { Button, Input } from 'antd';
import styled from '../shipper.module.css'

let cx = classNames.bind(styled);

const ProfileShipper = () => {
    const profileShipper = JSON.parse(localStorage.getItem('profile_shipper'))
    return (
        <div
            className={cx('profile_content')}
        >
            <div className={cx('user_avatar')}>
                <div className={cx('user_avatar_item')}>
                    <img style={{ width: 300, height: 300, objectFit: 'cover' }} src={profileShipper.avatar} alt="dragon" />
                </div>
                <h4 style={{paddingTop: 20, margin: 0}}>{profileShipper.username}</h4>
                <p style={{paddingTop: 12, margin: 0}}>{profileShipper.email}</p>
            </div>
            <div className={cx('user_content')}>
                <h3>Profile Settings</h3>
                <form action="">
                    <div className={cx('form_item', 'form_item_name')}>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="firstName">First Name</label>
                            <Input placeholder="First name" id='firstName' value={profileShipper.fullName}/>
                        </div>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="lastName">Last Name</label>
                            <Input placeholder="Last name" id='lastName' value={profileShipper.username}/>
                        </div>
                    </div>
                    <div className={cx('form_item')}>
                        <label htmlFor="address">Address</label>
                        <Input placeholder="Address" id='address' value={profileShipper.address}/>
                    </div>
                    <div className={cx('form_item')}>
                        <label htmlFor="phone">Phone number</label>
                        <Input placeholder="Phone number" id='phone' value={profileShipper.phoneNumber}/>
                    </div>
                    <div className={cx('form_item')}>
                        <label htmlFor="email">Email</label>
                        <Input placeholder="Email" id='email' value={profileShipper.email}/>
                    </div>
                    <div className={cx('form_item')}>
                        <label htmlFor="birthday">Birthday</label>
                        <Input type='date' id='birthday' />
                    </div>
                    <div className={cx('form_item', 'btn_profile')}>
                        <Button type='primary'>
                            Save
                        <FormOutlined /> 
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileShipper;
