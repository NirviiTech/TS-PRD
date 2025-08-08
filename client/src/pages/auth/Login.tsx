import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const dummyUser = {
      id: "USR001",
      name: "Demo Admin",
      email: "dummy234@gmail.com",
      role: "Founder" as const
    };
    login(dummyUser);
    navigate("/dashboard/admin");
  }, [login, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Logging you in...<br/>Using dummy account <strong>dummy234@gmail.com</strong></p>
    </div>
  );
}
