import React, { useState, useEffect } from "react";

export const useHeaderVisible = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isVisible };
};

export const useHeader = () => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setIsLogged(false);               
    navigate("/");                    
  };

  return { isLogged, handleLogout}
}
