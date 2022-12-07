import React from "react";
import { Footer } from "../../layouts/footer/Footer";
import { Header } from "../../layouts/header/Header";
import { Sidenav } from "../../layouts/sidenav/Sidenav";
import { Media } from "../../layouts/social_media/Media";

export const Dashboard = (props) => {
  return (
    <div>
      <Header></Header>
      <div>
        <Sidenav></Sidenav>
        
        <div>{props.children}</div>
        <div className="media-i"><Media></Media></div>
        
      </div>

      <Footer></Footer>
    </div>
  );
};
