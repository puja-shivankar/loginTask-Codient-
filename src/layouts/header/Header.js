import React from "react";
import '../../styles/header.css';
import { useNavigate } from "react-router-dom";
import logo1 from '../../assets/logo1.svg'
import LogoutIcon from '@mui/icons-material/Logout';
export const Header = () => {
  const navigate= useNavigate();
  return (
    <div className="header bg-dark">
      <a href="/" className="logo">
      <img src={logo1} width="30" height="30" alt="not image" className="logoimg"/>
      </a>
      <div className="header-right">
        
        
      <li
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          <LogoutIcon/> Logout
        </li>
        
      </div>
    </div>
  );
};
