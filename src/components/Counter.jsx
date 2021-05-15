//
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, decreaseCount, resetCount, setCount } from "../redux";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import RefreshIcon from "@material-ui/icons/Refresh";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section className="section-center">
      <div className="count-container">
        <h3> Count </h3>
        <input
          type="text"
          pattern="[0-9]+"
          className="count-box"
          value={count}
          onChange={(e) => dispatch(setCount(e.target.value))}
        />
      </div>
      <div className="button-container">
        {/* eslint-disable-next-line */}
        <button className="btn" onClick={() => dispatch(addCount())}>
          <AddIcon fontSize="large" />
        </button>
        {/* eslint-disable-next-line */}
        <button className="btn" onClick={() => dispatch(decreaseCount())}>
          <RemoveIcon fontSize="large" />
        </button>
        {/* eslint-disable-next-line */}
        <button className="btn" onClick={() => dispatch(resetCount())}>
          <RefreshIcon fontSize="small" />
        </button>
      </div>
    </section>
  );
}

export default Counter;
