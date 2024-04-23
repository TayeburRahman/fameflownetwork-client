import { useState } from "react";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const navItems = (
    <div
      className={clsx(
        "navs flex flex-col md:flex-row md:justify-between gap-7 p-[15%] me-20 md:p-0 shadow-md md:shadow-none absolute md:static w-full md:w-auto duration-500 md:duration-0 ease-linear nav-items  navbar-for-mob ",
        isOpen ? "top-[10vh]" : "-top-[100vh]"
      )}
    >
      <a
        href="#packages"
        // spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={() => handleLinkClick("home")}
        className={`
    ${activeLink === "home"
            ? "text-black md:border-b-2 md:border-purple-700"
            : "text-black text-5xl"
          }
  `}
      >
        Packages
      </a>


      <a
        href="#testimonials"
        // spy={true}
        smooth={true}
        offset={-40}
        duration={500}
        onClick={() => handleLinkClick("testimonials")}
        className={
          `${activeLink === "testimonials"
            ? "text-black md:border-b-2 md:border-purple-700"
            : "text-black"
          }`}
      >
        Reviews
      </a>

      <NavLink
        to="/sample-reports"
        spy={true}
        // smooth={true}
        offset={-40}
        duration={500}
        onClick={() => handleLinkClick("sample-reports")}
        className={
          activeLink === "sample-reports"
            ? "text-black md:border-b-2 md:border-purple-700"
            : "text-black"
        }
      >
        Sample Reports
      </NavLink>
      <NavLink
        to="/dashboard"
        spy={true}
        // smooth={true}
        offset={-40}
        duration={500}
        onClick={() => handleLinkClick("dashboard")}
        className={
          activeLink === "dashboard"
            ? "text-black md:border-b-2 md:border-purple-700"
            : "text-black"
        }
      >
        Admin
      </NavLink>

      <a
        href="#faq"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
        onClick={() => handleLinkClick("faq")}
        className={
          activeLink === "faq"
            ? "text-black md:border-b-2 md:border-purple-700"
            : ""
        }
      >
        Guides
      </a>

      <a
        href="#pricing"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
        onClick={() => handleLinkClick("Pricing")}
        className={
          activeLink === "Pricing"
            ? "text-black md:border-b-2 md:border-purple-700"
            : ""
        }
      >
        Pricing
      </a>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
        onClick={() => handleLinkClick("contact")}
        className={
          activeLink === "contact"
            ? "text-black md:border-b-2 md:border-purple-700"
            : ""
        }
      >
        Order Now
      </Link>
      <NavLink
        to="/user-dashboard"
        spy={true}
        // smooth={true}
        offset={-40}
        duration={500}
        onClick={() => handleLinkClick("user-dashboard")}
        className={
          activeLink === "user-dashboard"
            ? "text-black md:border-b-2 md:border-purple-700"
            : "text-black"
        }
      >
        User
      </NavLink>
    </div>
  );

  return (
    <nav className=" top-0 left-0 right-0 z-20 p-2 ">
      <div className="wrapper h-[10vh] flex items-center justify-between">
        {/* title */}

        {/* <h1 className="text-xl font-bold"> */}
        <a href="/">
          <img src='https://fameflownetwork.com/wp-content/uploads/2023/08/Fame_Flow_logo-preview-e1692368073160.png' alt="Floor Plan" width={'auto'} className="max-md:-me-16" /></a>
        {/* </h1> */}

        {/* toggle nav */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-[1%] md:hidden text-2xl"
        >
          {isOpen ? <IoClose /> : <FiMenu />}
        </button>

        {/* links */}
        <>{navItems}</>
      </div>
    </nav>
  );
};

export default Navbar;
