import React from 'react'

const Button = ({ style, onClickHandler, text }) => {
  return <button onClick={() => onClickHandler()} className={`btn ${style}`}>{text}</button>
};

export default Button;
