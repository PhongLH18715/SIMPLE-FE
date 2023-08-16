import React from 'react';
import { Button, Layout, Modal, Space, Table, Input } from 'antd';

const ModalInventory = ({isModalOpen, handleOk, handleCancel, dataSim, handleChange}) => {
    
    return (
        <>
             <Modal title="Import Inventory" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Product Name</label>
                            <input type="text" defaultValue={dataSim.serial} name="serial" className="form-control" id="exampleInputEmail1" onChange={handleChange} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword2">Amount</label>
                            <input type="text" defaultValue={dataSim.number} name="number" className="form-control" id="exampleInputPasswor2" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword3">Import cost</label>
                            <input type="text" defaultValue={dataSim.price} name="price" className="form-control" id="exampleInputPassword3" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword4">Cost</label>
                            <input type="text" defaultValue={dataSim.discount} name="discount" className="form-control" id="exampleInputPassword4" onChange={handleChange} />
                        </div>
                    </form>
                </Modal>
        </>
    );
}

export default ModalInventory;
