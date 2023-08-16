import React, { useEffect, useState, useRef } from 'react';
import { Button, Layout, Modal, Space, Table, Input } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import TextArea from 'antd/lib/input/TextArea';


const TableProduct = ({dataFake}) => {
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
            title: 'ID',
            width: 120,
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Name',
            width: 200,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Average import price',
            dataIndex: 'averageImportPrice',
            key: 'averageImportPrice',
            width: 200,
            ...getColumnSearchProps('averageImportPrice'),
        },
        {
            title: 'Retail price',
            dataIndex: 'retailPrice',
            key: 'retailPrice',
            width: 140,
        },
        {
            title: 'SKU',
            dataIndex: 'sku',
            key: 'sku',
            width: 100,
        },
        {
            title: 'Barcode',
            dataIndex: 'barCode',
            key: 'barCode',
            width: 180,
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
            width: 160,
        },
        {
            title: 'VAT (%)',
            dataIndex: 'vat',
            key: 'vat',
            width: 120,
            // filters: [
            //     {
            //       text: 'Hà Nội',
            //       value: 'hanoi',
            //     },
            //     {
            //       text: 'Đà Nẵng',
            //       value: 'danang',
            //     },
            //   ],
            //   onFilter: (value, record) => record.status.includes(value),
        },
        {
            title: 'Amount of inventory',
            dataIndex: 'amountOfInventory',
            key: 'amountOfInventory',
            width: 200,
        },
        {
            title: 'Date created',
            dataIndex: 'dateCreate',
            key: 'dateCreate',
            width: 180,
        },
        {
            title: 'Creator',
            dataIndex: 'creator',
            key: 'creator',
            width: 150,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 200,
            render: (record, index) => {
                return <Space size="middle">
                    <Button >
                    <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Modal title="Are you sure about Lock Agent? Enter the reason"
                    >
                        <h6>Reason</h6>
                        <TextArea rows={4} />
                    </Modal>
                    <Button >
                    <i class="fa-solid fa-eye"></i>
                    </Button>
                    <Button >
                    <i className="fa-solid fa-trash"></i>
                    </Button>
                </Space>
            }
        }

    ];
    return (
        <>
            <Table style={{ width: "100%" }}
                columns={columns}
                dataSource={dataFake}
                scroll={{
                    x: 1500,
                    y: 300,
                }}
            />

            <h4>Total: {dataFake.length}</h4>
        </>
    );
}

export default TableProduct;
