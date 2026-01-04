
import { Link, NavLink } from "react-router-dom";
import { IoLogoModelS } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut, IoMenu } from "react-icons/io5";
import { ImBoxAdd } from "react-icons/im";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Logo from "./Logo";
import { FaUserCircle } from "react-icons/fa";
import { MdDashboard, MdModelTraining } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";


const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium relative overflow-hidden group ${isActive
      ? "text-blue-500 bg-blue-500/10"
      : "text-gray-300 hover:text-white hover:bg-white/5"
    }`;

  return (
    <div
      className={`fixed top-0 w-full z-[9999] transition-all duration-300 font-rajdhani ${scrolled
        ? "bg-[#0F0716]/95 backdrop-blur-xl shadow-2xl border-b border-purple-500/20  min-h-[20px]"
        : "bg-[#1A0F2E]/80 backdrop-blur-md border-b border-white/5 min-h-[20px]"
        }`}
    >
      <div className="navbar container mx-auto px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle md:hidden text-white"
            >
              <IoMenu className="text-2xl" />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-[#0F0716]/95 backdrop-blur-xl rounded-2xl w-64 border border-white/10 text-gray-200"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${isActive ? "bg-blue-600/20 text-blue-400" : "hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <GoHomeFill className="text-lg" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/all-models"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${isActive ? "bg-purple-600/20 text-purple-400" : "hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <IoLogoModelS className="text-lg" /> All Models
                </NavLink>
              </li>

              {user && (
                <>
                  <div className="divider my-1 border-white/5 opacity-50"></div>
                  <li>
                    <NavLink
                      to={"/dashboard"}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${isActive ? "bg-indigo-600/20 text-indigo-400" : "hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      <MdDashboard className="text-lg" /> Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/my-models"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${isActive ? "bg-pink-600/20 text-pink-400" : "hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      <IoLogoModelS className="text-lg" /> My Models
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/my-downloads"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${isActive ? "bg-teal-600/20 text-teal-400" : "hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      <BiPurchaseTagAlt className="text-lg" /> My Purchases
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/add-model"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${isActive ? "bg-green-600/20 text-green-400" : "hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      <ImBoxAdd className="text-lg" /> Add Model
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Logo />
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="flex items-center gap-2">
            <li>
              <NavLink to={"/"} className={navLinkClass}>
                <GoHomeFill /> <span className="relative z-10">Home</span>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/all-models"} className={navLinkClass}>
                <MdModelTraining /> <span className="relative z-10">Explore Models</span>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className={navLinkClass}>
                <IoIosContact /> <span className="relative z-10">Contact</span>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard"}
                end
                className={navLinkClass}
              >
                <MdDashboard className="text-lg" /> Dashboard
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </NavLink>
            </li>

          </ul>
        </div>

        <div className="navbar-end gap-4">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar ring-2 ring-white/10 hover:ring-purple-500 transition-all duration-300"
              >
                <div className="w-9 rounded-full overflow-hidden">
                  {user.photoURL ? (
                    <img
                      alt="User avatar"
                      src={user.photoURL}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <FaUserCircle className="w-full h-full text-gray-400 bg-[#1A0F2E]" />
                  )}
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow-2xl bg-[#1A0F2E]/95 backdrop-blur-xl rounded-2xl w-64 border border-white/10 text-gray-200"
              >
                <div className="px-4 py-3 mb-2 border-b border-white/10 bg-white/5 rounded-xl">
                  <p className="font-bold text-white truncate font-exo text-lg">
                    {user.displayName}
                  </p>
                  <p className="text-xs text-gray-400 truncate">{user.email}</p>
                </div>

                <li>
                  <Link
                    to={"/dashboard"}
                    className="hover:bg-purple-500 hover:text-white rounded-lg py-2"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/my-models"}
                    className="hover:bg-blue-500 hover:text-white rounded-lg py-2"
                  >
                    My Models
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/my-downloads"}
                    className="hover:bg-pink-500 hover:text-white rounded-lg py-2"
                  >
                    My Purchases
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/add-model"}
                    className="hover:bg-green-500 hover:text-white rounded-lg py-2"
                  >
                    Add New Model
                  </Link>
                </li>

                <div className="divider my-1 border-white/10"></div>

                <li>
                  <button
                    onClick={signOutUser}
                    className="text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg py-2 font-bold"
                  >
                    <IoLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/auth/login"}
              className="group relative px-6 py-2 overflow-hidden rounded-full bg-white text-black font-bold text-sm tracking-wider hover:text-white transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <IoLogIn /> Login
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          )}
        </div>
      </div>
    </div >
  );
};

export default NavBar;
