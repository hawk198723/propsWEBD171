import React from "react";
import userImage from "../img/download.jpeg";

const UserInfo = (props) => {
  return (
    <div>
      <img src={userImage} alt="user" />
      <p>Jason Kidd</p>
    </div>
  );
};

export default UserInfo;
