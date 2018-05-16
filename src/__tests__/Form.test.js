import React from "react";
import { shallow, mount } from "enzyme";
import { Form } from "../components/Form";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import Select from "material-ui/Select";
describe("testing Form component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form />);
  });
  it("renders 貸款申請競價 text", () => {
    const welcome = <h1 className="App-title">Welcome to React</h1>;
    // expect(wrapper.contains(welcome)).to.equal(true);
    // expect(wrapper.contains(welcome)).toEqual(true);
    expect(wrapper.text()).toContain("貸款申請競價");
  });

  it("should have a form tag", () => {
    expect(wrapper.find("form")).toHaveTagName("form");
  });

  it("should have a input tag for lname", () => {
    wrapper = wrapper.find("[name='lname']");
    expect(
      wrapper.containsMatchingElement(<TextField name="lname" label="姓氏" />)
    ).toBeTruthy();
  });
  it("should have a input tag for mobile", () => {
    wrapper = wrapper.find("[name='mobile']");
    expect(
      wrapper.containsMatchingElement(
        <TextField name="mobile" label="手提號碼" />
      )
    ).toBeTruthy();
  });
  it("should have a input tag for loan amount", () => {
    wrapper = wrapper.find("[name='loan_amount']");
    expect(
      wrapper.containsMatchingElement(
        <TextField name="loan_amount" label="申請貸款額" />
      )
    ).toBeTruthy();
  });
  it("should have an Area field", () => {
    wrapper = wrapper.find("[name='area']");
    expect(
      wrapper.containsMatchingElement(
        <Select native name="area">
          <option value="null">請選擇區域</option>
          <option value="香港島">香港島</option>
          <option value="九龍">九龍</option>
          <option value="新界">新界</option>
        </Select>
      )
    ).toBeTruthy();
  });

  it("should have a District field", () => {
    //to be implemented
  });
  it("should have street field", () => {
    wrapper = wrapper.find("[name='street']");
    expect(
      wrapper.containsMatchingElement(<TextField name="street" />)
    ).toBeTruthy();
  });
  it("should have building field", () => {
    wrapper = wrapper.find("[name='building']");
    expect(
      wrapper.containsMatchingElement(<TextField name="building" />)
    ).toBeTruthy();
  });
  it("should have floor field", () => {
    wrapper = wrapper.find("[name='floor']");
    expect(
      wrapper.containsMatchingElement(<TextField name="floor" />)
    ).toBeTruthy();
  });
  it("should have room field", () => {
    wrapper = wrapper.find("[name='room']");
    expect(
      wrapper.containsMatchingElement(<TextField name="room" />)
    ).toBeTruthy();
  });
  it("should have channel field", () => {
    wrapper = wrapper.find("[name='channel']");
    expect(
      wrapper.containsMatchingElement(
        <Select name="channel">
          <option value="null">請選擇</option>
          <option value="facebook">Facebook</option>
          <option value="google">Google</option>
          <option value="referral">朋友介紹</option>
          <option value="media">報紙雜誌</option>
        </Select>
      )
    ).toBeTruthy();
  });
  it("should have a verification code field", () => {
    expect(
      wrapper.containsMatchingElement(<TextField name="verification_code" />)
    ).toBeTruthy();
  });
  it("should have an agree checkbox", () => {
    wrapper = mount(<Form />);
    expect(wrapper.find('[name="agreement"]')).toExist();
  });
  it("should have a submit button", () => {
    expect(wrapper.find("[type='submit']")).toHaveTagName("WithStyles(Button)");
  });
});
