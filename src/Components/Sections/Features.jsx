import FeatureBox from "../Boxes/FeatureBox";
import Thumbs from "../../assets/thumbsup.png";
import HandShake from "../../assets/handshake.gif";
import Laptop from "../../assets/laptop.png";

const Features = () => {
  return (
    <section className="bg-[#fec605]">
      <div className="container mx-auto pb-16">
        <div className="hero-card flex px-[2%] justify-center items-center gap-4 flex-wrap mt-16">
          <FeatureBox
            className="bg-[#0d1b2a] border-[5px] border-white "
            text="PREPARE OR TAKE YOUR CODING INTERVIEW TODAY!"
            CTA="Join DevTrial"
            color="#d9dcd6"
            borderColor="#d9dcd6"
            src={Laptop}
            transform="translateY(-24px)"
            marginTop={25}
          />

          <FeatureBox
            className="bg-[#d9dcd6] border-[5px] border-[#0d1b2a] "
            text="LOOKING TO HIRE AND TEST DEVELOPERS SKILLS?"
            CTA="Sign Up Now"
            color="#0d1b2a"
            borderColor="#0d1b2a"
            src={HandShake}
            transform="translateY(-24px)"
            marginTop={15}
          />
          <FeatureBox
            className="bg-transparent border-[5px] border-white "
            text="GET TO KNOW MORE ABOUT DEVTRIAL TODAY!"
            CTA="Learn More"
            color="white"
            borderColor="white"
            src={Thumbs}
            transform="translateY(-74px)"
            marginTop={-30}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
