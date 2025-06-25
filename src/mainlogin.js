import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainLogin = () => {
  const text = "Go through the User Login and enter your credentials";
  const [displayedText, setDisplayedText] = useState(""); 
  const [index, setIndex] = useState(0); 
  useEffect(() => {
    if (index < text.length) {
      const interval = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]); 
        setIndex(index + 1); 
      }, 100); 

      return () => clearTimeout(interval); 
    }
  }, [index, text]);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: "url('back5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2 className="typing-text">{displayedText}</h2>

      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          display: "flex",
          gap: "15px",
        }}
        className="button-container"
      >
        <Link to="/admin">
          <button className="button admin-btn">Admin Login</button>
        </Link>
        <Link to="/login">
          <button className="button user-btn">User Login</button>
        </Link>
      </div>

      <style>
        {`
          .typing-text {
            font-size: 44px;
            font-weight: bold;
            color: white;
            padding: 10px 20px;
            border-radius: 10px;
            max-width: 80%;
            word-wrap: break-word;
          }

          .button {
            padding: 12px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            width: 150px;
            text-align: center;
          }

          .admin-btn {
            background-color: #3b5998;
            color: white;
          }

          .user-btn {
            background-color: #ffcc00;
            color: black;
          }

          @media (max-width: 768px) {
            .button-container {
              position: static;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 10px;
            }

            .typing-text {
              font-size: 18px;
              padding: 8px 15px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MainLogin;
