import { render } from "react-dom";
import State from "./State";
import Effect from "./Effect";
import Context from "./context/Context";
import Ref from "./Ref";
import Reducer from "./reducer/Reducer";
import Memo from "./Memo";
import Callback from "./Callback";
import LayoutEffect from "./layout-effect/LayoutEffect";
import ImperativeHandle from "./ImperativeHandle";
import DebugValue from "./DebugValue";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <Reducer /> */}
      {/* <State />
      <hr />
      <Effect />
      <hr />
      <Context />
      <hr />
      <Ref />
      <hr />
      <Reducer />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    <DebugValue /> */}
      <hr />
    <ImperativeHandle />
    {/* <Callback /> */}
    {/* <Memo /> */}
    {/* <LayoutEffect /> */}
    </div>
  );
}

render(<App />, document.getElementById("root"));
