import React from 'react';
import Bar from './bar';

export default function BarChart({ data }) {
  const max = Math.max(...data.map((b) => b.amount)) + 30;
  return (
    <div className="barchart">
      {data.map((bar) => (
        <Bar data={bar} max={max} />
      ))}
    </div>
  );
}
