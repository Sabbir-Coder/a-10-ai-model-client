import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { FaLayerGroup, FaDatabase, FaBolt, FaImage, FaHeading, FaAlignLeft } from "react-icons/fa";

const AddModal = () => {

  const { user } = use(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.thumbnail.value,
      createdBy: user.email,
      created_at: new Date(),
      purchased: 5,
    }

    fetch('http://localhost:3000/models', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Successfully added!", {
          style: {
            background: '#1A0F2E',
            color: '#fff',
            border: '1px solid #A855F7'
          }
        })
        navigate('/all-models')
      })
      .catch(err => {
        console.log(err)
        toast.error("Failed to add model")
      })
  }


  return (
    <div className="w-full max-w-4xl mx-auto font-rajdhani">
      <title>Add Model | AI Model Manager</title>

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold font-exo text-white mb-2">Create New Model</h2>
        <p className="text-gray-400">Share your AI innovation with the world</p>
      </div>

      <div className="card bg-[#1A0F2E]/80 backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.1)] rounded-2xl overflow-hidden relative">
        {/* Decorative gradient blob */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="card-body p-8 md:p-10 relative z-10">

          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="form-control hover:scale-[1.01] transition-transform duration-200">
                <label className="label">
                  <span className="label-text font-bold text-gray-300 flex items-center gap-2">
                    <FaHeading className="text-purple-400" /> Model Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="input input-bordered bg-black/40 border-white/10 focus:border-purple-500 text-white placeholder-gray-600 rounded-xl h-12"
                  placeholder="e.g. GPT-4, ResNet-50"
                />
              </div>

              {/* Framework Dropdown */}
              <div className="form-control hover:scale-[1.01] transition-transform duration-200">
                <label className="label">
                  <span className="label-text font-bold text-gray-300 flex items-center gap-2">
                    <FaLayerGroup className="text-blue-400" /> Framework
                  </span>
                </label>
                <select
                  defaultValue={""}
                  name="framework"
                  required
                  className="select select-bordered bg-black/40 border-white/10 focus:border-blue-500 text-white rounded-xl h-12"
                >
                  <option value="" disabled>Select Framework</option>
                  <option value="PyTorch">PyTorch</option>
                  <option value="TensorFlow">TensorFlow</option>
                  <option value="JAX">JAX</option>
                  <option value="Keras">Keras</option>
                  <option value="SciKit-Learn">SciKit-Learn</option>
                </select>
              </div>

              {/* Use Case */}
              <div className="form-control hover:scale-[1.01] transition-transform duration-200">
                <label className="label">
                  <span className="label-text font-bold text-gray-300 flex items-center gap-2">
                    <FaBolt className="text-yellow-400" /> Use Case
                  </span>
                </label>
                <input
                  type="text"
                  name="useCase"
                  required
                  className="input input-bordered bg-black/40 border-white/10 focus:border-yellow-500 text-white placeholder-gray-600 rounded-xl h-12"
                  placeholder="e.g. NLP, Computer Vision"
                />
              </div>

              {/* Dataset */}
              <div className="form-control hover:scale-[1.01] transition-transform duration-200">
                <label className="label">
                  <span className="label-text font-bold text-gray-300 flex items-center gap-2">
                    <FaDatabase className="text-green-400" /> Dataset Used
                  </span>
                </label>
                <input
                  type="text"
                  name="dataset"
                  required
                  className="input input-bordered bg-black/40 border-white/10 focus:border-green-500 text-white placeholder-gray-600 rounded-xl h-12"
                  placeholder="e.g. ImageNet, COCO"
                />
              </div>
            </div>

            {/* Thumbnail URL */}
            <div className="form-control hover:scale-[1.01] transition-transform duration-200">
              <label className="label">
                <span className="label-text font-bold text-gray-300 flex items-center gap-2">
                  <FaImage className="text-pink-400" /> Thumbnail URL
                </span>
              </label>
              <input
                type="url"
                name="thumbnail"
                required
                className="input input-bordered bg-black/40 border-white/10 focus:border-pink-500 text-white placeholder-gray-600 rounded-xl h-12"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Description Textarea */}
            <div className="form-control hover:scale-[1.01] transition-transform duration-200">
              <label className="label">
                <span className="label-text font-bold text-gray-300 flex items-center gap-2">
                  <FaAlignLeft className="text-cyan-400" /> Description
                </span>
              </label>
              <textarea
                name="description"
                required
                rows="4"
                className="textarea textarea-bordered bg-black/40 border-white/10 focus:border-cyan-500 text-white placeholder-gray-600 rounded-xl min-h-[150px] leading-relaxed"
                placeholder="Detailed description of the model architecture, intended use, and limitations..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full h-14 text-lg font-bold uppercase tracking-widest text-white mt-4 border-none bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-purple-500/30 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Add New Model
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
