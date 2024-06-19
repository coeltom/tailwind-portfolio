import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { IoMenu, IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="w-screen h-[10vh] ">
      <nav className="h-full  flex justify-between px-4">
        <div className="flex items-center font-bold">
          <h1>T.C.</h1>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-6">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/work">My Work</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
            <li>
              <a href="https://github.com/coeltom">
                <FaGithub size={20} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com">
                <FaLinkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center md:hidden">
          {nav ? (
            <IoClose size={30} onClick={toggleNav} />
          ) : (
            <IoMenu size={30} onClick={toggleNav} />
          )}
        </div>
        {nav && (
          <div className=" md:hidden transition ease-in-out absolute left-0 bg-[#1a222d] h-screen w-80">
            <h1 className="m-6 font-bold">T.C.</h1>
            <ul className="flex flex-col gap-3">
              <li className="text-center text-xl">
                <a href="#">Home</a>
              </li>
              <li className="text-center text-xl ">
                <a href="#">My Work</a>
              </li>
              <li className="text-center text-xl">
                <a href="#">About Me</a>
              </li>
              <li className="text-center text-xl">
                <a href="#">Contact Me</a>
              </li>
              <li className="flex justify-center ">
                <a href="https://github.com/coeltom">
                  <FaGithub size={30} />
                </a>
              </li>
              <li className="flex justify-center">
                <a href="https://linkedin.com">
                  <FaLinkedin size={30} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
