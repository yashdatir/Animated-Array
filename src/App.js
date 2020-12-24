import { useState, useCallback } from 'react';
import Compartment from './Compartment';
import Adder from './Adder';
import './App.css';

function App() {
  const [array, setArray] = useState([]);
  const [added, setAdded] = useState(-1);
  const remove = useCallback(
    (index) => {
      const a = array;
      setArray([...a.slice(0, index), ...a.slice(index + 1, array.length)]);
    },
    [array]
  );
  const add = useCallback(
    (data, index) => {
      const a = array;
      setAdded(index);
      return data && data !== null && data !== ''
        ? setArray([
            ...a.slice(0, index + 1),
            data,
            ...a.slice(index + 1, array.length),
          ])
        : null;
    },
    [array]
  );
  return (
    <div className="root">
      {array.length <= 0 ? (
        <Adder showIndex={array.length > 0} add={add} />
      ) : (
        array.map((data, index) => (
          <Compartment
            key={index}
            data={data}
            index={index}
            array={array}
            setArray={setArray}
            add={add}
            remove={remove}
            added={index === added + 1}
          />
        ))
      )}
    </div>
  );
}

export default App;
