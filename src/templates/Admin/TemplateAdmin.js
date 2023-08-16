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
import SiderAdmin from '../../components/Admin/sider/SiderAdmin';

export default function TemplateAdmin(props) {
    const [collapsed, setCollapsed] = useState(false);
    const { ComponentAdmin, ...resPros } = props
  return <Route {...resPros} render={() => {
       return (<Layout
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
                        <ComponentAdmin/>
                    </div>
                </Content>
                <FooterAdmin />
            </Layout>
        </Layout>)
    }}
    />
}
