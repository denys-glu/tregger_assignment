import React from 'react'

const Button = ({ styles, onClickHandler, text }) => {
  return <button onClick={() => onClickHandler()} className={`btn ${styles}`}>{text}</button>
};

export default Button;
