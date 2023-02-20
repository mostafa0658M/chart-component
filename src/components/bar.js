import React from 'react';

export default function Bar({ data, max }) {
  const height = (data.amount * 100) / max;
  const today = new Date().toString().toLowerCase().split(' ')[0];
  return (
    <div className="barinfo">
      <div
        className={today == data.day ? ' today-bar bar' : 'bar'}
        style={{ '--h': height + '%' }}
        amount={data.amount.toString() + '$'}
      ></div>
      <span className="bar-day">{data.day}</span>
    </div>
  );
}
