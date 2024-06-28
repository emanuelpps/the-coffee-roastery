import React from 'react';

const ButtonVariants = {
  primary: 'font-playfair border-2 border-[#ffebd6] p-3 pl-6 pr-6 text-2xl hover:bg-[#ffebd6] hover:text-black rounded-md',
  secondary: 'font-playfair border-2 border-[#473429] p-3 pl-6 pr-6 text-2xl hover:bg-[#473429] hover:text-[#ffebd6] rounded-md',
  tertiary: 'font-playfair border-2 border-[#ffebd6] p-3 pl-6 pr-6 text-2xl rounded-md',
};

const Buttons = ({ variant = 'primary', label, onClick, style}) => (
  <button className={ButtonVariants[variant]} onClick={onClick} style={style}>
    {label}
  </button>
);

export default Buttons;
