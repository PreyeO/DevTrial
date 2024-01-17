/* eslint-disable react/prop-types */

import CtaBtn from "../Buttons/CtaBtn";

const FeatureBox = ({ className }) => {
  return (
    <div className={`${className} w-[396px] h-[400px] `}>
      FeatureBox
      <CtaBtn className="bg-black p-5 border-[3px] border-solid text-white" label="" />
    </div>
  );
};

export default FeatureBox;
