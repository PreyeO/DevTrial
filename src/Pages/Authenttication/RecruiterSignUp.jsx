import { NavLink } from "react-router-dom";
import SignUpForm from "../../Components/Forms/SignUpForm";
import SignupImage from "../../assets/recruiter.png";
import GoogleAuth from "../../Components/Forms/GoogleAuth";
import GitHubAuth from "../../Components/Forms/GitHubAuth";
import SignupSmiley from "../../assets/signup-smiley.png";

const RecruiterSignUp = () => {
  return (
    <main className="font-plusJakarta  flex-1 text-white">
      <div className="container mx-auto">
        <div className="card flex xl:justify-around justify-center items-center ">
          <div>
            <img
              src={SignupImage}
              alt="image of a talent for signup"
              className="w-[25rem] hidden xl:block signup-image"
            />
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex gap-2  auth-header">
                <p className="md:text-3xl text-xl ">Good To Have You Here! </p>
                <img
                  src={SignupSmiley}
                  alt="login smiley"
                  className="w-[40px]"
                />
              </div>
              <div className=" header-text">
                <p className=" md:text-lg text-base">
                  Kindly create your account below
                </p>
              </div>

              <div className="flex gap-6 justify-center ">
                <GoogleAuth />
                <GitHubAuth />
              </div>

              <SignUpForm />
            </div>

            <p className="text-center span-link ">
              Already have an account?{" "}
              <NavLink to="/login">
                {" "}
                <span>Login</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecruiterSignUp;
