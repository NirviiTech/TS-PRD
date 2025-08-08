import { useAuth } from "./useAuth";

export const useRole = () => {
  const auth = useAuth();
  const user = auth?.user;
  return user?.role || "Guest";
};
