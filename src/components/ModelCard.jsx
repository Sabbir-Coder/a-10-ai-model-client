import { Link } from "react-router-dom";
import { FaLayerGroup, FaBolt, FaDatabase, FaUserAstronaut, FaEye } from "react-icons/fa";

export const ModelCard = ({ model }) => {
  const { name, image, framework, useCase, dataset, purchased, description, _id, createdBy } = model;

  // Truncate name if it's too long to maintain card height consistency
  const displayName = name.length > 20 ? name.substring(0, 18) + '...' : name;

  return (
    <div className="group relative w-full h-[450px] bg-[#120B22] rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/40 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] font-rajdhani">

      {/* Dark Overlay on Hover */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none backdrop-blur-[2px]"></div>

      {/* Center View Button (Appears on Hover) */}
      <div className="absolute inset-0 z-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
        <Link
          to={`/model-details/${_id}`}
          className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-purple-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <FaEye /> View
        </Link>
      </div>

      {/* Top Image Section */}
      <div className="h-[45%] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120B22] via-transparent to-transparent z-10"></div>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 group-hover:blur-[2px]"
        />

        {/* Floating Badges */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 scale-90 origin-top-right transition-all group-hover:scale-100">
          <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold text-white shadow-lg flex items-center gap-1">
            <span className="text-yellow-400">★</span> {purchased}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 h-[55%] flex flex-col relative z-20 group-hover:opacity-40 transition-opacity duration-300">
        {/* Glow effect inside card body */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-600/20 blur-[50px] pointer-events-none"></div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-[2px] rounded text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
              {framework}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white font-exo leading-tight group-hover:text-purple-400 transition-colors">
            {displayName}
          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1 flex items-center gap-1">
              <FaBolt className="text-blue-400" /> Use Case
            </div>
            <div className="text-xs text-gray-200 font-medium truncate">{useCase}</div>
          </div>
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1 flex items-center gap-1">
              <FaDatabase className="text-pink-400" /> Dataset
            </div>
            <div className="text-xs text-gray-200 font-medium truncate">{dataset}</div>
          </div>
        </div>

        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed mb-auto">
          {description}
        </p>

        {/* Footer / Action */}
        <div className="pt-4 mt-2 flex items-center justify-between border-t border-white/5">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold">
              <FaUserAstronaut />
            </div>
            <span className="max-w-[100px] truncate">{createdBy.split('@')[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
