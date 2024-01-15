import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase_configue";
import Avatar from "../assets/icon.png";

const DevDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("User:", user);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-white">
      <div>
        WELCOME MY FAVOURITE Developer
        <h2>{user && (user.displayName || "Dev")}</h2>
        <h2>{user && user.email}</h2>
        {user && (
          <div>
            <img src={user.photoURL || Avatar} alt="user photo" />
          </div>
        )}
      </div>
      <button onClick={handleLogout} type="submit">
        Logout
      </button>
    </div>
  );
};

export default DevDashboard;
