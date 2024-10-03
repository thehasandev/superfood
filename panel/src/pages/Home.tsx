import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleLogout} className="bg-red-500 m-10 p-5">
        Log Out
      </button>
    </div>
  );
}
