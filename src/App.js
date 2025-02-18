import "./styles.css";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import { use, useState } from "react";
export default function App() {
  const comparr = [<Page1 />, <Page2 />, <Page3 />];
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setNum((num + 1) % 3)}>next</button>
      {comparr[num]}
    </div>
  );
}
