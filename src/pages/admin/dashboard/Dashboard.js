import React from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const profileAdmin = localStorage.getItem('profile_admin')
    console.log(profileAdmin)
    return (
        <div
            className="site-layout-background"
            style={{
                paddingTop: 24,
                minHeight: 360,
                flex: 1
            }}

        >
            <div>
                <h2>Dashboard</h2>
                <div className='border-bottom border-primary'>
            </div>
            </div>
        </div>
    )
}
