import FeatureBox from "../Boxes/FeatureBox";

const Features = () => {
  return (
    <section className="bg-[#fec605]">
      <div className="container mx-auto">
        <div className="hero-card flex px-[2%] justify-center items-center gap-4 flex-wrap">
          <FeatureBox className="bg-[#0d1b2a] border-[5px] border-solid" />
          <FeatureBox className="bg-[#d9dcd6] border-[5px] border-[#0d1b2a]" />
          <FeatureBox className="bg-transparent border-[5px] border-solid" />
        </div>
      </div>
    </section>
  );
};

export default Features;
