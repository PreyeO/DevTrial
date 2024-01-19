import { Link } from "react-router-dom";
import finance from "../../assets/finance.gif";

const Hero = () => {
  return (
    <section className="">
      <div className="container mx-auto pb-16 mt-7">
        <div className="hero-card flex justify-center flex-wrap lg:flex-nowrap h-[695px]">
          <div className="flex flex-col justify-center border border-solid items-center">
            <div className="w-[80%] text-left flex flex-col gap-5 ">
              <h1 className="text-5xl  font-extrabold text-[#d9dcd6]">
                Welcome to DevTrial
              </h1>
              <p className="text-3xl font-extrabold">
                {" "}
                Redefining Tech Recruitment with Real-Time Coding Interviews
              </p>

              <p className="text-lg text-[#fec605] ">
                Revolutionize your hiring process with DevTrial, where
                recruiters meet developers in a dynamic coding environment
              </p>
              <p className="text-lg">
                Say goodbye to traditional interviews and embrace the future of
                tech recruitmen
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <Link to="/recruitersignup">
                <button className="bg-[#fec605] p-5 border-[3px] border-solid text-[#0d1b2a] w-full">
                  RECRUITER
                </button>
              </Link>
              <Link to="/devsignup">
                <button className="bg-transparent p-5 border-[3px] border-solid w-full">
                  DEVELOPER
                </button>
              </Link>
              {/* <Link to="/">
                <button className="bg-[#d9dcd6] p-5 border-[3px] border-solid text-[#0d1b2a]">
                  READ MORE
                </button>
              </Link> */}
            </div>
          </div>
          <div className="w-[80%] border-[5px] border-solid">
            <img src={finance} alt="finance" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
