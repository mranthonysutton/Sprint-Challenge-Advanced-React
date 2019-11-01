import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";
import Players from "./Component/Players";
import axios from "axios";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders mapped data by testing for the 'searches' keyword", () => {
  const container = render(<App />);
  container.getAllByText("Alex");
});
