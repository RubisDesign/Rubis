import React from "react";

const Header = () => {
  const scrollToNextSection = () => {
    // Trouve la prochaine section en partant du header
    const nextSection = document.getElementById("about");
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header id="header" className="header">
      <div className="header__content">
        <h1>Become stronger</h1>
        <p>by MB-fit</p>
      </div>
      <div className="header__scroll-indicator" onClick={scrollToNextSection}>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
