import React, { useState } from "react";
import Navbar from "./Navbar";
import Counter from "./Counter";
import PopUp from './PopUp';
import { Provider } from "react-redux";
import store from "../redux/store";
import { contentDiv, raamTarakaMantraDiv } from '../pop-up'


function App() {
 
    const [isOpen, setIsOpen] = useState(true);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

  return (
    <Provider store={store}>
        <Navbar />

        {isOpen && <PopUp content = { contentDiv} handleClose = {togglePopup}/> }
        {raamTarakaMantraDiv}

        <Counter />
    </Provider>
  );
}

export default App;
