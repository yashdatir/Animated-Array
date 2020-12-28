import React, { useState } from 'react';

export default function Adder({ add, showIndex }) {
  const [data, setData] = useState({ data: '', index: 0 });
  return (
    <div>
      <input
        style={showIndex ? { display: 'block' } : { display: 'none' }}
        placeholder="Index"
        onChange={(e) => setData({ ...data, index: e.target.value })}
      />
      <input
        placeholder="Enter Data"
        onChange={(e) => setData({ ...data, data: e.target.value })}
      />
      <button onClick={() => add(data.data, data.index)}>
        Add a data to array
      </button>
    </div>
  );
}
