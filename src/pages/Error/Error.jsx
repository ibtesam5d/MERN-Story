import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // 👇 Redirects to home page
      navigate("/", { replace: true });
    }, 1500);
  }, []);
  return (
    <div>
      <h1>Oops! Your requested page not found,</h1>
      <h1>Redirecting you to home-page</h1>
    </div>
  );
};

export default Error;
