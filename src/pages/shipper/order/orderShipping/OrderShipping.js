import React from 'react'
import classNames from 'classnames/bind';

import styled from '../../shipper.module.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
let cx = classNames.bind(styled);

export default function OrderShipping() {
    return (
        <div className={cx("order_shipping_content")}>
            <h2>Order Shipping</h2>
            <div className={cx("order_shipping_item")}>
                <div className={cx("order_shipping_item_left")}>
                    <p>Title: <span>Nươc mắm đóng chai</span></p>
                    <p>Product: : <span>2</span></p>
                    <p>Price: <span>900.000 vnđ</span></p>
                    <p>Address: <span>12 Phạm Minh Khai, Thanh Xuân, Hà Nội</span></p>
                </div>
                <div className={cx("order_shipping_item_right")}>
                    <div className={cx("order_shipping_item_right_status")}>
                        <p>Status: </p>
                        <p>Delivering</p>
                    </div>
                    <div className={cx("order_shipping_item_right_button")}>
                        <Button type='danger'>Fail</Button>
                        <Button type='primary'>Complete</Button>
                        <Button type='primary'><Link to='/shipper/orderShipping/detail/63860e07c35e4404bca8f8a6'>View</Link></Button>
                    </div>
                </div>
            </div>
            <div className={cx("order_shipping_item")}>
                <div className={cx("order_shipping_item_left")}>
                    <p>Title: <span>Nươc mắm đóng chai</span></p>
                    <p>Product: : <span>3</span></p>
                    <p>Price: <span>900.000 vnđ</span></p>
                    <p>Address: <span>12 Phạm Minh Khai, Thanh Xuân, Hà Nội</span></p>
                </div>
                <div className={cx("order_shipping_item_right")}>
                    <div className={cx("order_shipping_item_right_status")}>
                        <p>Status: </p>
                        <p>Delivering</p>
                    </div>
                    <div className={cx("order_shipping_item_right_button")}>
                        <Button type='danger'>Fail</Button>
                        <Button type='primary'>Complete</Button>
                        <Button type='primary'><Link to='/shipper/orderShipping/detail/63860e07c35e4404bca8f8a6'>View</Link></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
