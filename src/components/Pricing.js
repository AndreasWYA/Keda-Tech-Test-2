import React from 'react';
import '../styles/Pricing.scss';
import Payments from '../assets/svg/undraw_online_payments_re_y8f2.svg'

const Pricing = () => {
  return (
    <div>
        <div className="pricing">
            <div className='pricing-container'>
                <h2>Pricing</h2>
                <div className="tier">
                    <h3>TIER 1/Basic</h3>
                    <ul>
                    <li>Mencatat barang masuk</li>
                    <li>Mencatat barang keluar</li>
                    <li>Mencatat hasil keuntungan</li>
                    </ul>
                </div>
                <div className="tier">
                    <h3>TIER 2/Business</h3>
                    <ul>
                    <li>Mencatat barang masuk dan keluar</li>
                    <li>Mencatat Keuntungan</li>
                    <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                    <li>Support 7x24 Jam</li>
                    </ul>
                </div>
                <div className="tier">
                    <h3>TIER 3/Entrepreneur</h3>
                    <ul>
                    <li>Mencatat barang masuk dan keluar</li>
                    <li>Mencatat Keuntungan</li>
                    <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                    <li>Support 7x24 Jam</li>
                    <li>Export data ke Excel</li>
                    <li>AI Prediksi penghasilan</li>
                    </ul>
                </div>
            </div>
            <div className='pricing-illustration'>
                    <img src={Payments} alt='payments'/>
                </div>
        </div>
    </div>
  );
};

export default Pricing;