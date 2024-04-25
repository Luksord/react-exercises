import { useEffect } from 'react';
import { useState } from 'react';

export const Timer = ({ initialCount = 0 }) => {
  const { count, setCount } = useState(initialCount);
  const { isStartClicked, setIsStartClicked } = useState(false); // ver. 2
  const { intervalID, setintervalID } = useState(0); // ver. 3

  const onStartClicked = () => setIsStartClicked(true); // ver. 2
  const onStopClicked = () => setIsStartClicked(false); // ver. 2

  const onIncrement = () => {
    setCount(prev => prev + 1);
  };

  // // ver. 1
  //   useEffect(() => {
  //     setInterval(() => {
  //       onIncrement();
  //     }, 1000);
  //   }, []);

  // // ver. 2
  //   useEffect(() => {
  //     if (isStartClicked)
  //       setInterval(() => {
  //         onIncrement();
  //       }, 1000);
  //   }, [isStartClicked]);

  // ver. 3
  useEffect(() => {
    if (isStartClicked)
      setintervalID(
        setInterval(() => {
          onIncrement();
        }, 1000)
      );
    else clearInterval(intervalID);
  }, [isStartClicked]);

  return (
    <div>
      <button onClick={onStartClicked}>START</button>
      <h1>{count}</h1>
      <button onClick={onStopClicked}>STOP</button>
    </div>
  );
};
