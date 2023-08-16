import {
    PlusOutlined,
    DeleteOutlined,
    SearchOutlined
} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import classNames from 'classnames/bind';
import { Tabs, Space, Button, Modal, Input, Card, Form, Table, Checkbox, TreeSelect } from 'antd';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '../agent.module.css'
import TableOrderManager from '../TableOrderManager';
import { dispatchAllLocality, fetchAllLocality } from '../../../redux/actions/adminAction';

let cx = classNames.bind(styled);

export default function OrderManagemet() {
    const { tokenAgent } = useSelector(state => state.token)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalCheckPay, setIsModalCheckPay] = useState(false);
    const [orderInformation, setOrderInformation] = useState({
        locality: '',
        total: '',
        orderVAT: '',
        orderDiscount: '',
        totalCost: ''
    });
    const [productCurrent, setProductCurrent] = useState({
    });
    const [product, setProduct] = useState({
        name: '',
        amount: '',
        unitPrice: '',
        discount: '',
        vat: '',
        cost: '',
    });
    const [loading, setLoading] = useState(0);
    const [dataAdd, setDataAdd] = useState({
        customerFirstName: '',
        customerLastName: '',
        address: '',
        phoneNumber: '',

    })
    const [value, setValue] = useState();
    const [treeData, setTreeData] = useState([
        {
            id: 1,
            pId: 0,
            value: '1',
            title: 'Ha Noi',
        },
        {
            id: 2,
            pId: 0,
            value: '2',
            title: 'Ho Chi Minh',
        },
        {
            id: 3,
            pId: 0,
            value: '3',
            title: 'Da Nang',
            isLeaf: true,
        },
    ]);
    const [data, setData] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const dataSearch = [
        {
            key: '1',
            Name: 'Omachi',
            Amount: 0,
            unitPrice: '25.000 vnd',
            discount: '10',
            vat: '12 ',
            cost: '30.000',
        },
        {
            key: '2',
            Name: 'Kokomi',
            Amount: 0,
            unitPrice: '15.000 vnd',
            discount: '10',
            vat: '8 ',
            cost: '20.000',
        },
        {
            key: '3',
            Name: 'Miwon',
            Amount: 0,
            unitPrice: '35.000 vnd',
            discount: '10',
            vat: '8 ',
            cost: '40.000',
        },
    ];
    const [searchProduct, setSearchProduct] = useState('');
   

    const columns = [
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
           
        },

        {
            title: 'Amount',
            dataIndex: 'Amount',
            key: 'Amount'
        },
        {
            title: 'Unit price',
            dataIndex: 'unitPrice',
            key: 'unitPrice'
        },
        {
            title: 'Discount (%)',
            dataIndex: 'discount',
            key: 'discount'
        },
        {
            title: 'VAT (%)',
            dataIndex: 'vat',
            key: 'vat'
        },
        {
            title: 'Cost',
            dataIndex: 'cost',
            key: 'cost'
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (record, index) => {
                return <Button style={{ display: 'flex', alignItems: 'center' }}><DeleteOutlined /></Button>
            }
        },
    ]
    const [checkDelivery, setCheckDelivery] = useState(false)
    const [delivery, setDelivery] = useState({
        costToShipper: '',
        totalOrderValue: '',
        note: '',
    });
    const [vat, setVat] = useState()
    const [discount, setDiscount] = useState()
    const [deliveryReceived, setDeliveryReceived] = useState(false)
    const { locality } = useSelector(state => state.adminReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if (tokenAgent) {
            
            return fetchAllLocality(tokenAgent).then(res => dispatch(dispatchAllLocality(res)))
        }
        
    }, [dispatch, tokenAgent, loading])
    useEffect(()=>{
        const newLocality = locality.map((current)=>{
            return {...current, pId: 0, id: current._id, value: current.title}
        })
        setTreeData(newLocality)
    },[locality])
    const handleChangeVat = (e)=>{
        setVat(e.target.value)
    }
    const handleChangeDiscount = (e)=>{
        setDiscount(e.target.value)
    }
    const handleChangeOrderInformation = (e) => {
        const { name, value } = e.target
        setOrderInformation({ ...orderInformation, [name]: value })
    }
   
    const [dataAddProduct, setDataAddProduct] = useState([])
    const handleChangeAdd = (e) => {
        const { name, value } = e.target
        setDataAdd({ ...dataAdd, [name]: value })
    }

    
    const { TextArea } = Input;

    const handleSubmit = async () => {
        setIsModalCheckPay(false)
        const { customerFirstName, customerLastName,  address, phoneNumber, products } = dataAdd
        try {
            const res = await axios.post('https://simpay-api.hpscamera.com/api/order', { customerFirstName, customerLastName, address, discountPercent: discount, feeShip: costShipper,locallity: 'hn', phoneNumber, products: dataAddProduct, deliveryReceived: checkDelivery }, { headers: { 'Authorization': 'Bearer ' + tokenAgent } })
            console.log(res)
            setLoading(Date.now());
        } catch (error) {
            console.log(error)
        }
    }
  console.log("dataAdd", dataAdd)
    const handleChangeChecked = (e) => {
        setCheckDelivery(e.target.checked)
    }

    const genTreeNode = (parentId, isLeaf = false) => {
        const random = Math.random().toString(36).substring(2, 6);
        return {
            id: random,
            pId: parentId,
            value: random,
            title: isLeaf ? 'Tree Node' : 'Expand to load',
            isLeaf,
        };
    };

    const onChange = (newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    const handleSearchProduct = (e)=>{
        setSearchProduct(e.target.value)
    }
    useEffect(()=>{
        const newListSearch = dataSearch.filter(current => current.Name.toLowerCase() === searchProduct.toLowerCase())
        setSearchResult(newListSearch)
    }, [searchProduct])
    const handleAddTable = (table)=>{
        const newData = []
        setData((data)=>{
             return [...data, table]
            // const newDatas = data.filter((data)=>{
            //     const dataId = newData.includes(data.id)
            //     if(!dataId){
            //         newData.push(data.id)
            //         return true
            //     }
            //     return false
                
            //  })
           //  return [...data, newData]
        })

        setSearchProduct('')
    }
    const [costShipper, setCostShipper] = useState(0)
    const handleChangeCostShipper = (e)=>{
        setCostShipper(e.target.value)
    }
    const caculatorProduct = ()=>{
        const total = data.reduce((total, current)=>{
            return total += Number(current.cost) 
        },0) 
        const totalVat = (total + (total * (vat /100))) || 0

        const totalProduct=  (totalVat - (totalVat * (discount /100))) || 0 
        return Math.ceil(totalProduct)
    }
   
    console.log("costShipper", costShipper)
    return (
        <div
            className={cx('order_manager_content')}
        >
            <div className={cx('border-bottom', 'border-primary')}>
                <h2>Order Management</h2>
            </div>
            <div className={cx('mt-3')}>
                {/* <button type="button" className="btn btn-primary"><i class="fa-solid fa-plus"></i> Order</button> */}
                <Button
                    type='primary'
                    icon={<PlusOutlined />}
                    onClick={() => setIsModalOpen(true)}
                    style={{ display: 'flex', alignItems: 'center' }}
                >
                    Order
                </Button>
                <Modal
                    title={<h2>Add new Order</h2>}
                    open={isModalOpen}
                    onOk={() => {
                        setIsModalOpen(false);
                        setIsModalCheckPay(true)
                    }}
                    onCancel={() => setIsModalOpen(false)}
                    okText="Add"
                    cancelButtonProps={{ danger: true }}
                    width={800}
                >
                    <Form layout="vertical">
                        <h5>Customer information</h5>
                        <Card style={{ width: 750, marginBottom: 20 }}>
                            <div className='d-flex justify-content-between'>
                                <Form.Item

                                    label="First Name"
                                    name="customerFirstName"
                                    rules={[{ required: true, message: 'Please input your customerFirstName!' }]}
                                    style={{ width: '40%' }}
                                >
                                    <Input name="customerFirstName" defaultValue={dataAdd.customerFirstName} onChange={handleChangeAdd} />
                                </Form.Item>
                                <Form.Item
                                    label="Last Name"
                                    name="customerLastName"
                                    rules={[{ required: true, message: 'Please input your customerLastName!' }]}
                                    style={{ width: '40%' }}
                                >
                                    <Input name="customerLastName" defaultValue={dataAdd.customerLastName} onChange={handleChangeAdd} />
                                </Form.Item>
                            </div>
                            <Form.Item
                                label="Phone Number"
                                name="phoneNumber"
                                rules={[{ required: true, message: 'Please input your phoneNumber!' }]}
                            >
                                <Input name="phoneNumber" defaultValue={dataAdd.phoneNumber} onChange={handleChangeAdd} />
                            </Form.Item>

                            <Form.Item
                                label="Address"
                                name="address"
                                rules={[{ required: true, message: 'Please input your address!' }]}
                            >
                                <Input name="address" defaultValue={dataAdd.address} onChange={handleChangeAdd} />
                            </Form.Item>

                            <Form.Item
                                label="Locallity"
                                name="locallity"
                                rules={[{ required: true, message: 'Please input your locallity!' }]}
                            >
                                <Input name="locallity" defaultValue={dataAdd.locallity} onChange={handleChangeAdd} />
                            </Form.Item>
                        </Card>
                        <h5>Order Information</h5>
                        <Card style={{ width: 750, marginBottom: 20 }}>
                            <Form.Item
                                label="Locallity"
                            >
                                <TreeSelect
                                    treeDataSimpleMode
                                    style={{
                                        width: '100%',
                                    }}
                                    value={value}
                                    dropdownStyle={{
                                        maxHeight: 400,
                                        overflow: 'auto',
                                    }}
                                    placeholder="Please select"
                                    onChange={onChange}
                                    // loadData={onLoadData}
                                    treeData={treeData}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Product"
                            >
                                <Input suffix={<SearchOutlined />} name="productSearch" value={searchProduct} onChange={handleSearchProduct} />
                                <div className={searchResult.length > 0 ? 'd-block' : 'd-none'} style={{backgroundColor: 'white', height: 150, width: '100%', marginTop: 12, boxShadow: '0 0 2px rgba(0, 0, 0)', padding: 10}}>
                                    {searchResult.map((current, index)=>{
                                        return <p onClick={()=>{handleAddTable(current)}} style={{color: 'white' ,backgroundColor: 'gray', padding: 8, cursor: 'pointer', borderRadius: 4, margin: '0 0 8px'}} key={index}>
                                            {current.Name}
                                        </p>
                                    })}
                                </div>
                            </Form.Item>
                            <label>Product</label>
                            <Table onRow={(record, rowIndex) => {
                                // return {
                                //     onClick: (event) => {
                                //         setProduct(record)
                                //     },
                                // };
                            }} columns={columns} dataSource={data} />
                            {/* <Button
                            onClick={handleAddProduct}
                                type='primary'
                                icon={<PlusOutlined />}
                                style={{ height: '40px', fontSize: '16px', display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}
                            >
                                Add product
                            </Button> */}
                          
                            <Form.Item
                                label="Total"
                            >
                                <Input value={data.reduce((total, current)=>{
                                    return total += Number(current.cost) 
                                },0) + '.000 vnđ'} onChange={handleChangeOrderInformation} />
                            </Form.Item>
                            <Form.Item
                                label="Order VAT"
                            >
                                <Input value={vat } onChange={handleChangeVat} />
                            </Form.Item>
                            <Form.Item
                                label="Order Discount"
                            >
                                <Input value={discount} onChange={handleChangeDiscount} />
                            </Form.Item>
                            <Form.Item
                                label="Total Cost"

                            >
                           


                                <Input value={caculatorProduct() + '.000 vnđ'} />
                            </Form.Item>
                        </Card>
                        <Form.Item>
                            <Checkbox onChange={handleChangeChecked}>Delivery</Checkbox>
                        </Form.Item>
                        <Form.Item
                            label="Cost to Shipper"
                            rules={[{ required: true, message: 'Please input your Cost to Shipper!' }]}
                        >
                            <Input value={costShipper} disabled={!checkDelivery} onChange={handleChangeCostShipper}/>
                        </Form.Item>
                        <Form.Item
                            label="Total Order Value"
                        >
                            <Input value={(data.reduce((total, current)=>{
                                    return total += Number(current.cost) 
                                },0) + Number(costShipper) || 0) + '.000 vnđ'}/>
                        </Form.Item>
                        <Form.Item
                            label="Note"
                            name="note"

                        >
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item
                            label="Agent"
                            name="agent"
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
                <Modal title="Customer payment" open={isModalCheckPay}
                    onOk={handleSubmit}
                    onCancel={() => setIsModalCheckPay(false)}
                    okText="Add"
                >
                    <Form layout="vertical" onFinish={handleSubmit}>
                        <Form.Item
                            label="Payment methods"
                            name="firstName"
                            rules={[{ required: true, message: 'Auto fill [name] + ([usename])' }]}
                        >
                            <Input />
                        </Form.Item>
                        <div className='d-flex justify-content-between'>
                            <Form.Item
                                label="Customer paid"
                                name="firstName"
                                rules={[{ required: true, message: 'Auto fill [name] + ([usename])' }]}
                                style={{ width: "80%" }}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label=" ">
                                <Button type="primary">
                                    Accept
                                </Button>
                            </Form.Item>
                        </div>
                        <div style={{
                            paddingTop: '20px',
                            borderTop: "1px solid black"
                        }}>
                            <table className='w-100'>
                                <tr>
                                    <td>Total Order Value</td>
                                    <td>100.000.000</td>
                                </tr>
                                <tr>
                                    <td>Customer Paid</td>
                                    <td>100.000.000</td>
                                </tr>
                                <tr>
                                    <td>Customer Debts</td>
                                    <td>100.000.000</td>
                                </tr>
                            </table>
                        </div>
                    </Form>
                </Modal>
            </div>
            {/* <div className='mt-3'>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><i className="fa-solid fa-magnifying-glass" />
                    </button>
                    <i className="fa-solid fa-filter ml-3" style={{ fontSize: '20px' }} />
                </form>
            </div> */}
            <div className={cx('mt-3')} style={{ overflow: 'hidden' }}>
                <Tabs
                    defaultActiveKey="1"
                    items={[
                        {
                            label: `All`,
                            key: '1',
                            children: (
                                <div style={{ overflow: 'hidden' }}>
                                    <TableOrderManager loading={loading} />
                                </div>
                            ),
                        },
                        {
                            label: `New Order`,
                            key: '2',
                            children: (
                                <div style={{ overflow: 'hidden' }}>
                                    <TableOrderManager loading={loading} />
                                </div>
                            ),
                        },
                        {
                            label: `Shipping Order`,
                            key: '3',
                            children: (
                                <div style={{ overflow: 'hidden' }}>
                                    <TableOrderManager loading={loading} />
                                </div>
                            ),
                        },
                        {
                            label: `Order Completed`,
                            key: '4',
                            children: (
                                <div style={{ overflow: 'hidden' }}>
                                    <TableOrderManager loading={loading} />
                                </div>
                            ),
                        },
                        {
                            label: `Failed Order`,
                            key: '5',
                            children: (
                                <div style={{ overflow: 'hidden' }}>
                                    <TableOrderManager loading={loading} />
                                </div>
                            ),
                        },
                    ]}
                />
            </div>
        </div>
    )
}
