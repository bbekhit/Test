import React, { useState } from "react";
const Home = () => {
  const display = (type, count) => {
    if (type === "increment") {
      alert(`Your number was increment! Current value: ${count}`);
      // alert(`Your number was increment! Current value: ${count}`)
      return;
    }
  };
  return (
    <div>
      <Counter display={display} title="This is title"></Counter>;
    </div>
  );
};

// import React, { useState } from "react";
const Counter = ({ display, title }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    display("increment", count + 1);
  };
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <button onClick={increment}>Increment</button>{" "}
        <div className="counter"> {count} </div>
      </div>
    </div>
  );
};

export default Home;

// using refs to get prevValue ---1
const Counter = ({ display, title }) => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  const increment = () => {
    setCount(count + 1);
    display("increment", count + 1);
  };
  const prevCount = prevCountRef.current;
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <button onClick={increment}>Increment</button>{" "}
        <div className="counter"> Current:{count} </div>
        <div className="counter"> Prev{prevCount} </div>
      </div>
    </div>
  );
};

// using refs to get prevValue ---2
const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
const Counter = ({ display, title }) => {
  const [count, setCount] = useState(0);

  const prevCount = usePrevious(count);
  const prevTestCount = usePrevious(props.testNumber);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    display("increment", newCount);
  };

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <button onClick={increment}>Increment</button>{" "}
        <div className="counter"> Current:{count} </div>
        <div className="counter"> Prev{prevCount} </div>
      </div>
    </div>
  );
};

// without refs ----3
import React, { useState, useRef, useEffect } from "react";

const Faq = () => {
  const [count, setCount] = useState(0);

  const handleAsync = () => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 2000);
  };
  const handleSync = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <button onClick={handleAsync}>Async</button>
      <button onClick={handleSync}>Sync</button>
    </div>
  );
};

export default Faq;
