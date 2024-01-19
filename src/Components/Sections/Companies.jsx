import Marquee from "react-fast-marquee";
import CompanyLogo from "../Logos/CompanyLogo";
import Slack from "../../assets/slack.webp";
import BBC from "../../assets/bbc.png";
import Apple from "../../assets/apple.png";
import NASA from "../../assets/NASA.png";
import Tesla from "../../assets/tesla.png";
import Spotify from "../../assets/spotify.png";
import Netflix from "../../assets/Netflix.jpg";
import LG from "../../assets/lg.png";
import Youversion from "../../assets/youversion.jpg";
import Harvesters from "../../assets/harvesters.jpg";

const Companies = () => {
  return (
    <section className="bg-[#d9dcd6]">
      <div className="container mx-auto pb-16">
        <div className="hero-card px-[2%] text-[#0d1b2a] mt-16">
          <h2 className="tracking-[0.8px] md:text-[59px] font-extrabold text-[35px]">
            <span className="text-white">COMPANIES </span>WE WORK WITH
          </h2>
          <div className="flex flex-col gap-7 mt-16">
            <div className="flex">
              <Marquee autoFill pauseOnClick>
                <CompanyLogo src={Tesla} />
                <CompanyLogo src={Apple} />
                <CompanyLogo src={BBC} />
                <CompanyLogo src={NASA} />
                <CompanyLogo src={Harvesters} />
              </Marquee>
            </div>
            <div className="flex">
              <Marquee autoFill pauseOnClick direction="right">
                <CompanyLogo src={Netflix} />
                <CompanyLogo src={Spotify} />
                <CompanyLogo src={LG} />
                <CompanyLogo src={Youversion} />
                <CompanyLogo src={Slack} />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
