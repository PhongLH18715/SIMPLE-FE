import React, { useState, useRef } from 'react';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Layout, Modal, Space, Table, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import TextArea from 'antd/lib/input/TextArea';

const InventoryTable = ({ data, setIsModalOpen }) => {

    const dataFake = [
        {
            id: '1',
            cost: 200,
            importTime: '20/12/2022',
            dateCreate: '20/12/2022',
            creator: 'le hong phong'
        },
        {
            id: '2',
            cost: 200,
            importTime: '20/12/2022',
            dateCreate: '20/12/2022',
            creator: 'le hong phong'
        },
        {
            id: '3',
            cost: 200,
            importTime: '20/12/2022',
            dateCreate: '20/12/2022',
            creator: 'le hong phong'
        }
    ]

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
            width: 50,
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Cost',
            width: 80,
            dataIndex: 'cost',
            key: 'cost',
            fixed: 'left',
            ...getColumnSearchProps('fullName'),
        },
        {
            title: 'Import time',
            dataIndex: 'importTime',
            key: 'importTime',
            width: 120,
            ...getColumnSearchProps('phoneNumber'),
        },
        {
            title: 'Date created',
            dataIndex: 'dateCreate',
            key: 'dateCreate',
            width: 120,
        },
        {
            title: 'Creator',
            dataIndex: 'creator',
            key: 'creator',
            width: 120,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 30,
            render: (record, index) => {
                return <Space size="middle">
                    <Button >
                        <i class="fa-solid fa-eye"></i>
                    </Button>
                </Space>
            }
        }

    ];
    return (
        <div>
            <Table style={{ width: "100%" }}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => {setIsModalOpen(true) }, // click row
                        onDoubleClick: (event) => { }, // double click row
                        onContextMenu: (event) => { }, // right button click row
                        onMouseEnter: (event) => { }, // mouse enter row
                        onMouseLeave: (event) => { }, // mouse leave row
                    };
                }}
                    columns = { columns }
                    dataSource = { dataFake }
                    scroll = {{
                        x: 1500,
                            y: 300,
                    }}
                />

            <h4 className='mt-3'>Total: {dataFake.length}</h4>
        </div>
    );
}

export default InventoryTable;
