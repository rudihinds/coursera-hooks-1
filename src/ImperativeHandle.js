import { useRef, forwardRef, useImperativeHandle, useState } from 'react';

function ImperativeHandleComponent() {
  // 1. first we create a ref, the ref gives us an object with the current property on it
  // const modalRef = useRef();


  // const handleOpenModal = () => {
  //   modalRef.current.openModal();
  // }

  // 1.5 we have log statements in the component body just to show that it
  // has been rendered. theres one in the child component also.
  console.log('parent rendered')

  // 2. now render the child modal and pass the ref to the child. 

  // 7. add button that fires a function handleopenmodal
  // now inside that function we can hit this modalref.current property to
  // access our functions. .openModal() now fires back in the child, 
  // and setstate is hit which doesnt have anything to do with the parent.
  // now look in our log statement, child rendered only.  

  return (
    <main className="imperative-handle">
      <p>Parent Component</p>
      {/* <ChildModalComponent ref={modalRef} /> */}
      {/* <button onClick={handleOpenModal}>Open Modal</button> */}
    </main>
  );
}

// 3. so here inside the modal component itself, we will have a button on the modal only to close
// the modal

/** 6. wrap function in fwd ref, props still first arg, ref second, 
 * 
 */
const ChildModalComponent = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 5. so what if we want to give control of firing setIsModalOpen to true to open the modal on a button click
  // from a parent button,
  // but we want this setState to be fired in the child, only causing the child to rerender and not the 
  // parent as no setState is being run there. this is a good use case for uih. others could be library 
  // maintainers might use this, or you could use it the same way if you wanted to show some tooltips
  // on hover for example.

  // we use the useImpHand hook, in the child.

  /**
   * it needs that ref that we created in the parent as the first param.
   * second param is a createHandle, a function that should return the new object 
   * with the params you need in the parent component. 
   * you can add multiple params with functions that do multiple things
   * here we are just passing one function on one property only, which
   * is firing setstate to set ismodalopen to true, 
   * allowing this modal to be rendered.
   * but now check the console log statements. only child is logging when this parent button
   * is clicked, and this child rendered.
   * 
   * so now lets create a button in the parent that calls a function that uses this new function
   * openModal
   */
  // useImperativeHandle(ref, () => ({
  //     openModal: () => setIsModalOpen(true)
  // }));

  console.log('child rendered')

  // 4. and by default we don't return anything if isModalOpen is set to false
  if (!isModalOpen) return null;

  return (
      <div className="modal">
          <p>Child Component Modal</p>
          <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
      </div>
  )
})


export default ImperativeHandleComponent;





// import { useRef, forwardRef, useImperativeHandle, useState } from 'react';

// function ImperativeHandleComponent() {
//   // 1. first we create a ref, the ref gives us an object with the current property on it
//   const modalRef = useRef();

//   const handleOpenModal = () => {
//     modalRef.current.openModal();
//   }

//   console.log('parent rendered')

//   return (
//     <main className="imperative-handle">
//       <p>Parent Component</p>
//       <ChildModalComponent ref={modalRef} />
//       <button onClick={handleOpenModal}>Open Modal</button>
//     </main>
//   );
// }

// const ChildModalComponent = forwardRef((props, ref) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useImperativeHandle(ref, () => ({
//       openModal: () => setIsModalOpen(true)
//   }));

//   console.log('child rendered')

//   if (!isModalOpen) return null;

//   return (
//       <div className="modal">
//           <p>Child Component Modal</p>
//           <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
//       </div>
//   )
// })


// export default ImperativeHandleComponent;








// import { useState, useRef, useImperativeHandle, forwardRef } from "react";

// const ElaborateInput = forwardRef(
//   ({ hasError, placeholder, value, update }, ref) => {
//     const inputRef = useRef();
//     useImperativeHandle(ref, () => {
//       return {
//         focus() {
//           inputRef.current.focus();
//         }
//       };
//     });
//     return (
//       <input
//         ref={inputRef}
//         value={value}
//         onChange={(e) => update(e.target.value)}
//         placeholder={placeholder}
//         style={{
//           padding: "5px 15px",
//           borderWidth: "3px",
//           borderStyle: "solid",
//           borderColor: hasError ? "crimson" : "#999",
//           borderRadius: "5px",
//           margin: "0 10px",
//           textAlign: "center"
//         }}
//       />
//     );
//   }
// );

// const ImperativeHandleComponent = () => {
//   const [city, setCity] = useState("Seattle");
//   const [state, setState] = useState("WA");
//   const [error, setError] = useState("");
//   const cityEl = useRef();
//   const stateEl = useRef();

//   function validate() {
//     // lol I found it on StackOverflow : https://stackoverflow.com/a/25677072
//     if (
//       !/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]+$/.test(
//         city
//       )
//     ) {
//       setError("city");
//       cityEl.current.focus();
//       return;
//     }

//     if (!/^[A-Z]{2}$/.test(state)) {
//       setError("state");
//       stateEl.current.focus();
//       return;
//     }

//     setError("");
//     alert("valid form!");
//   }

//   return (
//     <div>
//       <h1>useImperativeHandle Example</h1>
//       <ElaborateInput
//         hasError={error === "city"}
//         placeholder={"City"}
//         value={city}
//         update={setCity}
//         ref={cityEl}
//       />
//       <ElaborateInput
//         hasError={error === "state"}
//         placeholder={"State"}
//         value={state}
//         update={setState}
//         ref={stateEl}
//       />
//       <button onClick={validate}>Validate Form</button>
//     </div>
//   );
// };

// export default ImperativeHandleComponent;



// import { useState, useRef, useImperativeHandle, forwardRef } from "react";

// const ElaborateInput = forwardRef(
//   ({ hasError, placeholder, value, update }, ref) => {
//     const inputRef = useRef();
//     useImperativeHandle(ref, () => {
//       return {
//         focus() {
//           inputRef.current.focus();
//         }
//       };
//     });
//     return (
//       <input
//         ref={inputRef}
//         value={value}
//         onChange={(e) => update(e.target.value)}
//         placeholder={placeholder}
//         style={{
//           padding: "5px 15px",
//           borderWidth: "3px",
//           borderStyle: "solid",
//           borderColor: hasError ? "crimson" : "#999",
//           borderRadius: "5px",
//           margin: "0 10px",
//           textAlign: "center"
//         }}
//       />
//     );
//   }
// );

// const ImperativeHandleComponent = () => {
//   const [city, setCity] = useState("Seattle");
//   const [state, setState] = useState("WA");
//   const [error, setError] = useState("");
//   const cityEl = useRef();
//   const stateEl = useRef();

//   function validate() {
//     // lol I found it on StackOverflow : https://stackoverflow.com/a/25677072
//     if (
//       !/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]+$/.test(
//         city
//       )
//     ) {
//       setError("city");
//       cityEl.current.focus();
//       return;
//     }

//     if (!/^[A-Z]{2}$/.test(state)) {
//       setError("state");
//       stateEl.current.focus();
//       return;
//     }

//     setError("");
//     alert("valid form!");
//   }

//   return (
//     <div>
//       <h1>useImperativeHandle Example</h1>
//       <ElaborateInput
//         hasError={error === "city"}
//         placeholder={"City"}
//         value={city}
//         update={setCity}
//         ref={cityEl}
//       />
//       <ElaborateInput
//         hasError={error === "state"}
//         placeholder={"State"}
//         value={state}
//         update={setState}
//         ref={stateEl}
//       />
//       <button onClick={validate}>Validate Form</button>
//     </div>
//   );
// };

// export default ImperativeHandleComponent;
