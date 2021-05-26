import React, { useState } from "react";
import "../index.css"
import PopUp from './PopUp'
import { rssForm }  from "../pop-up";

function InfoSection() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleFormSubmit = () => {
      setIsFormOpen(!isFormOpen);
    }

  return (
    <>
      <div className="rss-section">
        <h3>RSS - Vijayanagar Khanda</h3>
        <p>
          Rashtreeya Swayamsevak Sangh (RSS)- Vijayanagara Khanda(Bengaluru) has an
          ongoing Surya Namaskara Yagna and Maha Mrithyunjaya Mantra Yagna for 15 days starting from 24th May, 2021.
        </p>

        <p>
          Namaste to all SS bandhu, please click button below to submit your
          daily count of Surya Namaskara and Maha Mrithyunjaya Mantra.
        </p>
        <div className="sub-btn-container">
        <button className="btn" style={{backgroundColor: "#51d155"}} type="submit" onClick={ () => handleFormSubmit()}>
          <b>Submit SuryaNamaskar and Maha Mrityunjaya mantra Count</b>
        </button>
        { isFormOpen && (
          <PopUp content={rssForm} handleClose={handleFormSubmit} />
        ) }
      </div>

        <p>
          Other users who are willing and interested to participate can submit
          the same selecting "NA"as Valaya option.
        </p>
        <p>
          <b>
            The Raama nama japa target of 1,00,008 is reached, but users can continue the submission
            the usual way.
          </b>
        </p>
        <p>
          <b>Dhanyavad!</b>
        </p>
      </div>
    </>
  );
}

export default InfoSection;
