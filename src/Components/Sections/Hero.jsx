import { Link } from "react-router-dom";
import finance from "../../assets/finance.gif";

const Hero = () => {
  return (
    <section className="">
      <div className="container">
        <div className="hero-card flex justify-between px-[2%]">
          <div className="flex flex-col justify-center">
            <div className="w-[70%]">
              <h1 className="text-5xl">THE NEXT GEN</h1>
              <h1 className="text-5xl">OF TECH TALENT</h1>
              <p className="text-2xl">
               On a mission to close the gender gap in tech by providing
                employment through free education.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 ">
              <Link to="/devsignup">
                <button className="bg-white text-red-500">DEVELOPER</button>
              </Link>
              <Link to="/recruitersignup">
                <button className="bg-white text-green-500">RECRUITER</button>
              </Link>
            </div>
          </div>
          <div className="w-[70%]">
            <img src={finance} alt="finance" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
