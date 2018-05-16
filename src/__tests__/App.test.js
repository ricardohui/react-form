import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";
import Form from "../components/Form";
describe("testing Form component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders without crashing", () => {
    shallow(<App />);
  });
});
