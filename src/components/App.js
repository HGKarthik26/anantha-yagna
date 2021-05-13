import React, { useState } from "react";
import Navbar from "./Navbar";
import Counter from "./Counter";
import PopUp from './PopUp';
import { Provider } from "react-redux";
import store from "../redux/store";


function App() {
    const [isOpen, setIsOpen] = useState(true);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        {isOpen && <PopUp content = {
            <>
                <h3 className="pop-up-head"> ಜಪ ಯಜ್ಞ </h3>
                <div className="pop-up-body">
                    <p>ಜಪ ಯಜ್ಞ ಎಂಬುದು #teamPBH ತಂಡದ ಕನಸಿನ ಕೂಸು. ಅಖಂಡ ಭಾರತದ ಎಲ್ಲ ಮನೆಗಳಲ್ಲಿ ಜಪವು ನಿರಂತರ ಸಾಗುತ್ತಿರಬೇಕು ಎಂಬ ಘನ ಉದ್ದೇಶ ಹೊಂದಿ, ಅದರ ನಿಟ್ಟಿನಲ್ಲಿ ಸಾಗಲು ಡಿಜಿಟಲ್ ಜಪಮಾಲೆ- ಜಪ ಯಜ್ಞ ವನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದ್ದೇವೆ. </p>
                    <p>ಜಪಯಜ್ಞದ ಮೊಟ್ಟ ಮೊದಲ ಯಜ್ಞ- ರಾಮ ನಾಮ ಜಪದ ಯಜ್ಞ. ಕೊರೊನಾ ಕಾಲದಲ್ಲಿ ನಮಗೆ ಶ್ರೀರಕ್ಷೆ ರಾಮ ನಾಮ ಜಪ. ರಾಮ ತಾರಕ ಮಂತ್ರದ ಜಪವೇ ಧ್ಯೇಯ. ನಿಮ್ಮ ಶಕ್ತ್ಯಾನುಸಾರ ಜಪವನ್ನು ಡಿಜಿಟಲ್ ಜಪಮಾಲೆಯ ಮೂಲಕ ಮಾಡಲು ಸಹಕಾರಿಯಾದ tool. </p>
                    <p>ರಾಮ ತಾರಕ ಮಂತ್ರವಾದ "ಶ್ರೀ ರಾಮ ಜೈ ರಾಮ  ಜೈ ಜೈ ರಾಮ" ಎಂಬುದು ರಾಮನನ್ನು ನೆನೆಯುವ ದಿವ್ಯ ಮಂತ್ರ. ಒಂದು ಉಚ್ಚಾಸ ಮತ್ತು ನಿಶ್ವಾಸಗಳ ಕಾಲದಲ್ಲಿ ಉಚ್ಚರಿಸಬಹುದಾದ ಈ ಶ್ಲೋಕದ ಜಪವು, ದೇಹದ ಉಸಿರಾಟಕ್ಕೂ ಸಹಕಾರಿ. ಒಬ್ಬ ವ್ಯಕ್ತಿ ಒಂದು ದಿನಕ್ಕೆ ಸರಾಸರಿ 22000 ಉಸಿರುಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತಾನಂತೆ. ಅದರ ಲೆಕ್ಕಕ್ಕೆ ದಿನಕ್ಕೆ 22000 ರಾಮನಾಮ ಜಪವಾದರೆ, ತಿಂಗಳಿಗೆ 660000 ರಾಮನಾಮ ಜಪಗಳು!! ಎಷ್ಟು ಪುಣ್ಯವಲ್ಲವೇ?? </p>
                    <p>ಹಾಗಿದ್ದರೆ ಏಕೆ ತಡ? ಈಗಲೇ ರಾಮನಾಮ ಜಪವನ್ನು ನಮ್ಮ ಇ- ಜಪಮಾಲೆಯ ಬಳಸಿ ಪ್ರಾರಂಭಿಸಿ!! </p>
                    <p>ಏನೇ ಸಂದೇಹಗಳಿದ್ದರೂ ನಮ್ಮ ಪುಟವನ್ನು ಸಂಪರ್ಕಿಸಿ. 
Please help us to grow the chain!! and may rama nama japa yajna spread everywhere and help everyone to be safe. 
stay safe!! stay home!! </p>
                </div>
            </>
        } handleClose = {togglePopup}/> }

        {
            <>
            <div className="jai-raam">
           <h4> ಶ್ರೀ ರಾಮ ಜಯ ರಾಮ ಜಯ ಜಯ  ರಾಮ</h4>
           <h4>श्री राम जय राम जय जय राम</h4>
           <h4>Shri Ram Jaya Rama Jaya Jaya Rama</h4>
           </div>
           </>
        }

        <Counter />
      </div>
    </Provider>
  );
}

export default App;
