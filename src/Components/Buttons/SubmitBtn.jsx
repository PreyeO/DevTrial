/* eslint-disable react/prop-types */

const SubmitBtn = ({ label, type, onClick }) => {
  return (
    <button
      type={type}
      className="h-[55px] w-full bg-[#0085FF]
     text-white rounded-md md:text-xl text-base  btn"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SubmitBtn;
