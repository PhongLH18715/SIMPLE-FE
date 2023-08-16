import React from 'react';
import { Button, Layout, Modal, Space, Table, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import TextArea from 'antd/lib/input/TextArea';

const ModalProduct = ({handleChange, dataSim, isModalOpen, handleOk, handleCancel}) => {
    return (
        <>
             <Modal title="Add new product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" defaultValue={dataSim.serial} name="serial" className="form-control" id="exampleInputEmail1" onChange={handleChange} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword2">SKU</label>
                            <input type="text" defaultValue={dataSim.number} name="number" className="form-control" id="exampleInputPasswor2" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword3">Barcode</label>
                            <input type="text" defaultValue={dataSim.price} name="price" className="form-control" id="exampleInputPassword3" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword4">Discount</label>
                            <input type="text" defaultValue={dataSim.discount} name="discount" className="form-control" id="exampleInputPassword4" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword5">VAT(%)</label>
                            <input type="text" className="form-control" defaultValue={dataSim.vat} name="vat" id="exampleInputPassword5" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword5">Retail price*</label>
                            <input type="text" defaultValue={dataSim.brand} name="brand" className="form-control" id="exampleInputPassword5" onChange={handleChange} />
                        </div>
                    </form>
                </Modal>
        </>
    );
}

export default ModalProduct;
