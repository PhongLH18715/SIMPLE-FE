import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    BarsOutlined,
} from '@ant-design/icons';
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import SiderAdmin from '../../components/Admin/sider/SiderAdmin';
import HeaderAdmin from '../../components/Admin/header/HeaderAdmin';
import FooterAdmin from '../../components/Admin/footer/FooterAdmin';
import AgentManagement from './agent/AgentManagement';
import Dashboard from './dashboard/Dashboard';
const { Content } = Layout;

export default function TemplateAdmin() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <SiderAdmin collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout className="site-layout">
                <HeaderAdmin />
                <Content>
                    <div className='d-flex'>
                        <div style={{
                            padding: '30px 10px',
                        }}>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                style: {
                                    fontSize: '18px',
                                    cursor: 'pointer',
                                    transition: 'color 0.3s',
                                },
                                onClick: () => setCollapsed(!collapsed),
                            })}
                        </div>
                        <Outlet/>
                    </div>
                </Content>
                <FooterAdmin />
            </Layout>
        </Layout>
    )
}
