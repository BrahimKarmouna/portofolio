"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaHome, FaUser, FaList, FaBriefcase, FaEnvelope, FaComments } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const pathUrl = usePathname();

  return (
    <aside className={`aside ${open ? "open" : ""}`}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/" onClick={handleClose}>
            Lord Castillo
          </Link>
        </div>
        <ul className="nav">
          <li onClick={handleClose}>
            <Link href="/" className={`${pathUrl == "/" && "active"}`}>
              <FaHome /> Home
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/about"
              className={`${pathUrl == "/about" && "active"}`}
            >
              <FaUser /> About
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/services"
              className={`${pathUrl == "/services" && "active"}`}
            >
              <FaList /> Services
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/portfolio"
              className={`${pathUrl == "/portfolio" && "active"}`}
            >
              <FaBriefcase /> Portfolio
            </Link>
          </li>
          <li onClick={handleClose}>
            {/* <Link href="/blog" className={`${pathUrl == "/blog" && "active"}`}>
              <FaEnvelope /> Blog
            </Link> */}
          </li>
          <li onClick={handleClose}>
            <Link
              href="/contact"
              className={`${pathUrl == "/contact" && "active"}`}
            >
              <FaComments /> Contact
            </Link>
          </li>
        </ul>
        <div className="copyright">
          Created By 🖤 {" "} <br/>
          <a href="https://github.com/BrahimKarmouna" target="_blank" rel="noopener noreferrer">
            Lord Castillo
          </a>
        </div>
        
      </div>
    </aside>
  );
};

export default Sidebar;
