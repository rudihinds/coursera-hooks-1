import { useState, useRef } from "react";

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const refNumber = useRef(0);

  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);
    refNumber.current++;
    setTimeout(
      () => alert(`state number: ${stateNumber} | ref number: ${refNumber.current}`),
      1000
    );
  }

  return (
    <div>
      <h1>useRef Example</h1>
      <button onClick={incrementAndDelayLogging}>delay logging</button>
      <h4>state: {stateNumber}</h4>
      <h4>ref: {refNumber.current}</h4>
    </div>
  );
};

export default RefComponent;
