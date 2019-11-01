import React from "react";
import { render, getByDisplayValue } from "@testing-library/react";
import Players from "./Players";

it("Renders Players Containter", () => {
  const container = render(<Players />);
});

test("renders mapped data by testing for the 'searches' keyword", () => {
  const container = document.body;
  const lastNameInput = getByDisplayValue(container, "Alex");
});
