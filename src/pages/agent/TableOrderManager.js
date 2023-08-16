import { Button, Card, Checkbox, Form, Input, Modal, Space, Table, TreeSelect } from 'antd';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import style from './agent.module.css'
import { format } from 'date-fns';
import { dispatchAllOrder, fetchAllOrder } from '../../redux/actions/agentAction';
import TextArea from 'antd/lib/input/TextArea';
const { Column } = Table;
const TableOrderManager = ({ loading }) => {
    const { tokenAgent } = useSelector(state => state.token)
    const { AllOrder } = useSelector(state => state.agent)
    const dispatch = useDispatch()
    const agentLogin = localStorage.getItem('agent')
    useEffect(() => {
        if (agentLogin) {
            return fetchAllOrder(tokenAgent).then(res => dispatch(dispatchAllOrder(res)))
        }
        return
    }, [dispatch, tokenAgent, agentLogin, loading])




    const datas = AllOrder.map((current, index) => {
        return {
            key: index + 1,
            orderID: index + 1,
            fullName: current.customerFirstName + " " + current.customerLastName,
            phoneNumber: current.phoneNumber,
            locality: current.locallity,
            description: current.description,
            customerFirstName: current.customerFirstName,
            customerLastName: current.customerLastName,
            // products: current.products[0].product.brand,
            deliveryReceived: current.deliveryReceived ? "Có ship" : "Không ship",
            // costToShiper: '200$',
            total: current.total == 0 ? 0 : current.total + ".000 vnd",
            address: current.address,
            dateCreated: TimeComponent(current.createdAt),
            status: current.status,
        }
    })

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const searchInput = useRef(null);
    const [isModalCheckPay, setIsModalCheckPay] = useState(false);
    const [dataAdd, setDataAdd] = useState({
        customerFirstName: '',
        customerLastName: '',
        address: '',
        phoneNumber: '',

    })
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
    const [data, setData] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [searchProduct, setSearchProduct] = useState('');

    const handleSearchProduct = (e) => {
        setSearchProduct(e.target.value)
    }
    const handleAddTable = (table) => {
        setData((data) => {
            return [...data, table]
        })

        setSearchProduct('')
    }
    useEffect(() => {
        const newListSearch = dataSearch.filter(current => current.Name.toLowerCase() === searchProduct.toLowerCase())
        setSearchResult(newListSearch)
    }, [searchProduct])

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const columnUpdate = [
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
    const columns = [
        {
            title: 'Order ID',
            width: 140,
            dataIndex: 'orderID',
            key: 'orderID',
            fixed: 'left',
        },
        {
            title: 'Customer fullname',
            width: 200,
            dataIndex: 'fullName',
            key: 'fullName',
            fixed: 'left',
            ...getColumnSearchProps('fullName'),
        },
        {
            title: 'Phone number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            width: 180,
            ...getColumnSearchProps('phoneNumber'),
        },
        // {
        //     title: 'Description',
        //     dataIndex: 'description',
        //     key: 'description',
        //     width: 200,
        // },
        {
            title: 'Locality',
            dataIndex: 'locality',
            key: 'locality',
            width: 100,
        },
        {
            title: 'Products',
            dataIndex: 'products',
            key: 'products',
            width: 100,
        },
        {
            title: 'DeliveryReceived',
            dataIndex: 'deliveryReceived',
            key: 'deliveryReceived',
            width: 160,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            width: 120,
            filters: [
                {
                    text: 'Hà Nội',
                    value: 'hanoi',
                },
                {
                    text: 'Đà Nẵng',
                    value: 'danang',
                },
            ],
            onFilter: (value, record) => record.status.includes(value),
        },
        {
            title: 'Total Value',
            dataIndex: 'total',
            key: 'total',
            width: 140,
        },
        {
            title: 'Agent',
            dataIndex: 'agent',
            key: 'agent',
            width: 100,
        },
        {
            title: 'Date Created',
            dataIndex: 'dateCreated',
            key: 'dateCreated',
            width: 150,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 100,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 200,
            render: (record, index) => {
                console.log(record)
                return <Space size="middle">
                    {
                        record.status === "NEW" ?
                            <>
                                <Button >
                                    <i class="fa-solid fa-eye"></i>
                                </Button>
                                <Button onClick={() => { handleClickOpenUpdate(record) }}>
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </Button>
                                <Button >
                                    <i className="fa-solid fa-trash"></i>
                                </Button>
                            </>
                            : ''
                    }
                    <Button >
                        <i class="fa-solid fa-eye"></i>
                    </Button>
                </Space>
            }
        }

    ];
    const handleClickOpenUpdate = (order) => {
        setDataAdd({ ...dataAdd, customerFirstName: order.customerFirstName, customerLastName: order.customerLastName, address: order.address, phoneNumber: order.phoneNumber })
        setIsModalOpen(true)
    }

    console.log(dataAdd)
    function TimeComponent(timestamp) {
        const timestampInt = parseInt(timestamp);

        const dateObj = new Date(timestampInt);

        const formattedDate = format(dateObj, 'dd/MM/yyyy HH:mm:ss');

        return formattedDate;
    }

    const handleChangeUpdate = (e) => {
        const { name, value } = e.target
        setDataAdd({ ...dataAdd, [name]: value })
    }
    const [value, setValue] = useState();
    const onChange = (newValue) => {
        console.log(newValue);
        setValue(newValue);
    };
    const [orderInformation, setOrderInformation] = useState({
        locality: '',
        total: '',
        orderVAT: '',
        orderDiscount: '',
        totalCost: ''
    });
    const handleChangeOrderInformation = (e) => {
        const { name, value } = e.target
        setOrderInformation({ ...orderInformation, [name]: value })
    }
    const [vat, setVat] = useState()
    const [discount, setDiscount] = useState()
    const handleChangeVat = (e) => {
        setVat(e.target.value)
    }
    const handleChangeDiscount = (e) => {
        setDiscount(e.target.value)
    }
    const caculatorProduct = () => {
        const total = data.reduce((total, current) => {
            return total += Number(current.cost)
        }, 0)
        const totalVat = (total + (total * (vat / 100))) || 0

        const totalProduct = (totalVat - (totalVat * (discount / 100))) || 0
        return Math.ceil(totalProduct)
    }
    const [checkDelivery, setCheckDelivery] = useState(false)
    const handleChangeChecked = (e) => {
        setCheckDelivery(e.target.checked)
    }
    const [costShipper, setCostShipper] = useState(0)
    const handleChangeCostShipper = (e) => {
        setCostShipper(e.target.value)
    }
    return (
        <>
            <Table style={{ width: "100%" }}
                columns={columns}
                dataSource={datas}
                scroll={{
                    x: 1500,
                    y: 300,
                }}
            />

            <h4>Total: {datas.length}</h4>
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
                                <Input name="customerFirstName" defaultValue={dataAdd.customerFirstName} onChange={handleChangeUpdate} />
                            </Form.Item>
                            <Form.Item
                                label="Last Name"
                                name="customerLastName"
                                rules={[{ required: true, message: 'Please input your customerLastName!' }]}
                                style={{ width: '40%' }}
                            >
                                <Input name="customerLastName" defaultValue={dataAdd.customerLastName} onChange={handleChangeUpdate} />
                            </Form.Item>
                        </div>
                        <Form.Item
                            label="Phone Number"
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Please input your phoneNumber!' }]}
                        >
                            <Input name="phoneNumber" defaultValue={dataAdd.phoneNumber} onChange={handleChangeUpdate} />
                        </Form.Item>

                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{ required: true, message: 'Please input your address!' }]}
                        >
                            <Input name="address" defaultValue={dataAdd.address} onChange={handleChangeUpdate} />
                        </Form.Item>

                        <Form.Item
                            label="Locallity"
                            name="locallity"
                            rules={[{ required: true, message: 'Please input your locallity!' }]}
                        >
                            <Input name="locallity" defaultValue={dataAdd.locallity} onChange={handleChangeUpdate} />
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
                            <div className={searchResult.length > 0 ? 'd-block' : 'd-none'} style={{ backgroundColor: 'white', height: 150, width: '100%', marginTop: 12, boxShadow: '0 0 2px rgba(0, 0, 0)', padding: 10 }}>
                                {searchResult.map((current, index) => {
                                    return <p onClick={() => { handleAddTable(current) }} style={{ color: 'white', backgroundColor: 'gray', padding: 8, cursor: 'pointer', borderRadius: 4, margin: '0 0 8px' }} key={index}>
                                        {current.Name}
                                    </p>
                                })}
                            </div>
                        </Form.Item>
                        <label>Product</label>
                        <Table onRow={(record, rowIndex) => {
                        }} columns={columnUpdate} dataSource={data} />
                        <Form.Item
                            label="Total"
                        >
                            <Input value={data.reduce((total, current) => {
                                return total += Number(current.cost)
                            }, 0) + '.000 vnđ'} onChange={handleChangeOrderInformation} />
                        </Form.Item>
                        <Form.Item
                            label="Order VAT"
                        >
                            <Input value={vat} onChange={handleChangeVat} />
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
                        <Input value={costShipper} disabled={!checkDelivery} onChange={handleChangeCostShipper} />
                    </Form.Item>
                    <Form.Item
                        label="Total Order Value"
                    >
                        <Input value={(data.reduce((total, current) => {
                            return total += Number(current.cost)
                        }, 0) + Number(costShipper) || 0) + '.000 vnđ'} />
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
        </>

    )
}
export default TableOrderManager;