/* eslint-disable react/prop-types */
function Buttons({ variant, label }) {
  const buttonStyles = {
    primary:
      "font-playfair border-2 border-[#ffebd6] p-3 pl-6 pr-6 text-2xl hover:bg-[#ffebd6] hover:text-black rounded-md",
    secondary:
      "font-playfair border-2 border-[#473429] p-3 pl-6 pr-6  text-2xl hover:bg-[#473429] hover:text-[#ffebd6] rounded-md",
    terciary: "font-playfair border-2 border-[#ffebd6] p-3 pl-6 pr-6 text-2xl rounded-md",
  };
  return <button className={buttonStyles[variant]}>{label}</button>;
}

export default Buttons;
