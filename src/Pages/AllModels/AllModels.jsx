// File: AllModels.jsx
import { useLoaderData } from "react-router";
import { ModelCard } from "../../components/ModelCard";
import { useState, } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const AllModels = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data); // Displayed models
  const [loading, setLoading] = useState(false);
  const [frameworkFilter, setFrameworkFilter] = useState(""); // Filter state

  // Filter models based on framework
  const filteredModels = frameworkFilter
    ? models.filter((model) => model.framework === frameworkFilter)
    : models;

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    setLoading(true);

    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen font-rajdhani text-gray-800 pb-20">
      <title>All Models | AI Model Manager</title>

      {/* Header Section */}
      <div className="py-20 px-6 text-center bg-white border-b border-gray-100 mb-10">
        <h1 className="text-5xl md:text-6xl font-black font-exo uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 drop-shadow-sm">
          Explore Models
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          Discover and integrate state-of-the-art AI architectures into your projects.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Controls Bar */}
        <div className="bg-white rounded-2xl p-4 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between shadow-lg shadow-gray-200/50 border border-gray-100">

          {/* Framework Filter */}
          <div className="flex items-center gap-3 w-full md:w-auto px-2">
            <span className="text-gray-400 font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
              <FaFilter className="text-blue-500" /> Filter
            </span>
            <select
              onChange={(e) => setFrameworkFilter(e.target.value)}
              className="select select-sm bg-gray-50 border-gray-200 text-gray-700 rounded-lg w-full md:w-48 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium"
            >
              <option value="">All Frameworks</option>
              <option value="TensorFlow">TensorFlow</option>
              <option value="PyTorch">PyTorch</option>
              <option value="JAX">JAX</option>
              <option value="Keras">Keras</option>
            </select>
          </div>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="relative w-full md:w-1/2 lg:w-1/3"
          >
            <input
              name="search"
              type="search"
              placeholder="Search specific models..."
              className="input input-sm w-full bg-gray-50 border-gray-200 text-gray-800 pl-10 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

            <button
              type="submit"
              className="hidden"
            >
              Search
            </button>
          </form>
        </div>

        {/* Models Grid */}
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredModels.map((model) => (
              <ModelCard key={model._id} model={model} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No models found</h3>
            <p className="text-gray-500 mb-6">We couldn't find any models matching your search.</p>
            <button
              onClick={() => { setFrameworkFilter(''); setModels(data) }}
              className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllModels;
