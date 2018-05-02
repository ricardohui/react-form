import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">Welcome to React</h1>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  // expect(wrapper.contains(welcome)).toEqual(true);
  expect(wrapper.text()).toContain("Welcome to React");
});
