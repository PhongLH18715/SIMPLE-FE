import { Button, Input, Modal, Space, Table, Tabs, message, Popconfirm } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import classNames from 'classnames/bind';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchAllShipper, fetchAllShipper } from '../../redux/actions/agentAction';
import LockShipper from './LockShipper';
import Receive from './Receive';
import RejectShipper from './RejectShipper';
import axios from 'axios';
import styled from './agent.module.css'

const { Column } = Table;
let cx = classNames.bind(styled);


export default function ShipperManagement() {
    const [isOpenDetailShipper, setIsOpenDetailShipper] = useState(false);
    const { tokenAgent } = useSelector(state => state.token)
    const { AllShipper } = useSelector(state => state.agent)
    console.log("AllShipper", AllShipper)
    const RegisterAllShipper = AllShipper.filter(current => current.status === 'inactive')
    console.log("RegisterAllShipper", RegisterAllShipper)
    const dispatch = useDispatch()
    useEffect(() => {
        if (tokenAgent) {
            fetchAllShipper(tokenAgent).then(res => dispatch(dispatchAllShipper(res)))
        }
    }, [tokenAgent, dispatch])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenInfor, setIsModalOpenInfor] = useState(false);
    const [inforItemShipper, setInforItemShipper] = useState({});

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const showModalInforShipper = (item) => {
        setIsModalOpenInfor(true);
        setInforItemShipper(item)
    };

    const handleOk = () => {

        setIsModalOpen(false);
    };
    const handleOkInforShipper = () => {

        setIsModalOpenInfor(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleCancelInfor = () => {
        setIsModalOpenInfor(false);
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const description = 'Delete the task';
    const text = 'Are you sure to active for shipper';
    const confirm = async(item) => {
        const res = await axios.post('https://simpay-api.hpscamera.com/api/user/approve-shippers', {shippers: item}, {headers: {'Authorization': 'Bearer ' + tokenAgent}})

        console.log(res)
        if(res.data.message === 'Approve successfully'){
              message.open({
                type: 'success',
                content: 'Account have active!!!',
              });
        }
    };

    const columns = [
        {
            title: 'ID',
            width: 100,
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Full Name',
            width: 100,
            dataIndex: 'fullName',
            key: 'fullName',
            fixed: 'left',
            ...getColumnSearchProps('fullName'),
        },
        {
            title: 'Birthday',
            dataIndex: 'dob',
            key: 'dob',
            width: 150,
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            width: 150,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 150,
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            width: 150,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            width: 150,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 150,
            filters: [
                {
                  text: 'inactive',
                  value: 'inactive',
                },
                {
                  text: 'delivering',
                  value: 'delivering',
                },
              ],
             // filteredValue: filteredInfo.name || null,
              onFilter: (value, record) => record.status.includes(value),
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 120,
            render: (record, index) => {
                return <Space size="middle">
                    {record.status === 'inactive' ?
                    <Popconfirm
                    placement="left"
                    title={text}
                    description={description}
                    onConfirm={()=>{confirm(record.username)}}
                    okText="Yes"
                    cancelText="No"
                    >
                        <Button>
                             <i className="fa-solid fa-lock"></i> 
                        </Button>
                    </Popconfirm>
                         : 
                    <Button onClick={showModal}>     
                        <i className="fa-solid fa-lock-open"></i>
                    </Button>
                    }
                    
                    <Modal title="Are you sure about Lock Agent? Enter the reason"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okText="Lock"
                        footer={[
                            <Button key="submit" type="primary" danger onClick={handleOk}>
                                Lock
                            </Button>,
                            <Button key="back" onClick={handleCancel}>
                                Cancel
                            </Button>
                        ]}
                    >
                        <h6>Reason</h6>
                        <TextArea rows={4} />
                    </Modal>
                    <Button onClick={() => { showModalInforShipper(record) }}><i className="fa-solid fa-eye text-primary"></i></Button>
                </Space>
            }
        }

    ];

    return (

        <div
            className={cx('shipper_manager_content')}
        >
        <div className={cx('border-bottom', 'border-primary')}>
            <h2 className='mt-3'>Shipper Management</h2>
        </div>
            <div className='mt-3'>
                <Tabs
                    defaultActiveKey="1"
                    items={[
                        {
                            label: `All`,
                            key: '1',
                            children: (
                                <>
                                   
                                    <Table
                                        columns={columns}
                                        dataSource={AllShipper}
                                        scroll={{
                                            x: 1500,
                                            y: 300,
                                        }}
                                    />
                                    <h4>Total: {AllShipper.length}</h4>
                                </>
                            ),
                        },
                        {
                            label: `Shipper Register`,
                            key: '2',
                            children: <>
                                <Table
                                    columns={columns}
                                    dataSource={RegisterAllShipper}
                                    scroll={{
                                        x: 1500,
                                        y: 300,
                                    }}
                                />
                                <h4>Total: {RegisterAllShipper.length}</h4>
                                <Receive />
                                <RejectShipper />
                            </>,
                        },
                        {
                            label: `Shipper locked`,
                            key: '3',
                            children: (
                                <>
                                    <Table
                                        columns={columns}
                                        dataSource={RegisterAllShipper}
                                        scroll={{
                                            x: 1500,
                                            y: 300,
                                        }}
                                    />
                                    <h4>Total: {RegisterAllShipper.length}</h4>
                                    <LockShipper />
                                </>
                            ),
                        },
                    ]}
                />
            </div>
            <Modal title="Information shipper" open={isModalOpenInfor} onOk={handleOkInforShipper} onCancel={handleCancelInfor}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginBottom: 30 }}>
                    <img style={{ width: 50, height: 50, objectFit: 'cover' }} src="https://upload.wikimedia.org/wikipedia/vi/4/4f/Dragon_Ball_Super_artwork.jpg" alt="dragon" />
                    <div>
                        {inforItemShipper.fullName}
                    </div>
                </div>
                <p>
                    <span style={{ fontWeight: 'bold' }}>Birthday</span> : {inforItemShipper.dob}
                </p>
                <p>
                    <span style={{ fontWeight: 'bold' }}>Gender</span> : {inforItemShipper.gender}
                </p>
                <p>
                    <span style={{ fontWeight: 'bold' }}>Email</span> : {inforItemShipper.email}
                </p>
                <p>
                    <span style={{ fontWeight: 'bold' }}>Phone Number</span> : {inforItemShipper.phoneNumber}
                </p>
                <p>
                    <span style={{ fontWeight: 'bold' }}>Address</span> : {inforItemShipper.address}
                </p>
            </Modal>
        </div>
    )
}
