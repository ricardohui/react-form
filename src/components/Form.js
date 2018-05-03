import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form action="">
        Last name: <input type="text" name="lname" />
        <br />
        Mobile: <input type="text" name="mobile" />
        <br />
        Loan Amount: <input type="text" name="loan_amount" />
        <br />
        區域:
        <select id="area">
          <option value="hkisland">香港島</option>
          <option value="kowloon">九龍</option>
          <option value="newterrories">新界</option>
        </select>
        <br />
        地區:
        <select id="region">
          <option value="mk">旺角</option>
          <option value="tst">尖沙咀</option>
          <option value="cwb">銅鑼灣</option>
        </select>
        <br />
        屋村：<input type="text" name="street" />
        <br />
        大廈/座數: <input type="text" name="building" />
        <br />樓層: <input type="text" name="floor" />
        <br />單位:<input type="text" name="room" />
        <br /> 得知途徑：<select id="channel">
          <option value="facebook">Facebook</option>
          <option value="google">Google</option>
          <option value="referral">朋友介紹</option>
          <option value="media">報紙雜誌</option>
        </select>
        <br />
        手機驗証碼：<input type="text" name="verification_code" />
        <br />
        我同意：<input type="checkbox" name="agreement" value="true" /> I agree<br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Form;
