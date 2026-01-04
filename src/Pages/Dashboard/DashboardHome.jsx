import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
    FaPlus,
    FaHeart,
    FaDownload,
    FaStar,
    FaBoxOpen
} from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardHome = () => {
    const { user } = use(AuthContext);

    const stats = [
        {
            title: "Total Models",
            value: "12", // Replace with real data if available
            icon: <FaBoxOpen className="text-2xl text-purple-400" />,
            color: "border-purple-500/30 bg-purple-500/10"
        },
        {
            title: "Downloads",
            value: "128",
            icon: <FaDownload className="text-2xl text-blue-400" />,
            color: "border-blue-500/30 bg-blue-500/10"
        },
        {
            title: "Favorites",
            value: "45",
            icon: <FaHeart className="text-2xl text-pink-400" />,
            color: "border-pink-500/30 bg-pink-500/10"
        },
        {
            title: "Rating",
            value: "4.8",
            icon: <FaStar className="text-2xl text-yellow-400" />,
            color: "border-yellow-500/30 bg-yellow-500/10"
        }
    ];

    return (
        <div className="space-y-8 font-rajdhani">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/10 pb-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold font-exo text-white">
                        Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{user?.displayName}</span>
                    </h1>
                    <p className="text-gray-400 mt-2">Here is what's happening with your models today.</p>
                </div>

                <Link to="/dashboard/add-model" className="btn bg-white text-black hover:bg-purple-500 hover:text-white border-none rounded-lg px-6 font-bold flex items-center gap-2">
                    <FaPlus /> Create New Model
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className={`p-6 rounded-2xl border backdrop-blur-sm ${stat.color} transition-all hover:scale-105`}>
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-white/5 rounded-xl">
                                {stat.icon}
                            </div>
                            <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white/60">+2.5%</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-sm text-gray-400">{stat.title}</p>
                    </div>
                ))}
            </div>

            {/* Recent Activity or Quick Actions Placeholders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <h3 className="text-xl font-bold text-white font-exo mb-6">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <Link to="/dashboard/add-model" className="p-4 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/5 hover:border-purple-500/30 transition-all group text-center">
                            <div className="w-10 h-10 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-3">
                                <FaPlus className="text-purple-400" />
                            </div>
                            <h4 className="font-bold text-sm">Add Model</h4>
                        </Link>
                        <Link to="/dashboard/my-models" className="p-4 rounded-xl bg-white/5 hover:bg-blue-500/20 border border-white/5 hover:border-blue-500/30 transition-all group text-center">
                            <div className="w-10 h-10 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                                <FaBoxOpen className="text-blue-400" />
                            </div>
                            <h4 className="font-bold text-sm">Manage Models</h4>
                        </Link>
                    </div>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <h3 className="text-xl font-bold text-white font-exo mb-6">System Status</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm font-medium text-green-400">API Status</span>
                            </div>
                            <span className="text-xs font-bold text-green-400">Operational</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span className="text-sm font-medium text-blue-400">Database</span>
                            </div>
                            <span className="text-xs font-bold text-blue-400">Connected</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
