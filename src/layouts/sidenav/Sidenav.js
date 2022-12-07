import React from "react";
import "../../styles/sidenav.css";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
export const Sidenav = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-dark">
      <ul>
      
        <li onClick={()=>{navigate("/home");}}><HomeIcon/>&ensp;Home</li>
        <li onClick={()=>{navigate("/profile");}}><PersonIcon/>&ensp;Profile</li>
        <li onClick={()=>{navigate("/about");}} ><InfoOutlinedIcon/>&ensp;About</li>
        <li onClick={()=>{navigate("/contact");}}><CallIcon/>&ensp;Contact</li>
       
      </ul>
      <div className="col">
     
      </div>
    </div>
  );
};
