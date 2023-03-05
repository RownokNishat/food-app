import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserProfile = () => {
  const { newUser } = useContext(AuthContext);
  return (
    <div>
      <img src={newUser?.image}></img>
    </div>
  );
};

export default UserProfile;
