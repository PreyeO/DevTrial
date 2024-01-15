import { useNavigate, useLocation } from "react-router-dom";
import { provider, auth } from "../../firebase_configue";
import { signInWithPopup } from "firebase/auth";
import GoogleImage from "../../assets/google.png";

const GoogleAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("accessToken", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));

      const currentRoute = location.pathname;
      let destinationRoute = "/talent"; // Default destination route

      if (currentRoute === "/recruitersignup") {
        destinationRoute = "/recruiter";
      }

      navigate(destinationRoute);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="auth-logos">
      <button
        className="bg-white rounded-full"
        onClick={signInWithGoogle}
        type="submitt"
      >
        <img src={GoogleImage} alt="google icon" className="w-[50px] " />
      </button>
    </div>
  );
};

export default GoogleAuth;
