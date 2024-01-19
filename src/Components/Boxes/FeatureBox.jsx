/* eslint-disable react/prop-types */

import CtaBtn from "../Buttons/CtaBtn";

const FeatureBox = ({
  className,
  text,
  CTA,
  color,
  borderColor,
  src,
  transform,
  marginTop,
}) => {
  return (
    <div className={`${className} w-[396px] min-h-[437px] pb-10 `}>
      <img
        src={src}
        alt="Thumbs up icon"
        className=" w-[150px] mx-auto"
        style={{ transform: transform }}
      />
      <div className="flex flex-col justify-center items-center mt-[-2rem] gap-2">
        <h2
          className="text-[34px] font-extrabold tracking-[1px] "
          style={{ marginTop: marginTop }}
        >
          {text}
        </h2>
        <CtaBtn
          className={` p-5 border-[3px] border-solid mt-6`}
          label={CTA}
          color={color}
          borderColor={borderColor}
        />
      </div>
    </div>
  );
};

export default FeatureBox;
