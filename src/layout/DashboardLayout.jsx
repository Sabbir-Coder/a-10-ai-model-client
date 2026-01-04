import { useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
    IoMdMenu
} from "react-icons/io";
import {
    FaUser, FaProductHunt, FaClipboardList, FaSignOutAlt, FaHome
} from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";

import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { MdDashboard } from "react-icons/md";

const DashboardLayout = () => {
    const { user, signOutUser } = use(AuthContext);
    const drawerRef = useRef(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOutUser();
        navigate('/');
    };

    const closeDrawer = () => {
        if (drawerRef.current) {
            drawerRef.current.checked = false;
        }
    };

    return (
        <div className="drawer lg:drawer-open font-rajdhani bg-[#0F0716] text-white min-h-screen">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" ref={drawerRef} />

            <div className="drawer-content flex flex-col">
                {/* Navbar for mobile */}
                <div className="w-full navbar bg-[#1A0F2E] border-b border-white/10 lg:hidden">
                    <div className="flex-none">
                        <label htmlFor="dashboard-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost text-white">
                            <IoMdMenu className="text-2xl" />
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 font-exo font-bold text-xl uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        Dashboard
                    </div>
                </div>

                {/* Page Content */}
                <div className="p-6 md:p-10 min-h-screen bg-[#0F0716] relative overflow-x-hidden">
                    {/* Background effects */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

                    <Outlet />
                </div>
            </div>

            <div className="drawer-side z-50">
                <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 min-h-full bg-[#1A0F2E] border-r border-white/10 text-gray-300 flex flex-col">
                    {/* Sidebar Header */}
                    <div className="mb-8 px-4 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full border-2 border-purple-500 p-1 mb-4 relative group">
                            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md group-hover:blur-lg transition-all"></div>
                            <img
                                src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                alt="User"
                                className="w-full h-full rounded-full object-cover relative z-10"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-white font-exo">{user?.displayName || 'User'}</h2>
                        <p className="text-xs text-gray-400 mt-1">{user?.email}</p>
                    </div>

                    <div className="divider border-white/10"></div>

                    {/* Menu Items */}
                    <ul className="space-y-2 flex-grow">
                        <li>
                            <Link to="/" onClick={closeDrawer} className="flex items-center gap-3 py-3 px-4 hover:bg-white/5 active:bg-purple-900/30 rounded-lg hover:text-white transition-all group">
                                <FaHome className="text-lg text-purple-400 group-hover:scale-110 transition-transform" />
                                <span className="font-semibold tracking-wide">Home</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/dashboard" onClick={closeDrawer} className="flex items-center gap-3 py-3 px-4 hover:bg-white/5 active:bg-purple-900/30 rounded-lg hover:text-white transition-all group">
                                <MdDashboard className="text-xl text-blue-400 group-hover:scale-110 transition-transform" />
                                <span className="font-semibold tracking-wide">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/add-model" onClick={closeDrawer} className="flex items-center gap-3 py-3 px-4 hover:bg-white/5 active:bg-purple-900/30 rounded-lg hover:text-white transition-all group">
                                <IoAddCircleSharp className="text-xl text-blue-400 group-hover:scale-110 transition-transform" />
                                <span className="font-semibold tracking-wide">Add Model</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/my-models" onClick={closeDrawer} className="flex items-center gap-3 py-3 px-4 hover:bg-white/5 active:bg-purple-900/30 rounded-lg hover:text-white transition-all group">
                                <FaProductHunt className="text-lg text-pink-400 group-hover:scale-110 transition-transform" />
                                <span className="font-semibold tracking-wide">My Models</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/my-downloads" onClick={closeDrawer} className="flex items-center gap-3 py-3 px-4 hover:bg-white/5 active:bg-purple-900/30 rounded-lg hover:text-white transition-all group">
                                <FaClipboardList className="text-lg text-cyan-400 group-hover:scale-110 transition-transform" />
                                <span className="font-semibold tracking-wide">My Purchases</span>
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-auto">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 py-3 px-4 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-all group font-bold tracking-wide mt-4"
                        >
                            <FaSignOutAlt className="group-hover:-translate-x-1 transition-transform" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
