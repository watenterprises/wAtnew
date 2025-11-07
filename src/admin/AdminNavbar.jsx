import { Link, useNavigate } from "react-router-dom";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  useEffect(() => {
    const authInstance = getAuth();
    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      if (user) {
        console.log("✅ Logged in as:", user.email);
      } else {
        console.log("❌ Not logged in");
      }
    });

    // cleanup to avoid memory leaks
    return () => unsubscribe();
  }, []);

  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-6 py-3">
      <h1 className="text-lg font-bold">Admin Panel</h1>
      <div className="flex gap-6">
        <Link to="/admin/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/admin/projects" className="hover:underline">
          Projects
        </Link>
        <Link to="/admin/trash" className="hover:underline">🗑️ Trash</Link>
        <button onClick={handleLogout} className="bg-red-600 px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
}
