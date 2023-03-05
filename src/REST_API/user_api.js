import axios from "axios";
const header = {
  headers: {
    "Content-Type": "Application/json",
  },
};

export const userRegistration = async (body) => {
  return await axios.post("http://localhost:5000/users", body, header);
};
