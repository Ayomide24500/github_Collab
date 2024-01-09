import axios from "axios";
const URL: string = "http://localhost:3400/api/v1";
export const createTask = async (data: any) => {
  try {
    const response = await axios.post(`${URL}/create-task`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const viewTask = async () => {
  try {
    const response = await axios.get(`${URL}/view-task`);
    return response?.data?.data;
  } catch (error) {
    return error;
  }
};
