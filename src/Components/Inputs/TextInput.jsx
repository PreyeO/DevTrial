/* eslint-disable react/prop-types */

const TextInputs = ({ placeholder, type, label, id, onChange, value }) => {
  return (
    <div>
      <label className="text-sm label text-white" htmlFor={id}>
        {label}
      </label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value}
        className=" input-text w-full h-12 px-3 mt-2 text-sm text-gray-700 placeholder-gray-400 border 
     rounded-md  xl:text-base"
        required
      />
    </div>
  );
};

export default TextInputs;
