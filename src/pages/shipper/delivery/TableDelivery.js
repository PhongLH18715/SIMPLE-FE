import { Button, Space, Table, message, Popconfirm } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    DollarOutlined
  } from '@ant-design/icons';



const TableDelivery = ({ dataDelivery }) => {
    // const [loading, setLoading] = useState(0);
    // const { tokenShipper } = useSelector(state => state.token)
    // const [ids, setIds] = useState()
    // const { Column } = Table;
    const text = 'Are you want to book this Order?';
    const description = 'Delete the task';

    const columns = [
        {
            title: 'Order ID',
            width: 100,
            dataIndex: 'orderID',
            key: 'orderID',
            fixed: 'left',
        },
        {
            title: 'Full Name Customer',
            width: 180,
            dataIndex: 'fullNameCustomer',
            key: 'fullNameCustomer',
            fixed: 'left',
        },
        {
            title: 'Number Phone',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            width: 150,
        },
        {
            title: 'Locality',
            dataIndex: 'locality',
            key: 'locality',
            width: 150,
        },
        {
            title: 'Products',
            dataIndex: 'product',
            key: 'product',
            width: 150,
        },
        {
            title: 'Insurance',
            dataIndex: 'insurance',
            key: 'insurance',
            width: 150,
        },
        {
            title: 'Revenue',
            dataIndex: 'revenue',
            key: 'revenue',
            width: 150,
        },
        {
            title: 'Cost to shipper',
            dataIndex: 'costShipper',
            key: 'costShipper',
            width: 150,
        },
        {
            title: 'Total Value',
            dataIndex: 'totalValue',
            key: 'totalValue',
            width: 150,
        },
        {
            title: 'Agent',
            dataIndex: 'agent',
            key: 'agent',
            width: 150,
        },
        {
            title: 'Date Created',
            dataIndex: 'dateCreated',
            key: 'dateCreated',
            width: 150,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 120,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 160,
            render: (record, index) => {
                return <Space size="middle">
                    <Link to={`/shipper/listNewOrder/detail-order/${record.orderID}`}><Button type='primary'>View</Button></Link>
                    <Popconfirm
                    icon={<DollarOutlined />}
                        placement="left"
                        title={text}
                        description={description}
                        // onConfirm={()=>{handleBook(record.orderID)}}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type='primary'>Book</Button>
                    </Popconfirm>
                </Space>
            }
        }

    ];


   
    return (


        <div>
            <Table
                columns={columns}
                dataSource={dataDelivery}
                scroll={{
                    x: 1500,
                    y: 1000,
                }}
            />
            <h4>Total: {dataDelivery.length}</h4>
        </div>
    )
};

export default TableDelivery;