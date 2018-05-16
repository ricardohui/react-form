import { SUBMIT_FORM } from "./type";
import axios from "axios";
const ROOT_URL = "https://httpbin.org/post";
export function submitForm(input, callback) {
  return dispatch => {
    //some api call happens here
    const request = axios.post(`${ROOT_URL}`, input).then(response => {
      console.log(response);
      callback();
    });
  };
}
