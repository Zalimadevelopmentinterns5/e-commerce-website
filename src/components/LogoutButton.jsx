import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LogoutButton() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="fixed top-4 right-4 flex items-center gap-1.5 bg-white border shadow px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 z-50"
    >
      <LogOut size={16} />
      Log out ({user.role})
    </button>
  );
}