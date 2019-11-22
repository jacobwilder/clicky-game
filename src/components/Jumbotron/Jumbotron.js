import React from 'react';

const Jumbotron = props => {
  return (
    <div
      className={`
      jumbotron jumbotron-fluid p-2 text-center ${
        props.dark ? 'bg-dark text-light' : 'bg-light text-dark'
      } `}>
      <span className="m-3 jumboTitle" style={{ fontsize: 15 }}>Clickerific!</span>
      <span className="m-3" style={{ fontSize: 30 }}>
        Score: {props.score} || High Score: {props.highScore}
      </span>
    </div>
  );
};

export default Jumbotron;
