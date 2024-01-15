// import { NavLink } from "react-router-dom";
import GitHubAuth from "../../Components/Forms/GitHubAuth";
import GoogleAuth from "../../Components/Forms/GoogleAuth";
import LoginForm from "../../Components/Forms/LoginForm";
import LoginImage from "../../assets/man-recruiter.png";
import LoginSmiley from "../../assets/login-smiley.png";

const Login = () => {
  return (
    <main className="font-plusJakarta flex-1 text-white">
      <div className="container mx-auto">
        <div className="card flex xl:justify-around justify-center items-center ">
          <div>
            <img
              src={LoginImage}
              alt="image of a talent for signup"
              className="w-[40rem] h-auto hidden xl:block image"
            />
          </div>
          <div className=" flex flex-col justify-center items-center auth-header gap-4">
            <div className="flex gap-2 ">
              <p className="md:text-3xl text-xl">Welcome Back! </p>
              <img src={LoginSmiley} alt="login smiley" className="w-[40px]" />
            </div>
            <div className=" header-text">
              <p className="md:text-lg text-base">Kindly login with:</p>
            </div>
            <div className="flex gap-6 justify-center ">
              <GoogleAuth />
              <GitHubAuth />
            </div>

            <LoginForm />
            {/* <NavLink to="/signup">
            <p>{`Don't`} have an account? Signup</p>
          </NavLink> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
