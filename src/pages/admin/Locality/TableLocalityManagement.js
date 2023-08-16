import { Space, Table } from 'antd';
import React from 'react';
const { Column } = Table;
const data = [
    {
        localityID: 1,
        name: 'Phonglh',
        createDate: "343534534",
        Creator: 'Lê Hồng Phong',
    },
    {
        localityID: 1,
        name: 'Phonglh',
        createDate: "343534534",
        Creator: 'Lê Hồng Phong',
    },
    {
        localityID: 1,
        name: 'Phonglh',
        createDate: "343534534",
        Creator: 'Lê Hồng Phong',
    },
];

const TableLocalityManagement = () => (
    <Table dataSource={data} scroll={{
        x: 1300,
    }}>
        <Column title="Locality ID" dataIndex="localityID" key="localityID" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Password" dataIndex="password" key="password" />
        <Column title="Full Name" dataIndex="fullName" key="fullName" />
        <Column title="Phone number" dataIndex="phoneNumber" key="phoneNumber" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column
            title="Action"
            key="action"
            render={(_) => (
                <Space size="middle">
                    <i class="fa-solid fa-lock"></i>
                    <i class="fa-solid fa-eye"></i>
                </Space>
            )}
        />
    </Table>
);

export default TableLocalityManagement;