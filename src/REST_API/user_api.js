import axios from "axios";
const header = {
  headers: {
    "Content-Type": "Application/json",
  },
};

export const userRegistration = async (body) => {
  return await axios.post(
    "https://new-app-server-rownokjahannishat17-gmailcom.vercel.app/users",
    body,
    header
  );
};
