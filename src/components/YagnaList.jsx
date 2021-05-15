import React from "react";
import { yagnaList } from "../yagnaList"
import SingleYagna from './SingleYagna'
import "../yagna.css"

const  YagnaList = () => {
  return (
    <section className="yagna-section">
      <h2 className="yagna-section-title">Japa Yagna</h2>
      <div className="yagna-center">
        {yagnaList.map((yagna) => {
          return <SingleYagna key={yagna.id} {...yagna} />
        })}
      </div>
    </section>
  );
}

export default YagnaList;
