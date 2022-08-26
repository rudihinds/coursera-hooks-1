import { useState, useEffect, useCallback, memo } from "react";

// we wrap our component in memo, which renders the component and then memoizes the result.
// then on the next render, it checks if the props have changed since the last render.
// ifn they haven't changed it just skips the render of this wrapped component and
// refers to the memoised result. 

const ComponentThatRunsCallback = ({ fib, count }) => {
  return (
    <div>
      {/** calling fib will mean a new computation of fibonacci, so any time this component is rendered
       * it will run. 
       * and since this component is a child of the one where we are calling use effect repeatedly, 
       * this will re-render every time thart one does, by default.
       * switch to browser and see both incrementing each second.
       * all good until this becomes heavy to run then look...
       * slows down
       * to fix it we can use usecallback
       * we simply wrap our function in it and provide dependencies, and react will memoise the result
       * and only run it again if it notices that a dependency has changed.
       * 
       * the other thing we need to do is to wrap our calling component in memo, or react will render
       * this again anyway.
       */}
      {/* <h1>fibonacci: {fib(count)}</h1> */}
      {/* <h4>Last rerender time of ComponentThatRunsCallback Component: {new Date().toLocaleTimeString()}</h4> */}
    </div>
  );
};


const CallbackComponent = () => {
  // 1. a ghood way to get react to render is to call setState every second, so lets
  // set the time every second, so we need state and use effect
  
  // 2. we are going to display the time on screen, so lets have that to the current time

  // const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(30);

  // 4. now lets reset the time each time this component is rendered and cause another re-render
// every second, we get a new time on screen.

  // useEffect(() => {
  //   const timer = setTimeout(() => setTime(new Date()), 1000);
  //   return () => clearTimeout(timer);
  // });

  // again some function that can be computationally heavy
  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  //3. now we can put the time into the jsx
  return (
    <div>
      
      <h1>Last rerender time of Callback Component: {'time'}</h1>
      {/* <h1>Last rerender time of Callback Component: {time.toLocaleTimeString()}</h1> */}
      <button onClick={() => setCount(count + 1)}>
        current count: {count}
      </button>
      {/** 5. we are passing our heavy function directly to the component that will call it */}
      <ComponentThatRunsCallback
        fib={fibonacci}
        count={count}
      />
    </div>
  );
};

export default CallbackComponent;


// import { useState, useEffect, useCallback, memo } from "react";

// // we wrap our component in memo, which renders the component and then memoizes the result.
// // then on the next render, it checks if the props have changed since the last render.
// // ifn they haven't changed it just skips the render of this wrapped component and
// // refers to the memoised result. 

// const ExpensiveComputationComponent = memo(({ compute, count }) => {
//   return (
//     <div>
//       <h1>computed: {compute(count)}</h1>
//       <h4>last re-render {new Date().toLocaleTimeString()}</h4>
//     </div>
//   );
// });


// const CallbackComponent = () => {
//   const [time, setTime] = useState(new Date());
//   const [count, setCount] = useState(1);
//   useEffect(() => {
//     const timer = setTimeout(() => setTime(new Date()), 1000);
//     return () => clearTimeout(timer);
//   });

//   const fibonacci = (n) => {
//     if (n <= 1) {
//       return 1;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2);
//   };

//   return (
//     <div>
//       <h1>useCallback Example {time.toLocaleTimeString()}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         current count: {count}
//       </button>
//       <ExpensiveComputationComponent
//         compute={useCallback(fibonacci, [])}
//         count={count}
//       />
//     </div>
//   );
// };

// export default CallbackComponent;
