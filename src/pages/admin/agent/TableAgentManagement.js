import { Space, Table, Button, Modal, Input } from 'antd';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';


const { TextArea } = Input;

const TableAgentManagement = ({AllAgent}) => {
    let datasss =  AllAgent.map((current) =>{
        return {
            title: current.fullName,
            value: current.fullName
        }
      })
      console.log(datasss)
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

const datas = AllAgent.map((current)=>{
    return {
        agentID: current.id,
        userName: current.username,
        password: "******",
        fullName: current.fullName,
        phoneNumber: current.phoneNumber,
        email: current.email,
    }
})
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const columns = [
        {
          title: 'Agent ID',
          dataIndex: 'agentID',
          key: 'agentID',
          width: '12%',
        // ...getColumnSearchProps('name'),
        },
        {
          title: 'User Name',
          dataIndex: 'userName',
          key: 'userName',
          width: '10%',
          ...getColumnSearchProps('userName'),
        },
        {
          title: 'Password',
          dataIndex: 'password',
          key: 'password',
          width: '12%',
          //...getColumnSearchProps('address'),
          sorter: (a, b) => a.address.length - b.address.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Full Name',
          dataIndex: 'fullName',
          key: 'fullName',
          width: '16%',
          filters: AllAgent.map((current) =>{
            return {
                text: current.fullName,
                value: current.fullName
            }
          }),
          onFilter: (value, record) => record?.fullName?.indexOf(value) === 0,
         // sorter: (a, b) => a.address.length - b.address.length,
          //sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Phone number',
          dataIndex: 'phoneNumber',
          key: 'phoneNumber',
          //...getColumnSearchProps('address'),
          sorter: (a, b) => a.address.length - b.address.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          //...getColumnSearchProps('address'),
          sorter: (a, b) => a.address.length - b.address.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
          render: (_) => (
            <Space size="middle">
                <Button onClick={showModal}><i className="fa-solid fa-lock-open"></i></Button>
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
                <Button><i className="fa-solid fa-eye text-primary"></i></Button>
            </Space>
        )
        },
      ];
    return <Table columns={columns} dataSource={datas} >
        {/* <Column title="Agent ID" dataIndex="agentID" key="agentID" />
        <Column title="User Name" dataIndex="userName" key="userName" />
        <Column title="Password" dataIndex="password" key="password" />
        <Column title="Full Name" dataIndex="fullName" key="fullName" />
        <Column title="Phone number" dataIndex="phoneNumber" key="phoneNumber" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column
            title="Action"
            key="action"
            render={(_) => (
                <Space size="middle">
                    <Button onClick={showModal}><i class="fa-solid fa-lock"></i></Button>
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
                    <i class="fa-solid fa-eye text-primary"></i>
                </Space>
            )}
        /> */}
    </Table>
};

export default TableAgentManagement;