import React from 'react';
import BarChart from './barchart';

export default function ChartWrapper({ title, bars, balance, lastmonth }) {
  return (
    <div className="chartwrapper">
      <p className="chart-title">{title}</p>
      <BarChart data={bars} />
      <hr />
      <div className="statics">
        <div className="thismonth">
          <p className="month-title">Total this month</p>
          <span className="thismonth-balance">${balance}</span>
        </div>
        <div className="lastmonth">
          <span className="lastmonth-balance">+{lastmonth}%</span>
          <p className="month-title">from last month</p>
        </div>
      </div>
    </div>
  );
}
