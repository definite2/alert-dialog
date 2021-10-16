//src/services/mockAxios.js
import MockAdapter from "axios-mock-adapter";
import { mockLogin } from "../mocks/login";
//mock axios setup which will returns error message for demo purposes
export default function mockAxios(axios) {
  const mock = new MockAdapter(axios, { delayResponse: 300 });
  mockLogin(mock);
  return mock;
}
