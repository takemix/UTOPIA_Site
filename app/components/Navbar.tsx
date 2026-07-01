"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
      <div className="navbar__inner">
        <span className="navbar__logo">UTOPIA</span>
        <div className="navbar__links">
          <a href="#lineup">LINE-UP</a>
          <a href="#profile">PROFILE</a>
          <a href="#info">INFO</a>
          <a href="#venue">VENUE</a>
          <a href="#contact">CONTACT</a>
        </div>
        <a href="#info" className="navbar__cta">
          <span className="navbar__cta-main">Charge Free!</span>
          <span className="navbar__cta-sub">(1Drink Order)</span>
        </a>
      </div>
    </nav>
  );
}
