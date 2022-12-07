import React from "react";
import "../../styles/footer.css";
export const Footer = () => {
  return (
    <>
      <nav className=" fixed-bottom navbar-light bg-dark">
        <div className="container-fluid">
            <p className="text-center text-info badge badge-primary text-wrap"><a href="https://www.codiant.com">@codiant.com</a></p>
        </div>
      </nav>
    </>
  );
};
