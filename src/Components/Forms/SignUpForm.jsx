import { createUserWithEmailAndPassword } from "firebase/auth";
import SubmitBtn from "../Buttons/SubmitBtn";
import TextInputs from "../Inputs/TextInput";
import { useState } from "react";
import { auth } from "../../firebase_configue";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name
      );
      const userType =
        location.pathname === "/recruitersignup" ? "recruiter" : "developer";
      localStorage.setItem("accessToken", userCredentials.user.accessToken);
      localStorage.setItem("user", JSON.stringify(userCredentials.user));
      localStorage.setItem("userType", userType);
      toast.success("Account Successfully Created");
      const currentRoute = location.pathname;
      let destinationRoute = "/talent"; // Default destination route

      if (currentRoute === "/recruitersignup") {
        destinationRoute = "/recruiter";
      }
      setTimeout(() => {
        navigate(destinationRoute);
      }, 600);
    } catch (error) {
      toast.error(`Failed: ${error.message}`);
    }
  };
  return (
    <form
      className="flex flex-col gap-5 lg:w-[35rem] md:w-[30rem] 
    w-[15rem] mt-7 auth-form"
      onSubmit={handleSubmit}
    >
      <TextInputs
        placeholder="Enter your first name"
        type="text"
        label="Full name"
        onChange={(e) => setName(e.target.value)}
      />

      <TextInputs
        placeholder="Enter your email"
        type="email"
        label="email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInputs
        placeholder="Use atleast 10 character and number"
        type="password"
        label="Create password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="mt-4">
        <SubmitBtn type="submit" label="Sign up" />
      </div>
      <ToastContainer />
    </form>
  );
};

export default SignUpForm;
