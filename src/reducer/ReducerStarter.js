import { useReducer, useState } from "react";

const initialState = { count: 0 };
// 1. a reducer should take a state, and action. the action should have
// two properties
// a type (the instruction)
// a payload (the data)
function reducer(state, action) {
  // 2. usually a case statement or if statement to get multiple returns
  // now we can read the type and code the new state.
  // the new state must be a new object or it will not trigger an update.
  switch (action.type) {
  }
}

function Counter() {
  return <></>;
}
export default Counter;
