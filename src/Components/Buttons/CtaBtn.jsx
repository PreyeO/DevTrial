/* eslint-disable react/prop-types */

const CtaBtn = ({ label, type, className, color, borderColor }) => {
  return (
    <button
      type={type}
      className={`${className} border-[5px] w-[50%] text-base font-extrabold tracking-[1.2px]`}
      style={{ color: color, borderColor: borderColor }}
    >
      {label}
    </button>
  );
};

export default CtaBtn;
