import React, { Component } from "react";
import { connect } from "react-redux";
import "./style/Form.css";
import * as actions from "../actions";
import SelectRegionField from "./Region";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { region: "" }; //[{name: 'xx', value: 'xx'},{name: 'xx', value: 'xx'},{name: 'xx', value: 'xx'}]
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegionSelectFieldChange = this.handleRegionSelectFieldChange.bind(
      this
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted!");
    console.log(this.state);
    this.props.submitForm(this.state);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name);
    console.log(value);

    this.setState({
      [name]: value
    });
  }
  handleRegionSelectFieldChange(value) {
    this.setState({ region: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Last name:
          <input
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Mobile:
          <input type="text" name="mobile" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Loan Amount:
          <input type="text" name="loan_amount" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          區域:
          <select
            name="area"
            onChange={this.handleChange}
            value={this.state.area}
          >
            <option value="請選擇區域">請選擇區域</option>
            <option value="香港島">香港島</option>
            <option value="九龍">九龍</option>
            <option value="新界">新界</option>
          </select>
        </label>
        <br />
        <label>
          地區:
          <SelectRegionField
            area={this.state.area}
            onRegionChange={this.handleRegionSelectFieldChange}
          />
        </label>
        <br />
        <label>
          屋村：
          <input type="text" name="street" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          大廈/座數:
          <input type="text" name="building" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          樓層:
          <input type="text" name="floor" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          單位:
          <input type="text" name="room" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          得知途徑：
          <select
            name="channel"
            onChange={this.handleChange}
            value={this.state.area}
          >
            <option value="no-selected">從那個途徑得知我們</option>
            <option value="facebook">Facebook</option>
            <option value="google">Google</option>
            <option value="referral">朋友介紹</option>
            <option value="media">報紙雜誌</option>
          </select>
        </label>
        <br />
        <label>
          手機驗証碼：
          <input
            type="text"
            name="verification_code"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="agreement"
            value="true"
            onChange={this.handleChange}
          />
          我同意
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default connect(null, actions)(Form);
