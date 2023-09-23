import { useState } from "react";
import kotaContext from "./kotaContext";

const KotaState = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (data) => {
    setShowModal(data);
  };
  return (
    <kotaContext.Provider value={{ showModal, handleModal }}>
      {props.children}
    </kotaContext.Provider>
  );
};

export default KotaState;
