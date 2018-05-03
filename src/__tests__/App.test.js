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

  it("renders 貸款申請競價 text", () => {
    const welcome = <h1 className="App-title">Welcome to React</h1>;
    // expect(wrapper.contains(welcome)).to.equal(true);
    // expect(wrapper.contains(welcome)).toEqual(true);
    expect(wrapper.text()).toContain("貸款申請競價");
  });
});
