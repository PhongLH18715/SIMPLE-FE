import React, { useEffect, useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    BarsOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { Space, Table, Button, Modal, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchAllLocality, fetchAllLocality } from '../../../redux/actions/adminAction';
import axios from 'axios';
import { errorNotifi, successNotifi } from '../../../utils/Notification/Notification';
const { Column } = Table;
const { Search } = Input;



export default function LocalityManagement() {
    const [titleLocality, setTitleLocality] = useState("");
    const [codeLocality, setCodeLocality] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [loading, setLoading] = useState(0);
    const { locality } = useSelector(state => state.adminReducer)
    const { tokenAdmin } = useSelector(state => state.token)
    const dispatch = useDispatch()
    const adminLogin = localStorage.getItem('admin')

    useEffect(() => {
        if (adminLogin) {
            return fetchAllLocality(tokenAdmin).then(res => dispatch(dispatchAllLocality(res)))
        }
        return
    }, [dispatch, tokenAdmin, adminLogin, loading])

    const handleChange = (pagination, filters, sorter) => {
       // console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    const clearFilters = () => {
        setFilteredInfo({});
    };
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };
    const setAgeSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'age',
        });
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        try {
            const res = await axios.post(`https://simpay-api.hpscamera.com/api/locality`, { title: titleLocality, code: codeLocality }, { headers: { 'Authorization': 'Bearer ' + tokenAdmin } })
            successNotifi(res.data.msg);
            setLoading(Date.now());
            setIsModalOpen(false);
        } catch (error) {
            errorNotifi(error.response.data.message);
            setIsModalOpen(false);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const columns = [
        {
            title: 'ID Locality',
            dataIndex: '_id',
            key: '_id',

        },
        {
            title: 'Name',
            dataIndex: 'title',
            key: 'title',

        },
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',

        },
        {
            title: 'Action',

            render: (_, current) => {
                return <Space size="middle">
                    <div>
                        <Button
                            style={{ color: 'green', marginRight: '10px', borderColor: "green" }}
                            onClick={() => setIsEditModalOpen(true)}
                        >
                            <i className="fa-solid fa-pen" />
                        </Button>
                        <Modal
                            title="Edit locality"
                            open={isEditModalOpen}
                            onOk={() => { setIsEditModalOpen(false) }}
                            onCancel={() => { setIsEditModalOpen(false) }}
                            okText="Save"
                            cancelButtonProps={{ danger: true }}>
                            <label>Name</label>
                            <Input onChange={(e) => handleChangeTitle(e)} defaultValue={current.title} placeholder="Name" />
                            <Select
                                defaultValue={current.code}
                                style={{
                                    marginTop: 10,
                                    width: "100%",
                                }}
                                onChange={handleChangeSelect}
                                options={[
                                    {
                                        value: 'hn1',
                                        label: 'hn1',
                                    },
                                    {
                                        value: 'hn2',
                                        label: 'hn2',
                                    },

                                ]}
                            />
                        </Modal>
                        <Button danger><i className="fa-solid fa-trash" /></Button>
                    </div>
                </Space>
            }
        },
    ];
    const handleChangeSelect = (value) => {
        setCodeLocality(value)
    };
    const handleChangeTitle = (e) => {
        setTitleLocality(e.target.value)
    }
    return (

        <div
            className="site-layout-background"
            style={{
                paddingTop: 20,
                paddingRight: 20,

                minHeight: 360,
                flex: 1
            }}
        >
            <h2 style={{ display: 'inline-block' }}>Locality Management</h2>
            <div className='border-bottom border-primary'>
            </div>
            <div className='mt-3'>
                <Button type='primary' icon={<PlusOutlined />} onClick={showModal} style={{ height: '50px', fontSize: '16px', display: 'flex', alignItems: 'center' }}>Locality</Button>
                <Modal title="Add new locality" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="ADD" cancelButtonProps={{ danger: true }}>
                    <label>Name</label>
                    <Input onChange={(e) => handleChangeTitle(e)} defaultValue={titleLocality} placeholder="Name" />
                    <Select
                        defaultValue="Choose Code"
                        style={{
                            marginTop: 10,
                            width: "100%",
                        }}
                        onChange={handleChangeSelect}
                        options={[
                            {
                                value: 'hn1',
                                label: 'hn1',
                            },
                            {
                                value: 'hn2',
                                label: 'hn2',
                            },

                        ]}
                    />
                </Modal>
            </div>

            <div className='mt-3'>
                <Table columns={columns} dataSource={locality} onChange={handleChange} />
            </div>
        </div>
    )
}
