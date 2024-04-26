import { useEffect } from 'react';
import { useState } from 'react';

export const Counter = ({ initialCount = 0 }) => {
  const { count, setCount } = useState(initialCount);

  const onIncrement = () => {
    setCount(prev => prev + 1);
  };

  const onDecrement = () => {
    setCount(prev => prev - 1);
  };

  //Wykona się w momencie pierwszego ładowania
  useEffect(() => {
    console.log('1. Wywołam się kiedy komponent ładuje się poraz pierwszy.');
  }, []);

  //Wykona się w momencie, w którym któryś z parametrów w tablicy dependencji ulegnie aktualizacji
  useEffect(count => {
    console.log("2. Wywołam się kiedy stan 'count' zostanie zaktualizowany.");
  }, []);

  //Wykona się przy każdej interakcji w komponencie
  useEffect(() => {
    console.log('3. Wywołam się zawsze.');
  });

  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <h1>{count}</h1>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

//////

export const Counter2 = ({ initialValue = 0, step = 1 }) => {
  const { count, setCount } = useState(initialValue);

  const onIncrementClick = () => {
    setCount(prevValue => prevValue + step);
  };

  const onDecrementClick = () => {
    setCount(prevValue => prevValue - step);
  };

  return (
    <div>
      <button onClick={onIncrementClick}>Increment by {step}</button>
      <h1>{count}</h1>
      <button onClick={onDecrementClick}>Decrement by {step}</button>
    </div>
  );
};
