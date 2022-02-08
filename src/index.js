import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Principal from "./Principal";

const rootElement = document.getElementById("principal");
ReactDOM.render(
  <StrictMode>
    <Principal />
  </StrictMode>,
  rootElement
);
