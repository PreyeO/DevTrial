import SubmitBtn from "../Buttons/SubmitBtn";
import TextInputs from "../Inputs/TextInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase_configue";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      const userType = localStorage.getItem("userType") || "developer";
      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Account Successfully Created");
      const destinationRoute =
        userType === "recruiter" ? "/recruiter" : "/talent";
      setTimeout(() => {
        navigate(destinationRoute);
      }, 600);
    } catch (error) {
      toast.error(`Failed: ${error.message}`);
    }
  };
  return (
    <form
      className="flex flex-col gap-5 lg:w-[35rem]
     md:w-[30rem] w-[15rem]  auth-form"
      onSubmit={handleSubmit}
    >
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
        <SubmitBtn type="submit" label="Login" />
      </div>
      <ToastContainer />
    </form>
  );
};

export default LoginForm;
