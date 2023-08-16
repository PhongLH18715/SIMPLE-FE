import React from 'react';
import {
    FormOutlined
  } from '@ant-design/icons';
import classNames from 'classnames/bind';
import { Button, Input } from 'antd';
import styled from '../agent.module.css'

let cx = classNames.bind(styled);

const ProfileAgent = () => {
    return (
        <div
            className={cx('profile_content')}
        >
            <div className={cx('user_avatar')}>
                <div className={cx('user_avatar_item')}>
                    <img style={{ width: 300, height: 300, objectFit: 'cover' }} src="https://pbs.twimg.com/profile_images/1192101281252495363/c_xL2w3j_400x400.jpg" alt="dragon" />
                </div>
                <h4 style={{paddingTop: 20, margin: 0}}>Lê Hồng Phong</h4>
                <p style={{paddingTop: 12, margin: 0}}>phonglh@gmail.com</p>
            </div>
            <div className={cx('user_content')}>
                <h3>Profile Settings</h3>
                <form action="">
                    <div className={cx('form_item', 'form_item_name')}>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="firstName">First Name</label>
                            <Input placeholder="First name" id='firstName' />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="lastName">Last Name</label>
                            <Input placeholder="Last name" id='lastName' />
                        </div>
                    </div>
                    <div className={cx('form_item')}>
                        <label htmlFor="address">Address</label>
                        <Input placeholder="Address" id='address' />
                    </div>
                    <div className={cx('form_item')}>
                        <label htmlFor="phone">Phone number</label>
                        <Input placeholder="Phone number" id='phone' />
                    </div>
                    <div className={cx('form_item')}>
                        <label htmlFor="email">Email</label>
                        <Input placeholder="Email" id='email' />
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

export default ProfileAgent;
