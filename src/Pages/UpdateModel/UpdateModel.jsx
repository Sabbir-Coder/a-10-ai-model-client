import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../../components/Loader";
import SectionTitle from "../../components/SectionTitle";
import { Link } from "react-router-dom";

const UpdateModel = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.accessToken) return; // wait for user

    fetch(`http://localhost:3000/models/${id}`, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(data => {
        if (!data.result) {
          toast.error("You are not authorized to update this model.");
          navigate("/all-models");
          return;
        }
        setModel(data.result);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to fetch model.");
        navigate("/all-models");
      });
  }, [user, id, navigate]);

  const isCreator = user?.email === model?.createdBy;

  const handleSubmit = e => {
    e.preventDefault();
    if (!isCreator) return toast.error("You are not allowed to update this model.");

    const formData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.thumbnail.value,
      createdBy: user.email,
      created_at: new Date(),
      purchased: model.purchased || 0,
    };

    fetch(`http://localhost:3000/models/${model._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(formData),
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(() => {
        toast.success("Model updated successfully!");
        navigate(`/model-details/${model._id}`);
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to update model. Check authorization.");
      });
  };

  if (loading) return <div><Loader /></div>;

  if (loading) return <div><Loader /></div>;

  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center justify-center">
      <title>Update Model</title>

      <SectionTitle title="Update" highlight="AI" suffix="Model" />

      <div className="card bg-[#1A0F2E]/80 backdrop-blur-xl border border-white/10 w-full max-w-2xl shadow-2xl rounded-3xl overflow-hidden">
        <div className="card-body p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control space-y-2">
                <label className="label-text text-gray-300 font-medium ml-1">Model Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={model.name}
                  required
                  placeholder="e.g. GPT-4o"
                  className="input w-full bg-[#0F0716]/60 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-hidden rounded-xl transition-all h-12"
                />
              </div>

              <div className="form-control space-y-2">
                <label className="label-text text-gray-300 font-medium ml-1">Framework</label>
                <input
                  type="text"
                  name="framework"
                  defaultValue={model.framework}
                  required
                  placeholder="e.g. PyTorch"
                  className="input w-full bg-[#0F0716]/60 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-hidden rounded-xl transition-all h-12"
                />
              </div>

              <div className="form-control space-y-2">
                <label className="label-text text-gray-300 font-medium ml-1">Use Case</label>
                <input
                  type="text"
                  name="useCase"
                  defaultValue={model.useCase}
                  required
                  placeholder="e.g. NLP"
                  className="input w-full bg-[#0F0716]/60 border border-white/10 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-hidden rounded-xl transition-all h-12"
                />
              </div>

              <div className="form-control space-y-2">
                <label className="label-text text-gray-300 font-medium ml-1">Dataset</label>
                <input
                  type="text"
                  name="dataset"
                  defaultValue={model.dataset}
                  required
                  placeholder="e.g. Common Crawl"
                  className="input w-full bg-[#0F0716]/60 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-hidden rounded-xl transition-all h-12"
                />
              </div>
            </div>

            <div className="form-control space-y-2">
              <label className="label-text text-gray-300 font-medium ml-1">Thumbnail URL</label>
              <input
                type="url"
                name="thumbnail"
                defaultValue={model.image}
                required
                placeholder="https://example.com/image.png"
                className="input w-full bg-[#0F0716]/60 border border-white/10 text-white placeholder-gray-500 focus:border-green-500 focus:outline-hidden rounded-xl transition-all h-12"
              />
            </div>

            <div className="form-control space-y-2">
              <label className="label-text text-gray-300 font-medium ml-1">Description</label>
              <textarea
                name="description"
                defaultValue={model.description}
                required
                rows={5}
                placeholder="Describe the model's capabilities..."
                className="textarea w-full bg-[#0F0716]/60 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-hidden rounded-xl transition-all text-base leading-relaxed"
              ></textarea>
            </div>

            <div className="flex gap-4 pt-4">
              <Link
                to="/dashboard/my-models"
                className="btn flex-1 bg-white/5 hover:bg-white/10 text-white border-white/10 rounded-xl h-12 font-bold tracking-wide"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="btn flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-none rounded-xl h-12 font-bold tracking-wide shadow-lg hover:shadow-blue-500/25"
                disabled={!isCreator}
              >
                Update Model
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModel;
