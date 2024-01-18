/* eslint-disable react/prop-types */

import CtaBtn from "../Buttons/CtaBtn";

const FeatureBox = ({ className, text, CTA, color, borderColor, src }) => {
  return (
    <div className={`${className} w-[396px] h-[400px] `}>
      <img
        src={src}
        alt="Thumbs up icon"
        className="translate-y-[-24px] w-[150px] mx-auto"
      />
      <div className="flex flex-col justify-center items-center mt-[-2rem] gap-2">
        <h2 className="text-[34px] font-extrabold tracking-[1px] ">{text}</h2>
        <CtaBtn
          className={` p-5 border-[3px] border-solid`}
          label={CTA}
          color={color}
          borderColor={borderColor}
        />
      </div>
    </div>
  );
};

export default FeatureBox;
