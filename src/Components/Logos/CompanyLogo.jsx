/* eslint-disable react/prop-types */

const CompanyLogo = ({ src }) => {
  return (
    <img
      src={src}
      alt="companies logo"
      className="md:w-[150px] w-[100px] px-2"
    />
  );
};

export default CompanyLogo;
