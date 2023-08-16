import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout';
import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import HeaderAdmin from '../../components/Admin/header/HeaderAdmin';
import SiderAdmin from '../../components/Admin/sider/SiderAdmin'
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
import SiderShipper from '../../components/Shipper/sider/SiderShipper';
import HeaderShipper from '../../components/Shipper/header/HeaderShipper';
import FooterShipper from '../../components/Shipper/footer/FooterShipper';

export default function TemplateShipper(props) {
    const [collapsed, setCollapsed] = useState(false);
    const { ComponentShipper, ...resPros } = props
  return (
    <Route {...resPros} render={() => {
       return  <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <SiderShipper collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout className="site-layout">
                <HeaderShipper />
                <Content>
                    <div>
                        {/* <div style={{
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
                        </div> */}
                        <ComponentShipper/>
                    </div>
                </Content>
            </Layout>
        </Layout>
  }}
  />
  )
}
