import { useState, useMemo } from "react";

const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const ComponentMemoExample = () => {
  const [num, setNum] = useState(30);
  const [isBlue, setIsBlue] = useState(true);
  // here we don't memoise so it will be calculated each time this is rendered
  const fib = () => fibonacci(num);

  // fib is called to retrieve that value every time this jsx is rendered.
  // it will run fibonacci each time, even if the state hasn't changed, causing a slowdown.
  // next
  // if we now click somewhere else which triggers a different state, like here this setIsBlue to change
  // from true/false, changing the color here. as we know, setState causes a re-render whenever is is called
  // and so again it renders what it needs with the new state for isBlue but also goes and calls
  // fib() again, holding everything else up and causing massive performance issues elsewhere.
  // so we can use memo to tell react,
  // ill give you a dependency, please dont run this really computationally expensive function unless this
  // or one of these dependencies change. change and demo
  return (
    <div>
      <h1
        onClick={() => setIsBlue(!isBlue)}
        style={{ color: isBlue ? "skyblue" : "gold" }}
      >
        useMemo makes heavy computational tasks run more efficiently!
      </h1>
      <h2>
        Fibonacci of {num} is {fib()}
      </h2>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </div>
  );
};

export default ComponentMemoExample;

// import { useState, useMemo } from "react";

// const fibonacci = (n) => {
//   if (n <= 1) {
//     return 1;
//   }

//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// const MemoComponent = () => {
//   const [num, setNum] = useState(1);
//   const [isGreen, setIsGreen] = useState(true);
//   const fib = useMemo(() => fibonacci(num), [num]);

//   return (
//     <div>
//       <h1
//         onClick={() => setIsGreen(!isGreen)}
//         style={{ color: isGreen ? "limegreen" : "crimson" }}
//       >
//         useMemo Example
//       </h1>
//       <h2>
//         Fibonacci of {num} is {fib}
//       </h2>
//       <button onClick={() => setNum(num + 1)}>➕</button>
//     </div>
//   );
// };

// export default MemoComponent;


