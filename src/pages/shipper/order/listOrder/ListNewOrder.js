import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { dispatchAllOrder, fetchAllOrder } from '../../../../redux/actions/agentAction';
import TableListNewOrder from './TableListNewOrder';
import classNames from 'classnames/bind';

import styled from '../../shipper.module.css';
let cx = classNames.bind(styled);

export default function ListNewOrder() {
    const [loading, setLoading] = useState(0);
    const { tokenShipper } = useSelector(state => state.token)
    const { AllOrder } = useSelector(state => state.agent)
    const dispatch = useDispatch()
    const shipperLogin = localStorage.getItem('shipper')



    useEffect(() => {
        if (shipperLogin) {
            return fetchAllOrder(tokenShipper).then(res => dispatch(dispatchAllOrder(res)))
        }
        return
    }, [dispatch, tokenShipper, shipperLogin, loading])
    const datas = AllOrder.map((current, index)=>{
        return {
            key: index + 1,
            orderID: current.id,
            fullName: current.customerFirstName + current.customerLastName,
            phoneNumber: current.phoneNumber,
            locality: current.locallity,
            description: current.description,
            deliveryReceived: current.deliveryReceived,
            address: current.address,
            dateCreated: current.createdAt,
            status: current.status,
        }
    })
   
    return (
        <div
            className={cx('list_content')}>
            <div className="border-bottom border-primary">
                <h2>List New Order</h2>
            </div>
            <div className='mt-5'>
                <TableListNewOrder datas={datas}/>
            </div>
           

        </div>
    )
}
