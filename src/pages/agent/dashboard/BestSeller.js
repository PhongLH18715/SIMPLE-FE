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
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
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
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.revenue - b.revenue,
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      amount: 'New York No. 1 Lake Park',
      revenue: 32,
    },
    {
      key: '2',
      name: 'Jim Green',
      amount: 'London No. 1 Lake Park',
      revenue: 42,
    },
    {
      key: '3',
      name: 'Joe Black',
      amount: 'Sydney No. 1 Lake Park',
      revenue: 32,
    },
    {
      key: '4',
      name: 'Jim Red',
      amount: 'London No. 2 Lake Park',
      revenue: 32,
    },
  ];
const BestSeller = ()=> {
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
  return (
    <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}
export default BestSeller;
