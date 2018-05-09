import { formReducer as reducer } from "../reducers/reducer-form";
import * as types from "../actions/type";
describe("testing Reducers", () => {
  it("should return the initial state ", () => {
    expect(reducer(undefined, {})).toEqual({
      lname: "",
      mobile: "",
      loan_amount: 0,
      area: "",
      region: "",
      street: "",
      building: "",
      floor: "",
      room: "",
      channel: "",
      verification_code: "",
      agreement: false
    });
  });

  it("should handle SUBMIT_FORM", () => {
    const initialState = {
      lname: "",
      mobile: "",
      loan_amount: 0,
      area: "",
      region: "",
      street: "",
      building: "",
      floor: "",
      room: "",
      channel: "",
      verification_code: "",
      agreement: false
    };

    const action = {
      type: types.SUBMIT_FORM,
      payload: {
        lname: "hui",
        mobile: "63839000",
        loan_amount: "10000",
        area: "九龍",
        region: "九龍灣",
        street: "Lam Hing Street",
        building: "Hope Sea Industry Center",
        floor: "G",
        room: "1",
        channel: "google",
        verification_code: "B1DM0R",
        agreement: true
      }
    };
    expect(reducer(initialState, action)).toEqual({
      lname: "hui",
      mobile: "63839000",
      loan_amount: "10000",
      area: "九龍",
      region: "九龍灣",
      street: "Lam Hing Street",
      building: "Hope Sea Industry Center",
      floor: "G",
      room: "1",
      channel: "google",
      verification_code: "B1DM0R",
      agreement: true
    });

    const latestState = {
      lname: "hui",
      mobile: "63839000",
      loan_amount: "10000",
      area: "九龍",
      region: "九龍灣",
      street: "Lam Hing Street",
      building: "Hope Sea Industry Center",
      floor: "G",
      room: "1",
      channel: "google",
      verification_code: "B1DM0R",
      agreement: true
    };
    const secondAction = {
      type: types.SUBMIT_FORM,
      payload: {
        lname: "Lai",
        mobile: "67694122",
        loan_amount: "900900",
        area: "九龍",
        region: "九龍灣",
        street: "Lam Hing Street",
        building: "Billion Center",
        floor: "25",
        room: "A",
        channel: "google",
        verification_code: "ufinance",
        agreement: true
      }
    };
    expect(reducer(latestState, secondAction)).toEqual({
      lname: "Lai",
      mobile: "67694122",
      loan_amount: "900900",
      area: "九龍",
      region: "九龍灣",
      street: "Lam Hing Street",
      building: "Billion Center",
      floor: "25",
      room: "A",
      channel: "google",
      verification_code: "ufinance",
      agreement: true
    });
  });
});
