import { useState } from "react";
import kotaContext from "./kotaContext";

const KotaState = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState();
  const [showImg, setShowImg] = useState(false);

  const handleModal = (data) => {
    setShowModal(data);
  };

  const getImg = (item) => {
    setShowImg(true);
    setImg(item);
  };

  return (
    <kotaContext.Provider
      value={{ showModal, handleModal, getImg, img, showImg, setShowImg }}
    >
      {props.children}
    </kotaContext.Provider>
  );
};

export default KotaState;
