import React from 'react'
import { Table } from 'antd';

const columns = [
    {
        title: 'Sim series',
        key:'simSeries',
        dataIndex: 'simSeries'
    },
    {
        title: 'Number of Sim',
        key:'numberOfSim',
        dataIndex: 'numberOfSim',
    },
    {
        title: 'Unit price',
        key:'unitPrice',
        dataIndex: 'unitPrice',
    },
    {
        title: 'Discount (%)',
        key:'discount',
        dataIndex: 'discount',
    },
    {
        title: 'VAT (%)',
        key:'vat',
        dataIndex: 'vat',
    },
    {
        title: 'Cost',
        key:'cost',
        dataIndex: 'cost',
    }
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export default function TableOrderInformation() {
    return (
        <Table columns={columns} dataSource={data} pagination={false} />
    )
}
