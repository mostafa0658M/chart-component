import React from 'react';
import { MyBalance, ChartWrapper } from './components';
import barsdata from './data.json';
import './style.css';

export default function App() {
  const wrapperdata = {
    title: 'Spending - Last 7 days',
    bars: barsdata,
    balance: 478.33,
    lastmonth: 2.4,
  };
  return (
    <div className="main">
      <div className="center-area">
        <MyBalance balance={921.48} />
        <ChartWrapper {...wrapperdata} />
      </div>
    </div>
  );
}
