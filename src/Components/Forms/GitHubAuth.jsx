import { useNavigate, useLocation } from "react-router-dom";
import { auth, gitHubProvider } from "../../firebase_configue";
import { signInWithPopup } from "firebase/auth";
import GIthubImage from "../../assets/github.png";

const GitHubAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const signInWithGitHub = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, gitHubProvider);
      localStorage.setItem("accessToken", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      console.log(result);
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
        onClick={signInWithGitHub}
        type="submitt"
      >
        <img src={GIthubImage} alt="google icon" className="w-[50px] " />
      </button>
    </div>
  );
};

export default GitHubAuth;
