import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useHeader = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsLogged(false);
    setProfile(null);
    navigate("/");
  };

  useEffect(() => {
    const handleProfile = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId"); 
            
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/api/users/${userId}`, 
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        setProfile(response.data.data);
      } catch (err) {
        console.log("Erro ao carregar dados", err);
        if (err.response?.status === 401) {
          handleLogout(); 
        }
      } finally {
        setLoading(false);
      }
    };

    if (isLogged) {
      handleProfile();
    }
  }, [isLogged]);

  return { isLogged, handleLogout, profile, loading };
};