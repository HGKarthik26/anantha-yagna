import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addCount, decreaseCount, resetCount } from '../redux'

function Counter() {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch();
  return (
    <section className='section-center'>
      <h1 className='title'> Count:  {count} </h1>
      <div className='button-container'>
        <button className='btn' onClick={ () => dispatch(decreaseCount()) } className="btn decrease">decrease</button>
        <button className='btn' onClick={ () => dispatch(resetCount()) }  className="btn reset">reset</button>
        <button className='btn' onClick={ () => dispatch(addCount()) } className="btn increase">increase</button>
      </div>
    </section>
  );
}

export default Counter;
