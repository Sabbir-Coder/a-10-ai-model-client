import { Link } from "react-router-dom";

export const PurchasedByCard = ({ model }) => {
    const { name, image, framework, dataset, purchased, description, createdBy, _id } = model;

    return (
        <div className="card bg-[#1A0F2E]/60 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
            <figure className="h-48 overflow-hidden relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F2E] to-transparent opacity-80"></div>
                <div className="absolute top-3 right-3 badge bg-green-500/20 text-green-400 border-green-500/30 backdrop-blur-md">
                    Purchased
                </div>
            </figure>

            <div className="card-body p-6">
                <h2 className="card-title text-white font-rajdhani font-bold text-2xl mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">
                    {name}
                </h2>

                <p className="text-gray-400 text-sm line-clamp-2 mb-4 font-light">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-[10px] font-bold tracking-wider text-cyan-400 border border-cyan-500/30 rounded-full bg-cyan-900/10">
                        {framework}
                    </span>
                    <span className="px-3 py-1 text-[10px] font-bold tracking-wider text-pink-400 border border-pink-500/30 rounded-full bg-pink-900/10">
                        {dataset}
                    </span>
                </div>

                <div className="divider my-2 border-white/5 bg-white/5 h-[1px]"></div>

                <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <div className="flex flex-col">
                        <span className="text-gray-600 uppercase tracking-widest text-[10px]">Date</span>
                        <span className="text-gray-300">{purchased ? new Date(purchased).toLocaleDateString() : 'Recent'}</span>
                    </div>
                    <div className="flex flex-col text-right">
                        <span className="text-gray-600 uppercase tracking-widest text-[10px]">Creator</span>
                        <span className="text-gray-300 truncate max-w-[100px]">{createdBy}</span>
                    </div>
                </div>

                <div className="card-actions">
                    <Link
                        to={`/model-details/${_id}`}
                        className="btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-none rounded-xl shadow-lg hover:shadow-blue-500/25 min-h-[45px] h-[45px]"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

