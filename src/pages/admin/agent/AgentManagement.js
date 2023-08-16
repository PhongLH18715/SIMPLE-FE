import {
    BarsOutlined, DesktopOutlined,
    FileOutlined,
    PieChartOutlined, PlusOutlined, TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Button, Layout, Modal } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchAllAgent, fetchAllAgent } from '../../../redux/actions/agentAction';
import { errorNotifi, successNotifi } from '../../../utils/Notification/Notification';
import TableAgentLocked from './TableAgentLocked';
import TableAgentManagement from './TableAgentManagement';
const { Header, Content, Footer, Sider } = Layout;



export default function AgentManagement() {
    const [collapsed, setCollapsed] = useState(false);
    const [loading, setLoading] = useState(0);
    const { AllAgent } = useSelector(state => state.agent)
    const { tokenAdmin } = useSelector(state => state.token)
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const adminLogin = localStorage.getItem('admin')
    const [addAgent, setAddAgent] = useState({
        username: '',
        email: '',
        password: '',
        fullName: '',
        gender: '',
        phoneNumber: ''
    })
    console.log(AllAgent)
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setAddAgent({ ...addAgent,  username: '',email: '',  password: '', fullName: '', phoneNumber: ''})
        setIsModalOpen(false);
    };
    useEffect(() => {
        if (adminLogin) {
            return fetchAllAgent(tokenAdmin).then(res => dispatch(dispatchAllAgent(res)))
        }
        return
    }, [dispatch, tokenAdmin, adminLogin, loading])
    const handleChange = (e) => {
        const { name, value } = e.target
        setAddAgent({ ...addAgent, [name]: value })
    }
    const handleAddAgent = async () => {
        const { username, email, password, fullName, phoneNumber } = addAgent
        try {
            const res = await axios.post(`https://simpay-api.hpscamera.com/api/user/add-agent`, { username, email, password, fullName, phoneNumber }, { headers: { 'Authorization': 'Bearer ' + tokenAdmin } })
            successNotifi(res.data.msg);
            setLoading(Date.now());
            setIsModalOpen(false);
            setAddAgent({ ...addAgent,  username: '',email: '',  password: '', fullName: '', phoneNumber: ''})
        } catch (error) {
            errorNotifi(error.response.data.message);
            setIsModalOpen(false);
        }
    }
    return (
        <div
            className="site-layout-background"
            style={{
                minHeight: 360,
                paddingTop: '20px',
                flex: 1
            }}
        >
            <h2>Agent Management</h2>
            <div className='border-bottom border-primary'>
            </div>
            <div className='mt-3'>
                <Button style={{ display: 'flex', alignItems: 'center' }} type="primary" onClick={showModal}>
                    <PlusOutlined />
                    Agent
                </Button>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleAddAgent} onCancel={handleCancel}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">User Name</label>
                            <input type="text" name="username" className="form-control" defaultValue={addAgent.username} id="exampleInputPassword1" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name="password" className="form-control" defaultValue={addAgent.password} id="exampleInputPassword1" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Full Name</label>
                            <input type="text" name="fullName" className="form-control" defaultValue={addAgent.fullName} id="exampleInputPassword1" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Phone Number</label>
                            <input type="text" name="phoneNumber" className="form-control" defaultValue={addAgent.phoneNumber} id="exampleInputPassword1" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" className="form-control" defaultValue={addAgent.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                        </div>
                    </form>
                </Modal>

            </div>
            <div className='mt-3'>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><i className="fa-solid fa-magnifying-glass" />
                    </button>
                    <i className="fa-solid fa-filter ml-3" style={{ fontSize: '20px' }} />
                </form>
            </div>
            <div className='mt-3'>
                <div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="all-tab" data-toggle="tab" data-target="#all" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="agentlocked-tab" data-toggle="tab" data-target="#agentlocked" type="button" role="tab" aria-controls="profile" aria-selected="false">Agent Locked</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active p-3" id="all" role="tabpanel" aria-labelledby="all-tab">
                            <div>
                                <TableAgentManagement AllAgent={AllAgent} />
                                <h5>Total: {AllAgent?.length}</h5>
                            </div>
                        </div>
                        <div className="tab-pane fade p-3" id="agentlocked" role="tabpanel" aria-labelledby="agentlocked-tab">
                            <TableAgentLocked />
                            <h5>Total: </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
