import { SUBMIT_FORM } from "./type";

export function submitForm(input) {
  return { type: SUBMIT_FORM, payload: input };
}
