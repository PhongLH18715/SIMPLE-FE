import React from 'react';
import { Button, Layout, Modal, Space, Table, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import TextArea from 'antd/lib/input/TextArea';

const ModalInventory = ({handleChangeUpdate, dataSimUpdate, showModalInventory, submitInventory, handleCancelInventory}) => {
    return (
        <>
            <Modal okText="Import" title="Import Inventory" open={showModalInventory} onOk={submitInventory} onCancel={handleCancelInventory}>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Product Name</label>
                        <input type="text" defaultValue={dataSimUpdate.simSeries} name="serial" className="form-control" id="exampleInputEmail1" onChange={handleChangeUpdate} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Amount</label>
                        <input type="text" defaultValue={dataSimUpdate.numberOfSim} name="numberOfSim" className="form-control" id="exampleInputPasswor2" onChange={handleChangeUpdate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword3">Import cost</label>
                        <input type="text" defaultValue={dataSimUpdate.unitPrice} name="price" className="form-control" id="exampleInputPassword3" onChange={handleChangeUpdate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword4">Cost</label>
                        <input type="text" defaultValue={dataSimUpdate.discount} name="discount" className="form-control" id="exampleInputPassword4" onChange={handleChangeUpdate} />
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default ModalInventory;
