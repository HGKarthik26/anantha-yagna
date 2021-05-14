import React, { useState } from "react";
import Navbar from "./Navbar";
import Counter from "./Counter";
import PopUp from "./PopUp";
import About from "./About";
import Yagnas from './Yagnas'
import { Provider } from "react-redux";
import store from "../redux/store";
import { contentDiv, raamTarakaMantraDiv } from "../pop-up";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Provider store={store}>
        <Navbar />

        <Switch>
          <Route exact path="/">
            {isOpen && <PopUp content={contentDiv} handleClose={togglePopup} />}
            {raamTarakaMantraDiv}
            <Counter />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/yagnas">
            <Yagnas />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
