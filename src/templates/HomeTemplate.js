
import { Layout } from 'antd';
import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';





const HomeTemplate = (props) => {
  const { Component, ...resProps } = props
  return <Route {...resProps} render={() => {
    return (<Layout style={{
                minHeight: '100vh',
            }}>
      <Sidebar />
      <Component />
    </Layout>
    );
  }} />
}
export default HomeTemplate;
