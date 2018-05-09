import { SUBMIT_FORM } from "../actions/type";

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

export function formReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_FORM:
      const {
        lname,
        mobile,
        loan_amount,
        area,
        region,
        street,
        building,
        floor,
        room,
        channel,
        verification_code,
        agreement
      } = action.payload;

      return {
        lname,
        mobile,
        loan_amount,
        area,
        region,
        street,
        building,
        floor,
        room,
        channel,
        verification_code,
        agreement
      };
  }
  return state;
}
