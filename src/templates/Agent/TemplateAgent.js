import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import FooterAdmin from '../../components/Admin/footer/FooterAdmin';
import HeaderAdmin from '../../components/Admin/header/HeaderAdmin';
import HeaderAgent from '../../components/Agent/header/HeaderAgent';
import SiderAgent from '../../components/Agent/sider/SiderAgent';

export default function TemplateAgent(props) {
    const [collapsed, setCollapsed] = useState(false);
    const { ComponentAgent, ...resPros } = props
  return (
    <Route {...resPros} render={() => {
       return <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <SiderAgent collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout className="site-layout">
                <HeaderAgent />
                <Content>
                    <div>
                        {/* <div style={{
                            padding: '30px 10px',
                            borderRight: "1px solid",
                            height: "100vh",
                            background: 'white'
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
                        <ComponentAgent/>
                    </div>
                </Content>
                {/* <FooterAdmin /> */}
            </Layout>
        </Layout>
  }}
  />
  )
}
