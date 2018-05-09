import React from "react";
import { shallow } from "enzyme";
import { Form } from "../components/Form";
describe("testing Form component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form />);
  });

  it("should have a form tag", () => {
    expect(wrapper.find("form")).toHaveTagName("form");
  });

  it("should have a input tag for lname", () => {
    expect(wrapper.find("[name='lname']")).toHaveTagName("input");
  });
  it("should have a input tag for mobile", () => {
    expect(wrapper.find("[name='mobile']")).toHaveTagName("input");
  });
  it("should have a input tag for loan amount", () => {
    wrapper = wrapper.find("[name='loan_amount']");
    expect(
      wrapper.containsMatchingElement(<input type="text" name="loan_amount" />)
    ).toBeTruthy();
  });
  it("should have an Area field", () => {
    wrapper = wrapper.find("[name='area']");
    expect(
      wrapper.containsMatchingElement(
        <select name="area">
          <option value="請選擇區域">請選擇區域</option>
          <option value="香港島">香港島</option>
          <option value="九龍">九龍</option>
          <option value="新界">新界</option>
        </select>
      )
    ).toBeTruthy();
  });

  it("should have a District field", () => {
    //to be implemented
  });
  it("should have street field", () => {
    wrapper = wrapper.find("[name='street']");
    expect(
      wrapper.containsMatchingElement(<input type="text" name="street" />)
    ).toBeTruthy();
  });
  it("should have building field", () => {
    wrapper = wrapper.find("[name='building']");
    expect(
      wrapper.containsMatchingElement(<input type="text" name="building" />)
    ).toBeTruthy();
  });
  it("should have floor field", () => {
    wrapper = wrapper.find("[name='floor']");
    expect(
      wrapper.containsMatchingElement(<input type="text" name="floor" />)
    ).toBeTruthy();
  });
  it("should have room field", () => {
    wrapper = wrapper.find("[name='room']");
    expect(
      wrapper.containsMatchingElement(<input type="text" name="room" />)
    ).toBeTruthy();
  });
  it("should have channel field", () => {
    wrapper = wrapper.find("[name='channel']");
    expect(
      wrapper.containsMatchingElement(
        <select name="channel">
          <option value="no-selected">從那個途徑得知我們</option>
          <option value="facebook">Facebook</option>
          <option value="google">Google</option>
          <option value="referral">朋友介紹</option>
          <option value="media">報紙雜誌</option>
        </select>
      )
    ).toBeTruthy();
  });
  it("should have a verification code field", () => {
    expect(
      wrapper.containsMatchingElement(
        <input type="text" name="verification_code" />
      )
    ).toBeTruthy();
  });
  it("should have an agree checkbox", () => {
    wrapper = wrapper.find("[type='checkbox'][name='agreement']");
    expect(
      wrapper.containsMatchingElement(
        <input type="checkbox" name="agreement" value="true" />
      )
    ).toBeTruthy();
  });
  it("should have a submit button", () => {
    expect(wrapper.find("[type='submit']")).toHaveTagName("input");
  });
});
