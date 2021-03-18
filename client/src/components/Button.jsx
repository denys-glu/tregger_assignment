import React from 'react'

const Button = ({ color, onClickHandler, text }) => {
  return <button onClick={() => onClickHandler()} className={`btn btn-${color}`}>{text}</button>
};

export default Button;
