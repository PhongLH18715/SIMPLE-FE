import { Button, Space, Table, message, Popconfirm } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    DollarOutlined
  } from '@ant-design/icons';

import { errorNotifi, successNotifi } from '../../../../utils/Notification/Notification';


const TableListNewOrder = ({ datas }) => {
    const [loading, setLoading] = useState(0);
    const { tokenShipper } = useSelector(state => state.token)
    const [ids, setIds] = useState()
    const { Column } = Table;
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
            title: 'Full Name',
            width: 100,
            dataIndex: 'fullName',
            key: 'fullName',
            fixed: 'left',
        },
        {
            title: 'Phone number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            width: 150,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
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
            dataIndex: 'products',
            key: 'products',
            width: 150,
        },
        {
            title: 'DeliveryReceived',
            dataIndex: 'address',
            key: 'address',
            width: 150,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
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
                    {/* <Button type='primary' onClick={() => { handleBook(record.orderID) }}>Book</Button> */}
                    <Popconfirm
                    icon={<DollarOutlined />}
                        placement="left"
                        title={text}
                        description={description}
                        onConfirm={()=>{handleBook(record.orderID)}}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type='primary'>Book</Button>
                    </Popconfirm>
                </Space>
            }
        }

    ];


    console.log('tokenShipper: ', tokenShipper)
    const handleBook = async (id) => {
        try {
            const res = await axios.patch(`https://simpay-api.hpscamera.com/api/order/${id}/accept`, {}, { headers: { 'Authorization': 'Bearer ' + tokenShipper } })
            console.log(res)
            successNotifi(res.data.msg);
            setLoading(Date.now());
        } catch (error) {
            errorNotifi(error.response.data.message);
        }
    }
    return (


        <div>
            <Table
                columns={columns}
                dataSource={datas}
                scroll={{
                    x: 1500,
                    y: 1000,
                }}
            />
            <h5>Total: {datas.length}</h5>
        </div>
    )
};

export default TableListNewOrder;