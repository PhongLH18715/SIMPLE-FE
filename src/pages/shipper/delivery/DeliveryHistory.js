import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import classNames from 'classnames/bind';

import styled from '../shipper.module.css';
import TableDelivery from './TableDelivery';

const { Column } = Table;
let cx = classNames.bind(styled);

const dataDelivery =[
    {
        orderID: "0029312",
        fullNameCustomer: "Le Hong Phong",
        phoneNumber: "092391321",
        locality: "Ha Noi",
        product: "Nước mắm tinh khiết",
        insurance: "ks-12321",
        revenue: 900,
        costShipper: "12.000",
        agent: "Bui Quang Long",
        dateCreated: "12/20/2023",
        status: "Success"
    },
    {
        orderID: "0029312",
        fullNameCustomer: "Le Hong Phong",
        phoneNumber: "092391321",
        locality: "Ha Noi",
        product: "Nước mắm tinh khiết",
        insurance: "ks-12321",
        revenue: 900,
        costShipper: "12.000",
        agent: "Bui Quang Long",
        dateCreated: "12/20/2023",
        status: "Success"
    },
    {
        orderID: "0029312",
        fullNameCustomer: "Le Hong Phong",
        phoneNumber: "092391321",
        locality: "Ha Noi",
        product: "Nước mắm tinh khiết",
        insurance: "ks-12321",
        revenue: 900,
        costShipper: "12.000",
        agent: "Bui Quang Long",
        dateCreated: "12/20/2023",
        status: "Success"
    },
]

export default function DeliveryHistory() {
    return (
        <div className={cx('delivery_content')}>
            <div className='border-bottom border-primary'>
                <h2>Delivery History</h2>
            </div>
           
            <div className='mt-5 '>
               <TableDelivery dataDelivery={dataDelivery}/>
            </div>
        </div>
    )
}
