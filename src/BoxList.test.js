import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

//smoke test 
it("renders without crashing", function() {
  render(<BoxList />);
});

//snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});


//creates new box test
it("can add a new box", function() {
  const { getByLabelText, queryByText } = render(<BoxList />);

  // no box in document to start (remove button has text "X")
  expect(queryByText("X")).not.toBeInTheDocument();

  const colorInput = getByLabelText("Color:");
  const heightInput = getByLabelText("Height:");
  const widthInput = getByLabelText("Width:");
  const submitBtn = queryByText("Add Box")

  // fill out the form
  fireEvent.change(colorInput, { target: { value: "#555555" }});
  fireEvent.change(heightInput, { target: { value: 100 }});
  fireEvent.change(widthInput, { target: { value: 100 }});
  fireEvent.click(submitBtn);

  // box in document
  expect(queryByText("X")).toBeInTheDocument();
});


//removes box test
it("can remove box", function() {
  const { getByLabelText, queryByText } = render(<BoxList />);

  const colorInput = getByLabelText("Color:");
  const heightInput = getByLabelText("Height:");
  const widthInput = getByLabelText("Width:");
  const submitBtn = queryByText("Add Box");

  // fill out the form
  fireEvent.change(colorInput, { target: { value: "#555555" }});
  fireEvent.change(heightInput, { target: { value: 100 }});
  fireEvent.change(widthInput, { target: { value: 100 }});
  fireEvent.click(submitBtn);

  // box in document
  expect(queryByText("X")).toBeInTheDocument();

  // click on X button to remove the box
  const removeBtn = queryByText("X");
  fireEvent.click(removeBtn)

  expect(queryByText("X")).not.toBeInTheDocument();
});