import React, { useEffect } from 'react';
import Chart from '../../../config/chartConfig';
import { DatePicker } from 'antd';
import SvgShipping from '../assets/Shipping.jpg.svg'
import SvgMoney from '../assets/money.svg'
import SvgNewOrder from '../assets/New+Order.svg'
import SvgCompleted from '../assets/Completed.jpg.svg'
import classNames from 'classnames/bind';

import styled from '../shipper.module.css';
import { Link } from 'react-router-dom';

let cx = classNames.bind(styled);

export default function HomePage() {
    useEffect(() => {
        const ctx1 = document.getElementById('myChart1').getContext('2d');
        const ctx2 = document.getElementById('myChart2').getContext('2d');
        const myChart1 = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: [
                    "Africa",
                    "Asia",
                    "Europe",
                    "Latin America",
                    "North America"
                ],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: [
                            "#3e95cd",
                            "#8e5ea2",
                            "#3cba9f",
                            "#e8c3b9",
                            "#c45850"
                        ],
                        data: [2478, 5267, 734, 784, 433]
                    }
                ]
            },
        });
        const myChart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: [
                    "Africa",
                    "Asia",
                    "Europe",
                    "Latin America",
                    "North America"
                ],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: [
                            "#3e95cd",
                            "#8e5ea2",
                            "#3cba9f",
                            "#e8c3b9",
                            "#c45850"
                        ],
                        data: [2478, 5267, 734, 784, 433]
                    }
                ]
            },
        });
    }, []);
    return (
        <div className={cx('shipper_dashboard', 'pb-5')}>
            <div className='border-bottom border-primary'>
                <h2>Home Page</h2>
            </div>
            <div className={cx('dashboard_content')}>
                <div className={cx('dashboard_content_left')}>
                    <DatePicker.RangePicker
                        status="warning"
                        style={{
                            width: '40%',
                        }}
                    />
                    <div className={cx('pt-4')}>
                    <Link to='/shipper/new-order' className={cx('dashboard_content_left_item')}>
                        <div className=''>
                            <p>New Order</p>
                            <p>7</p>
                        </div>
                        <div>
                            <img style={{ height: 50, width: 50 }} src={SvgNewOrder} alt="SVG image" />
                        </div>
                    </Link>
                    <Link to='/shipper/shipping-order' className={cx('dashboard_content_left_item', 'mt-5')}>
                        <div className=''>
                            <p>Shipping Order</p>
                            <p>7</p>
                        </div>
                        <div>
                            <img style={{ height: 50, width: 50 }} src={SvgShipping} alt="SVG image" />
                        </div>
                    </Link>
                    <Link to='/shipper/total-money-earned' className={cx('dashboard_content_left_item', 'mt-5')}>
                        <div className=''>
                            <p>Total money earned</p>
                            <p>7</p>
                        </div>
                        <div>
                            <img style={{ height: 50, width: 50 }} src={SvgMoney} alt="SVG image" />
                        </div>
                    </Link>
                    <Link to='/shipper/complete-order' className={cx('dashboard_content_left_item', 'mt-5')}>
                        <div className=''>
                            <p>Complete Order</p>
                            <p>7</p>
                        </div>
                        <div>
                            <img style={{ height: 50, width: 50 }} src={SvgCompleted} alt="SVG image" />
                        </div>
                    </Link>
                    </div>
                </div>
                <div className={cx('dashboard_content_right')}>
                    <div>
                        <canvas id="myChart1" width="200" height="180"></canvas>
                    </div>
                    <div className='mt-4'>
                        <canvas id="myChart2" width="200" height="180"></canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}
