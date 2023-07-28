import React, { useState } from "react";

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={props.image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
          <h4 className="tour-price">${props.price}</h4>
        </div>
        <p>
          {readMore ? props.info : `${props.info.substr(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "view less" : "read more"}
          </button>
        </p>
        <button onClick={() => props.removeTours(props.id)} className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
