import React, { Component } from "react";
import { connect } from "react-redux";
import "./style/Form.css";
import * as actions from "../actions";
import SelectRegionField from "./Region";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Checkbox from "material-ui/Checkbox";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import Select from "material-ui/Select";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText
} from "material-ui/Form";
import NumberFormat from "react-number-format";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: "loan_amount",
            value: values.value
          }
        });
      }}
      thousandSeparator
      prefix="HK$ "
    />
  );
}

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lname: "",
      mobile: "",
      area: "null",
      street: "",
      building: "",
      floor: "",
      room: "",
      region: "",
      loan_amount: "10000000",
      gender: "male",
      channel: "null",
      agreement: false
    }; //[{name: 'xx', value: 'xx'},{name: 'xx', value: 'xx'},{name: 'xx', value: 'xx'}]
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
    this.props.submitForm(this.state, () => {
      this.props.history.push("/success");
    });
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
      <div>
        <h1>貸款申請競價</h1>
        <form onSubmit={this.handleSubmit}>
          <FormControl>
            <TextField
              name="lname"
              label="姓氏"
              value={this.state.lname}
              onChange={this.handleChange}
              margin="normal"
              helperText="必須填寫"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Select
                      native
                      value={this.state.gender}
                      onChange={this.handleChange}
                      name="gender"
                    >
                      <option value="male">先生</option>
                      <option value="female">小姐</option>
                      <option value="female">女士</option>
                    </Select>
                  </InputAdornment>
                )
              }}
            />
          </FormControl>

          <br />
          <TextField
            name="mobile"
            label="手提號碼"
            value={this.state.mobile}
            onChange={this.handleChange}
            margin="normal"
            helperText="必須填寫"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+852</InputAdornment>
              )
            }}
          />
          <br />

          <TextField
            label="申請貸款額"
            name="loan_amount"
            value={this.state.loan_amount}
            onChange={this.handleChange}
            id="formatted-numberformat-input"
            helperText="必須填寫"
            InputProps={{
              inputComponent: NumberFormatCustom
            }}
            margin="normal"
          />
          <br />

          <FormControl>
            <InputLabel htmlFor="area"> 區域</InputLabel>
            <Select
              native
              value={this.state.area}
              onChange={this.handleChange}
              name="area"
            >
              <option value="null">請選擇區域</option>
              <option value="香港島">香港島</option>
              <option value="九龍">九龍</option>
              <option value="新界">新界</option>
            </Select>
            <SelectRegionField
              area={this.state.area}
              onRegionChange={this.handleRegionSelectFieldChange}
            />
          </FormControl>
          <br />

          <br />
          <TextField
            name="street"
            label="屋苑/街道名稱"
            value={this.state.street}
            onChange={this.handleChange}
            margin="normal"
          />
          <br />
          <TextField
            name="building"
            label="座數/大廈名稱/街號"
            value={this.state.building}
            onChange={this.handleChange}
            margin="normal"
          />
          <br />

          <TextField
            name="floor"
            label="樓層"
            value={this.state.floor}
            onChange={this.handleChange}
            margin="normal"
          />
          <br />

          <TextField
            name="room"
            label="單位"
            value={this.state.room}
            onChange={this.handleChange}
            margin="normal"
          />
          <br />

          <FormControl>
            <InputLabel htmlFor="channel">得知途徑</InputLabel>
            <Select
              native
              value={this.state.channel}
              onChange={this.handleChange}
              name="channel"
            >
              <option value="null">請選擇</option>
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>
              <option value="referral">朋友介紹</option>
              <option value="media">報紙雜誌</option>
            </Select>
            <FormHelperText>從那個途徑得知我們</FormHelperText>
          </FormControl>
          <br />

          <TextField
            name="verification_code"
            label="手機驗証碼"
            value={this.state.verification_code}
            onChange={this.handleChange}
            margin="normal"
          />
          <br />

          <FormControlLabel
            control={
              <Checkbox
                name="agreement"
                checked={this.state.agreement}
                onChange={this.handleChange}
                value="true"
              />
            }
            label="本人同意並接受BIDMOR的服務條款及個人資料私穩政策，
其中包括就本人之擬申請之貸款將完全轉介到BIDMOR有協議之持牌放債人處理，該等公司將會就擬借款人之申請作出最終批核決定之權利及有關放款之安排。

BIDMOR亦謹此向擬借款人確認，BIDMOR絕對 不會 就上述之申請（不論成功與否）向擬借款人收取任何費用。"
          />
          <br />

          <Button type="submit" variant="raised" color="primary" value="Submit">
            提交申請
          </Button>
        </form>
      </div>
    );
  }
}
export default connect(null, actions)(Form);
