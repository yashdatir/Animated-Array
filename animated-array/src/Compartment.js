import React, { useEffect, useState } from 'react';
import './App.css';
const init = { data: '', display: false };
export default function Compartment({ data, index, add, remove, added }) {
  const [temp, setTemp] = useState({
    data: '',
    display: false,
    index: 0,
    del: false,
  });
  useEffect(() => {
    setTemp({
      ...init,
      index: index,
    });
  }, [index]);
  return (
    <div className={temp.del ? 'discard' : added ? 'new' : 'old'}>
      <span className="add">
        <button onClick={() => setTemp({ data: '', display: !temp.display })}>
          +
        </button>
        <input
          style={temp.display ? { display: 'block' } : { display: 'none' }}
          value={temp.data}
          onChange={(e) => setTemp({ ...temp, data: e.target.value })}
          onBlur={() => {
            setTemp({ index: index + 1, display: !temp.display });
            add(temp.data, index);
          }}
        />
        <h3
          style={
            temp.display
              ? {
                  display: 'block',
                  fontSize: '10px',
                }
              : { display: 'none' }
          }
        >
          * Press tab to add
        </h3>
      </span>
      <span>{index}&nbsp;&nbsp;&nbsp;</span>
      <span>{data}</span>
      <span className="remove">
        <button
          onClick={() => {
            setTemp({ ...temp, del: true });
            setTimeout(() => remove(index), 1000);
          }}
        >
          -
        </button>
      </span>
    </div>
  );
}
