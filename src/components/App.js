import React from "react";
import Navbar from "./Navbar";
import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "../redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
