import React from 'react';
import { Space, Table, Button, Modal, } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';


const { Column } = Table;
const { confirm } = Modal;

const showConfirm = () => {
    confirm({
        title: 'Are you sure about UnLock Agent?',
        icon: <ExclamationCircleOutlined />,
        okText:'Unlock'
    });
};

const data = [
    {
        agentID: 1,
        userName: 'Phonglh',
        password: "343534534",
        fullName: 'Lê Hồng Phong',
        phoneNumber: "0987005806",
        email: 'Phonglhgch18715@fpt.edu.vn',
        reasonLocked: '',
    },
    {
        agentID: 2,
        userName: 'Phonglh',
        password: "343534534",
        fullName: 'Lê Hồng Phong',
        phoneNumber: "0987005806",
        email: 'Phonglhgch18715@fpt.edu.vn',
        reasonLocked: '',
    },
    {
        agentID: 3,
        userName: 'Phonglh',
        password: "343534534",
        fullName: 'Lê Hồng Phong',
        phoneNumber: "0987005806",
        email: 'Phonglhgch18715@fpt.edu.vn',
        reasonLocked: '',
    },
];

const TableAgentLocked = () => (
    <Table dataSource={data}>
        <Column title="Agent ID" dataIndex="agentID" key="agentID" />
        <Column title="User Name" dataIndex="userName" key="userName" />
        <Column title="Password" dataIndex="password" key="password" />
        <Column title="Full Name" dataIndex="fullName" key="fullName" />
        <Column title="Phone number" dataIndex="phoneNumber" key="phoneNumber" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Reason Locked" dataIndex="reasonLocked" key="reasonLocked" />
        <Column
            title="Action"
            key="action"
            render={(_) => (
                <Space size="middle">
                    <Button onClick={showConfirm}><i class="fa-solid fa-lock"></i></Button>
                    <i class="fa-solid fa-eye text-primary"></i>
                </Space>
            )}
        />
    </Table>
);

export default TableAgentLocked;