import React from "react";
import pic from "../Capture d’écran 2022-04-04 124158.png";

const ProfilePhoto = () => {
  return (
    <div>
      {/* <img src="https://img.passeportsante.net/1200x675/2021-06-01/i107848-eduquer-un-chaton.jpeg" /> */}
      <img src={pic} alt="" />
      <img src="/logo192.png" alt="" />
    </div>
  );
};

export default ProfilePhoto;
