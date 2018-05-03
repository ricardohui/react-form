import React, { Component } from "react";
import "./style/Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { lname: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted!");
  }
  handleChange(event) {
    const lname = event.target.value;
    this.setState({ lname });
    const message = `${lname} is input`;
    console.log(message);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Last name: </label>
        <input
          type="text"
          name="lname"
          value={this.state.lname}
          onChange={this.handleChange}
        />
        <br />
        <label>Mobile:</label> <input type="text" name="mobile" />
        <br />
        <label>Loan Amount:</label> <input type="text" name="loan_amount" />
        <br />
        <label>區域:</label>
        <select id="area">
          <option value="hkisland">香港島</option>
          <option value="kowloon">九龍</option>
          <option value="newterrories">新界</option>
        </select>
        <br />
        <label>地區:</label>
        <select id="region">
          <option value="mk">旺角</option>
          <option value="tst">尖沙咀</option>
          <option value="cwb">銅鑼灣</option>
        </select>
        <br />
        <label htmlFor="street">屋村：</label>
        <input type="text" name="street" />
        <br />
        <label>大廈/座數:</label> <input type="text" name="building" />
        <br />
        <label>樓層: </label>
        <input type="text" name="floor" />
        <br />
        <label>單位:</label>
        <input type="text" name="room" />
        <br /> <label>得知途徑：</label>
        <select id="channel">
          <option value="facebook">Facebook</option>
          <option value="google">Google</option>
          <option value="referral">朋友介紹</option>
          <option value="media">報紙雜誌</option>
        </select>
        <br />
        <label>手機驗証碼：</label>
        <input type="text" name="verification_code" />
        <br />
        <input type="checkbox" name="agreement" value="true" />
        <label htmlFor="agreement">我同意</label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Form;
