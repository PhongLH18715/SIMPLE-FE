import React from 'react'
import { Table } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Locality',
      dataIndex: 'locality',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value, record) => record.locality.indexOf(value) === 0,
    },
    {
      title: 'Order Amount',
      dataIndex: 'orderAmount',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.orderAmount - b.orderAmount,
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      locality: 'New York No. 1 Lake Park',
      orderAmount: 32,
    },
    {
      key: '2',
      name: 'Jim Green',
      locality: 'London No. 1 Lake Park',
      orderAmount: 42,
    },
    {
      key: '3',
      name: 'Joe Black',
      locality: 'Sydney No. 1 Lake Park',
      orderAmount: 32,
    },
    {
      key: '4',
      name: 'Jim Red',
      locality: 'London No. 2 Lake Park',
      orderAmount: 32,
    },
  ];
const BestShipper = ()=> {
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
  return (
    <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}
export default BestShipper;
