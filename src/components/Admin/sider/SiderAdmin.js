import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const { Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}


const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

export default function SiderAdmin(props) {
    const { collapsed, setCollapsed } = props;
    let location = useLocation();
    const [current, setCurrent] = useState(
        location.pathname === "/" || location.pathname === ""
            ? "/dashboard"
            : location.pathname,
    );
    useEffect(() => {
        if (location) {
            if (current !== location.pathname) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);
    function handleClick(e) {
        setCurrent(e.key);
    }
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" style={{ height: '32px', margin: '16px' }}><h1 style={{ color: 'white' }}>Nextshop</h1></div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handleClick} selectedKeys={[current]} >
                <Menu.Item key="/admin/dashboard" >
                    <Link to="/admin/dashboard">
                        Dashboard
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/agentManagement" >
                    <Link to="/admin/agentManagement">
                    Agent Managerment
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/shipperManagement" >
                    <Link to="/admin/shipperManagement">
                    Shipper Managerment
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/localityManagement" >
                    <Link to="/admin/localityManagement">
                    Locality Managerment
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/product" >
                    <Link to="/admin/product">
                    Product Managerment
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
