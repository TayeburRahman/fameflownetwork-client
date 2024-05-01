import clsx from 'clsx';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './index.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const [cookies, removeCookie] = useCookies(['auth']);
  const loggedIn = cookies.auth;

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const navItems = (
    <div
      className={clsx(
        'navs flex flex-col md:flex-row md:justify-between gap-7 p-[15%] me-20 md:p-0 shadow-md md:shadow-none absolute md:static w-full md:w-auto duration-500 md:duration-0 ease-linear nav-items  navbar-for-mob ',
        isOpen ? 'top-[10vh]' : '-top-[100vh]',
      )}
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Link
        to="/home"
        // spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={() => handleLinkClick('home')}
      >
        Home
      </Link>

      <a
        href="#publication"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
        onClick={() => handleLinkClick('#publication')}
        className={
          activeLink === '#publication'
            ? 'text-black md:border-b-2 md:border-purple-700'
            : ''
        }
      >
        Publication
      </a>
      <button className="button-61" role="button">
        CREATE AN ORDER
      </button>
    </div>
  );

  return (
    <nav className=" top-0 left-0 right-0 z-20 p-2 ">
      <div className="wrapper h-[10vh] flex items-center justify-between">
        {/* title */}

        {/* <h1 className="text-xl font-bold"> */}
        <a href="/">
          <img
            src="https://fameflownetwork.com/wp-content/uploads/2023/08/Fame_Flow_logo-preview-e1692368073160.png"
            alt="Floor Plan"
            width={'auto'}
            className="max-md:-me-16"
          />
        </a>
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

export default NavBar;
