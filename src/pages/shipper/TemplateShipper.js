// import React, { useState } from 'react';
// import {
//     MenuFoldOutlined,
//     MenuUnfoldOutlined,
// } from '@ant-design/icons';
// import { Outlet } from "react-router-dom";
// import { Layout } from 'antd';
// import SiderShipper from '../../components/Shipper/sider/SiderShipper';
// import HeaderShipper from '../../components/Shipper/header/HeaderShipper';
// import FooterShipper from '../../components/Shipper/footer/FooterShipper';
// const { Content } = Layout;

// export default function TemplateShipper() {
//     const [collapsed, setCollapsed] = useState(false);
//     return (
//         <Layout
//             style={{
//                 minHeight: '100vh',
//             }}
//         >
//             <SiderShipper collapsed={collapsed} setCollapsed={setCollapsed} />
//             <Layout className="site-layout">
//                 <HeaderShipper />
//                 <Content>
//                     <div className='d-flex'>
//                         <div style={{
//                             padding: '30px 10px',
//                         }}>
//                             {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                                 className: 'trigger',
//                                 style: {
//                                     fontSize: '18px',
//                                     cursor: 'pointer',
//                                     transition: 'color 0.3s',
//                                 },
//                                 onClick: () => setCollapsed(!collapsed),
//                             })}
//                         </div>
//                         <Outlet/>
//                     </div>
//                 </Content>
//                 <FooterShipper />
//             </Layout>
//         </Layout>
//     )
// }
