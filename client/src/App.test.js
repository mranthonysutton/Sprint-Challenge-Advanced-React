import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";
import Players from "./Component/Players";
import DarkModeToggler from "./Component/DarkModeToggler";
import axios from "axios";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Women's World Cup is being rendered", () => {
  const container = render(<Players />);
  container.getByText("Women's World Cup");
});
