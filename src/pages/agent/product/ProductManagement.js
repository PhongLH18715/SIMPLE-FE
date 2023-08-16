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
import ModalProduct from './ModalProduct';
import TableProduct from './TableProduct';
import ModalInventory from './ModalInventory';

let cx = classNames.bind(styled);
const { Column } = Table;
const { Header, Content, Footer, Sider } = Layout;

export default function ProductManagement() {

    const dataFake = [
        {
            id: '1',
            name: 'Nước mắn',
            averageImportPrice: 200,
            retailPrice: 600,
            sku: '7621-GCH',
            barCode: '02983123-2123',
            discount: 20,
            vat: 40,
            amountOfInventory: 200,
            dateCreate: '20/12/2022',
            creator: 'le hong phong'
        },
        {
            id: '2',
            name: 'Tương ơt',
            averageImportPrice: 200,
            retailPrice: 600,
            sku: '7621-GCH',
            barCode: '02983123-2123',
            discount: 20,
            vat: 40,
            amountOfInventory: 200,
            dateCreate: '20/12/2022',
            creator: 'le hong phong'
        },
        {
            id: '1',
            name: 'Nước khoáng',
            averageImportPrice: 200,
            retailPrice: 600,
            sku: '7621-GCH',
            barCode: '02983123-2123',
            discount: 20,
            vat: 40,
            amountOfInventory: 200,
            dateCreate: '20/12/2022',
            creator: 'le hong phong'
        }
    ]
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

    const [showModalInventory, setShowModalInventory] = useState(false);
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
    const modalInventory = () => {
        setShowModalInventory(true)
    }
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
        try {
            const res = await axios.post(`/api/product/add`, { number: number, serial: serial, brand: brand, price: price, discount: discount, vat: vat, available: flag }, { headers: { 'Authorization': 'Bearer ' + tokenAdmin } })
            successNotifi(res.data.msg);
            setLoading(Date.now());
            setIsModalOpen(false);
            setDataSim({ ...setDataSim, number: '', serial: '', brand: '', price: '', discount: '', vat: '', })
        } catch (error) {
            errorNotifi(error.response.data.message);
            setIsModalOpen(false);
        }
    };



    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleCancelUpdate = () => {
        setIsModalOpenUpdate(false);
    };

    const handleCancelInventory = () => {
        setShowModalInventory(false);
    };


    // const handleDelete = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             try {
    //                 const res = await axios.post(`/api/product/delete/${id}`, {}, { headers: { 'Authorization': 'Bearer ' + tokenAdmin } });
    //                 Swal.fire("Deleted!", res.data.msg, "success").then((confirm) => {
    //                     if (confirm.isConfirmed) {
    //                         setLoading(Date.now());
    //                     }
    //                 });
    //             } catch (error) {
    //                 Swal.fire({
    //                     title: "Error!",
    //                     html: error.response.data.msg,
    //                     icon: "error",
    //                     confirmButtonText: "OK",
    //                 }).then((confirm) => {
    //                     if (confirm.isConfirmed) {
    //                         setLoading(Date.now());
    //                     }
    //                 });
    //             }
    //         }
    //     });
    // }

    const handleOkUpdate = async () => {
        let flag = true
        const { numberOfSim, serial, brand, price, discount, vat, available } = dataSimUpdate
        if (available === 'false') {
            flag = false
        } else {
            flag = true
        }
        // try {
        //     const res = await axios.post(`/api/product/update/${dataSimUpdate.id}`, { number: numberOfSim, serial: serial, brand: brand, price: price, discount: discount, vat: vat, available: flag }, { headers: { 'Authorization': 'Bearer ' + tokenAdmin } })
        //     successNotifi(res.data.msg);
        //     setLoading(Date.now());
        //     setIsModalOpenUpdate(false);
        //     setDataSim({ ...setDataSim, number: '', serial: '', brand: '', price: '', discount: '', vat: '', })
        // } catch (error) {
        //     errorNotifi(error.response.data.message);
        //     setIsModalOpenUpdate(false);
        // }
    }
    // useEffect(() => {
    //     if (adminLogin) {
    //         return fetchAllSim(tokenAdmin).then(res => dispatch(dispatchAllSim(res)))
    //     }
    //     return
    // }, [dispatch, tokenAdmin, adminLogin, loading])

    const submitInventory = () => {
        setShowModalInventory(false)
    }
    return (
        <div
            className={cx('product_manager')}
        >
            <h2>Product Management</h2>
            <div className='border-bottom border-primary'>
            </div>
            <div className={cx('mt-4', 'product_btn')}>
                <Button style={{ display: 'flex', alignItems: 'center' }} type="primary" onClick={showModal}>
                    <PlusOutlined />
                    New product
                </Button>
                <Button style={{ display: 'flex', alignItems: 'center' }} type="primary" onClick={modalInventory}>
                    <PlusOutlined />
                    Import inventory
                </Button>
                <ModalProduct handleChange={handleChange} dataSim={dataSim} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
                <ModalInventory handleChangeUpdate={handleChangeUpdate} dataSimUpdate={dataSimUpdate} showModalInventory={showModalInventory} submitInventory={submitInventory} handleCancelInventory={handleCancelInventory} />
            </div>

            <div className='mt-3'>
                <TableProduct dataFake={dataFake} />
            </div>
        </div>
    )
}
