/* eslint-disable react/prop-types */

const CtaBtn = ({ label, type, className }) => {
  return (
    <button type={type} className={`${className} w-full`}>
      {label}
    </button>
  );
};

export default CtaBtn;
