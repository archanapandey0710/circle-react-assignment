import axios from "axios";

export default () => {
  let instance = axios.create({
    baseURL: `https://f995bad5-fb03-44cb-b04a-9492384bac4a.mock.pstmn.io/`,

    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  return instance;
};
