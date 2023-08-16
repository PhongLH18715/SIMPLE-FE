import {
    DownOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, Popover } from 'antd';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

export default function HeaderShipper() {
    const { tokenShipper } = useSelector(state => state.token)
    const refreshTokenShipper = localStorage.getItem('refresh_token_shipper')
    const text = <span>Profile</span>;
    const handleLogout = async()=>{
        try {
            // const res = await axios.post('/api/auth/logout', {refresh_token: refreshTokenAdmin})
            const res = await axios.post('https://simpay-api.hpscamera.com/api/auth/logout', {refresh_token:refreshTokenShipper},  {headers: {'Authorization': 'Bearer ' + tokenShipper}})
            console.log(res)
            localStorage.removeItem('shipper')
            localStorage.removeItem('refresh_token_shipper')
            localStorage.removeItem('profile_shipper')
            window.location.href = '/shipper'
        } catch (error) {
            console.log(error)
        }
    }
    const content = (
        <div>
            {/* <Link>Profile</Link> */}
            <Button style={{width: '100%', marginBottom: 10}} type='success'><Link to='/shipper/profile'>Profile</Link></Button>
            <Button style={{width: '100%'}} onClick={handleLogout} type='success'>Logout</Button>
        </div>
    );
    const profileShipper = JSON.parse(localStorage.getItem('profile_shipper'))
    return (
        <Header
            className="site-layout-background"
            style={{
                padding: 0,
                height: '68px'
            }}
        >
            <Menu style={{ height: '68px', padding: '0 15px' }} theme="dark" mode="horizontal" className='justify-content-end' >
                {
                    profileShipper !== null &&
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                            <p style={{ margin: 0 }}>Hello <span>{profileShipper.username}</span></p>
                            <img style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: '50%' }} src='https://znews-photo.zingcdn.me/w660/Uploaded/qfssu/2022_10_07/anh1_1.jpg' alt="" />

                            <div>
                                <Popover placement="bottom" title={text} content={content} trigger="click">
                                    {/* <Button> */}
                                        <DownOutlined />
                                    {/* </Button> */}
                                </Popover>

                            </div>
                        </div>
                       
                }
            </Menu>
        </Header>
    )
}
