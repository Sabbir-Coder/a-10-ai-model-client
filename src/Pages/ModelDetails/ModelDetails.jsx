import { use, useEffect, useState } from "react";
import { Link, useNavigate, } from "react-router";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import SectionTitle from "../../components/SectionTitle";
import { FaUserShield, FaDownload, FaEdit, FaTrash } from "react-icons/fa";




const ModelDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3000/models/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.result) {
          setModel(data.result);
        } else {
          setModel(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setModel(null);
        setLoading(false);
      });
  }, [id, refetch]);


  const handleDelete = () => {
    if (user?.email !== model.createdBy) return; // extra safety
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/models/${model._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            navigate("/all-models");
            Swal.fire({
              title: "Deleted!",
              text: "Your model has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => console.log(err));
      }
    });
  };

  const handleDownload = () => {
    if (!user) {
      toast.error("Please login to purchase!");
      navigate("/auth/login");
      return;
    }

    const finalModel = {
      name: model.name,
      framework: model.framework,
      useCase: model.useCase,
      dataset: model.dataset,
      description: model.description,
      image: model.image,
      createdBy: model.createdBy,
      purchasedBy: user.email,
      createdAt: new Date(),
      purchased: model.purchased,
    };

    fetch(`http://localhost:3000/downloads/${model._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...finalModel, downloadedBy: user.email }),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Successfully Purchased!");
        setRefetch(!refetch);
      })
      .catch((err) => console.log(err));
  };

  if (loading) return <div><Loader /></div>;
  if (!model) return <div>Model not found!</div>; // now it works

  const isCreator = user?.email === model.createdBy; // check if logged-in user is creator


  return (
    <div className="min-h-screen py-10 px-4">
      <title>Model Details</title>

      <SectionTitle title="Model" highlight="Details" suffix="" />

      <div className="max-w-7xl mx-auto card bg-[#1A0F2E]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-0">

          {/* Left Side - Image */}
          <div className="lg:w-1/2 relative bg-black/20 p-8 flex items-center justify-center">
            <div className="relative group w-full h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F2E] via-transparent to-transparent z-10"></div>
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-700"
              />
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                <span className="px-4 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 font-bold backdrop-blur-md">
                  {model.framework}
                </span>
                <span className="px-4 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 font-bold backdrop-blur-md">
                  {model.purchased} Purchases
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Info */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold font-exo text-white mb-6 leading-tight">
              {model.name}
            </h1>

            <div className="space-y-6 flex-grow">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0F0716]/60 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block mb-1">Use Case</span>
                  <span className="text-white font-medium">{model.useCase}</span>
                </div>
                <div className="bg-[#0F0716]/60 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block mb-1">Dataset</span>
                  <span className="text-white font-medium">{model.dataset}</span>
                </div>
                <div className="bg-[#0F0716]/60 p-4 rounded-xl border border-white/5 col-span-2">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block mb-1">Created By</span>
                  <span className="text-white font-medium flex items-center gap-2">
                    <FaUserShield className="text-green-400" /> {model.createdBy}
                  </span>
                </div>
              </div>

              <div className="bg-[#0F0716]/40 p-6 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-3 font-exo">Description</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  {model.description}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <button
                onClick={handleDownload}
                className="btn w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-none rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all transform hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center justify-center gap-2 font-bold tracking-wide">
                  <FaDownload /> Purchase Model
                </span>
              </button>

              {/* Creator Actions */}
              {isCreator && (
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    to={`/dashboard/update-model/${model._id}`}
                    className="btn h-12 bg-[#0F0716]/60 hover:bg-orange-500/10 text-orange-400 border border-orange-500/30 hover:border-orange-500 rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 group"
                  >
                    <span className="flex items-center gap-2 font-bold tracking-wide group-hover:scale-105 transition-transform">
                      <FaEdit /> Update Model
                    </span>
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="btn h-12 bg-[#0F0716]/60 hover:bg-red-500/10 text-red-400 border border-red-500/30 hover:border-red-500 rounded-xl transition-all shadow-lg hover:shadow-red-500/20 group"
                  >
                    <span className="flex items-center gap-2 font-bold tracking-wide group-hover:scale-105 transition-transform">
                      <FaTrash /> Delete Model
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
