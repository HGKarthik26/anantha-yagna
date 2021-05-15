import React, { useState } from "react";
import "../yagna.css"
import PopUp from "./PopUp";
import { countTracker } from "../pop-up";

function SingleYagna({ id, text, image }) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <article className="single-yagna">
      <div className="img-container">
        <img src={image} alt={text} />
      </div>
      <div className="yagna-footer">
        <h3>{text}</h3>
        <button onClick={() => toggleModal()} className="btn btn-primary">
          See total count
        </button>
        {modalOpen && (
          <PopUp content={countTracker} handleClose={toggleModal} />
        )}
      </div>
    </article>
  );
}

export default SingleYagna;
