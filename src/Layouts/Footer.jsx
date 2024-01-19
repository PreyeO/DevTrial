import SocialsLogo from "../Components/Logos/socialsLogo";
import Linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import GitHub from "../assets/github.png";
import Blog from "../assets/hashnode.png";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto pb-16">
        <div className="hero-card px-[2%] text-white mt-16 flex justify-evenly">
          <div className="flex flex-col gap-6">
            <h3>LEGAL DOCS & FAQS</h3>
            <ul className="flex flex-col gap-4">
              <li>Privacy Policy</li>
              <li>Data Policy</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h3> QUICK LINKS</h3>
            <div className="flex gap-7">
              <button className="w-[38px] h-[38px] bg-white rounded-full hover:bg-[#fec605] ">
                <SocialsLogo src={Linkedin} />
              </button>
              <button className="w-[38px] h-[38px] bg-white rounded-full hover:bg-[#fec605]">
                <SocialsLogo src={Instagram} />
              </button>
              <button className="w-[38px] h-[38px] bg-white rounded-full hover:bg-[#fec605]">
                <SocialsLogo src={GitHub} />
              </button>
              <button className="w-[38px] h-[38px] bg-white rounded-full hover:bg-[#fec605]">
                <SocialsLogo src={Blog} />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1>GET SOCIAL WITH US</h1>
            <ul className="flex flex-col gap-4">
              <li>HomePage</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
