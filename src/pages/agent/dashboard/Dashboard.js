import { DatePicker } from 'antd';
import { useState } from 'react';
import classNames from 'classnames/bind';
import SvgBestseller from '../assets/Bestseller.jpg.svg'
import SvgCompleted from '../assets/Completed.jpg.svg'
import SvgFail from '../assets/Fail.jpg.svg'
import SvgShipper from '../assets/Shipper.jpg.svg'
import SvgShipping from '../assets/Shipping.jpg.svg'
import SvgNewOrder from '../assets/New+Order.svg'
import SvgBestSeller from '../assets/Bestseller.jpg.svg'
import styled from '../agent.module.css'
import { Link } from 'react-router-dom';
import BestSeller from './BestSeller';
import BestShipper from './BestShipper';

let cx = classNames.bind(styled);

export default function Dashboard() {

    return (
        <div
            className={cx('site-layout-background')}
            style={{
                paddingTop: 24,
                // minHeight: 360,
                flex: 1,
            }}
        >
            <div className={cx('content_dashboard')}>
                <h2 style={{ paddingLeft: 20 }}>Dashboard</h2>
                <div className={cx('border-bottom', 'border-primary')}>
                </div>
                <div className={cx('dashBoard_time')}>
                    <DatePicker.RangePicker
                        status="warning"
                        style={{
                            width: '20%',
                        }}
                    />
                </div>
                <div className={cx('table_dashBoard')} style={{ width: '100%', margin: 0 }}>
                    <Link to='/agent/order' className={cx('gen_dasBoard_item')}>
                        <div className=''>
                            <p>New Order</p>
                            <p>7</p>
                        </div>
                        <div>
                            <img style={{ height: 50, width: 50 }} src={SvgNewOrder} alt="SVG image" />
                        </div>
                    </Link>
                    <Link to='/agent/shipping-order' className={cx('gen_dasBoard_item')}>
                        <div className=''>
                            <p>Shipping Order</p>
                            <p>7</p>
                        </div>
                        <div>
                            <img style={{ height: 50, width: 50 }} src={SvgShipping} alt="SVG image" />
                        </div>
                    </Link>
                    <Link to='/agent/completed-order' className={cx('gen_dasBoard_item')}>
                        <div className=''>
                            <p>Completed Order</p>
                            <p>7</p>
                        </div>
                        <div>
                            <img style={{ height: 50, width: 50 }} src={SvgCompleted} alt="SVG image" />
                        </div>
                    </Link>
                    <Link to='/agent/fail-order' className={cx('gen_dasBoard_item')}>
                        <div className=''>
                            <p>Fail Order</p>
                            <p>7</p>
                        </div>
                        <div>
                            <img style={{ height: 50, width: 50 }} src={SvgFail} alt="SVG image" />
                        </div>
                    </Link>
                    <Link to='/agent/active-shipper' className={cx('gen_dasBoard_item')}>
                        <div className=''>
                            <p>Active Shipper</p>
                            <p>7</p>
                        </div>
                        <div>
                            <img style={{ height: 50, width: 50 }} src={SvgShipper} alt="SVG image" />
                        </div>
                    </Link>
                    
                </div>
                <div className={cx('table_sale')}>
                    <div className={cx('table_bestSeller')}>
                        <div style={{ display: 'flex',alignItems: 'center' , justifyContent: 'space-between' }}>
                            <h4>Best seller</h4>
                            <img style={{ height: 50, width: 50 }} src={SvgBestSeller} alt="SVG image" />
                        </div>
                        <div style={{ paddingTop: 20 }}>
                            <BestSeller />
                        </div>
                    </div>
                    <div className={cx('table_bestShipper')}>
                        <div style={{ display: 'flex',alignItems: 'center',  justifyContent: 'space-between' }}>
                            <h4>Best shipper</h4>
                            <img style={{ height: 50, width: 50 }} src={SvgShipper} alt="SVG image" />
                        </div>
                        <div style={{ paddingTop: 20 }}>
                            <BestShipper />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
