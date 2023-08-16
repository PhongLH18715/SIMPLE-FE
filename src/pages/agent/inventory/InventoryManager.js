import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Layout, Modal, Space, Table, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import Swal from 'sweetalert2';
import styled from '../agent.module.css'
import { dispatchAllSim, fetchAllSim } from '../../../redux/actions/productSimAction';
import { errorNotifi, successNotifi } from '../../../utils/Notification/Notification';
import InventoryTable from './InventoryTable';
import ModalInventory from './ModalInventory';

let cx = classNames.bind(styled);
const { Column } = Table;
const { Header, Content, Footer, Sider } = Layout;

export default function InventoryManager() {
    const { simAll } = useSelector(state => state.simReducer)
    const { tokenAdmin } = useSelector(state => state.token)
    const [loading, setLoading] = useState(0);

    const adminLogin = localStorage.getItem('admin')
    const dispatch = useDispatch()
    const [dataSim, setDataSim] = useState({
        number: "",
        serial: "",
        brand: "",
        price: "",
        discount: "",
        vat: "",
        available: true
    })
    const [dataSimUpdate, setDataSimUpdate] = useState({
        numberOfSim: "",
        serial: "",
        brand: "",
        price: "",
        discount: "",
        vat: "",
        available: true
    })

    const datas = simAll.map((current) => {
        return {
            id: current.id,
            simSeries: current.serial,
            numberOfSim: current.number,
            unitPrice: current.price,
            discount: current.discount,
            vat: current.vat,
            available: current.available,
            brand: current.brand,
            date: current.createdAt,
            addedAt: current.addedAt,
        }
    })
    console.log(simAll)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target
        setDataSim({ ...dataSim, [name]: value })
    }
    const handleChangeUpdate = (e) => {
        const { name, value } = e.target
        setDataSimUpdate({ ...dataSimUpdate, [name]: value })
    }
    console.log(dataSimUpdate)
    const showModal = () => {
        setIsModalOpen(true);
    };
    const showModalUpdate = (id) => {
        setIsModalOpenUpdate(true);
        setDataSimUpdate(id)
    };

    const handleOk = async () => {
        let flag = true
        const { number, serial, brand, price, discount, vat, available } = dataSimUpdate
        if (available === 'false') {
            flag = false
        } else {
            flag = true
        }
        // try {
        //     const res = await axios.post(`/api/product/add`, { number: number, serial: serial, brand: brand, price: price, discount: discount, vat: vat, available: flag }, { headers: { 'Authorization': 'Bearer ' + tokenAdmin } })
        //     successNotifi(res.data.msg);
        //     setLoading(Date.now());
        //     setIsModalOpen(false);
        //     setDataSim({ ...setDataSim, number: '', serial: '', brand: '', price: '', discount: '', vat: '', })
        // } catch (error) {
        //     errorNotifi(error.response.data.message);
        //     setIsModalOpen(false);
        // }
    };



    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleCancelUpdate = () => {
        setIsModalOpenUpdate(false);
    };


   
    // const handleOkUpdate = async () => {
    //     let flag = true
    //     const { numberOfSim, serial, brand, price, discount, vat, available } = dataSimUpdate
    //     if (available === 'false') {
    //         flag = false
    //     } else {
    //         flag = true
    //     }
    //     try {
    //         const res = await axios.post(`/api/product/update/${dataSimUpdate.id}`, { number: numberOfSim, serial: serial, brand: brand, price: price, discount: discount, vat: vat, available: flag }, { headers: { 'Authorization': 'Bearer ' + tokenAdmin } })
    //         successNotifi(res.data.msg);
    //         setLoading(Date.now());
    //         setIsModalOpenUpdate(false);
    //         setDataSim({ ...setDataSim, number: '', serial: '', brand: '', price: '', discount: '', vat: '', })
    //     } catch (error) {
    //         errorNotifi(error.response.data.message);
    //         setIsModalOpenUpdate(false);
    //     }
    // }
    useEffect(() => {
        if (adminLogin) {
            return fetchAllSim(tokenAdmin).then(res => dispatch(dispatchAllSim(res)))
        }
        return
    }, [dispatch, tokenAdmin, adminLogin, loading])


    return (
        <div
            className={cx('product_manager')}
        >
            <h2>Inventory Management</h2>
            <div className='border-bottom border-primary'>
            </div>
            <div className={cx('mt-4', 'product_btn')}>
                <Button style={{ display: 'flex', alignItems: 'center' }} type="primary" onClick={showModal}>
                    <PlusOutlined />
                    Import inventory
                </Button>
                <ModalInventory isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} dataSim={dataSim} handleChange={handleChange}/>
               
                {/* <Modal title="Update Sim" open={isModalOpenUpdate} onOk={handleOkUpdate} onCancel={handleCancelUpdate}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Sim series</label>
                            <input type="text" defaultValue={dataSimUpdate.simSeries} name="serial" className="form-control" id="exampleInputEmail1" onChange={handleChangeUpdate} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword2">Number of Sim*</label>
                            <input type="text" defaultValue={dataSimUpdate.numberOfSim} name="numberOfSim" className="form-control" id="exampleInputPasswor2" onChange={handleChangeUpdate} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword3">Unit Price*</label>
                            <input type="text" defaultValue={dataSimUpdate.unitPrice} name="price" className="form-control" id="exampleInputPassword3" onChange={handleChangeUpdate} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword4">Discount*</label>
                            <input type="text" defaultValue={dataSimUpdate.discount} name="discount" className="form-control" id="exampleInputPassword4" onChange={handleChangeUpdate} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword5">VAT*</label>
                            <input type="text" className="form-control" defaultValue={dataSimUpdate.vat} name="vat" id="exampleInputPassword5" onChange={handleChangeUpdate} />
                        </div>

                    </form>
                </Modal> */}

            </div>

            <div className='mt-3'>
                <InventoryTable data={datas} setIsModalOpen={setIsModalOpen}/>
            </div>
        </div>
    )
}
