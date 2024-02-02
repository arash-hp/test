import axios from "axios";

export async function getData(params) {
  try {
    const response = await axios.get(`https://reqres.in/api/users?${params}`);
    return response.data;
  } catch (e) {
    return e;
  }
}
