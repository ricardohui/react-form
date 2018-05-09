import * as actions from "../actions/index";
import * as types from "../actions/type";

describe("testing actions", () => {
  it("should create an action to submit form", () => {
    const input = {
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
    const expectedAction = {
      type: types.SUBMIT_FORM,
      payload: input
    };
    expect(actions.submitForm(input)).toEqual(expectedAction);
  });
});
