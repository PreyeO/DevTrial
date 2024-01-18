/* eslint-disable react/prop-types */

const CtaBtn = ({ label, type, className, color, borderColor }) => {
  return (
    <button
      type={type}
      className={`${className} border-[5px]`}
      style={{ color: color, borderColor: borderColor }}
    >
      {label}
    </button>
  );
};

export default CtaBtn;
