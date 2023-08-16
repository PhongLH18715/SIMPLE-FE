// import React, { useState } from 'react';
// import {
//     MenuFoldOutlined,
//     MenuUnfoldOutlined,
// } from '@ant-design/icons';
// import { Outlet } from "react-router-dom";
// import { Layout } from 'antd';
// import SiderAgent from '../../components/Agent/sider/SiderAgent';
// import HeaderAdmin from '../../components/Agent/header/HeaderAdmin';
// import FooterAdmin from '../../components/Agent/footer/FooterAdmin';
// const { Content } = Layout;

// export default function TemplateAgent() {
//     const [collapsed, setCollapsed] = useState(false);
//     return (
//         <Layout
//             style={{
//                 minHeight: '100vh',
//             }}
//         >
//             <SiderAgent collapsed={collapsed} setCollapsed={setCollapsed} />
//             <Layout className="site-layout">
//                 <HeaderAdmin />
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
//                         {/* <Outlet/> */}
//                     </div>
//                 </Content>
//                 <FooterAdmin />
//             </Layout>
//         </Layout>
//     )
// }
