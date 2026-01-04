import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { PurchasedByCard } from "../../components/PurchasedByCard";
import Loader from "../../components/Loader";
import SectionTitle from "../../components/SectionTitle";
import { Link } from "react-router-dom";


const MyPurchase = () => {
  const { user } = useContext(AuthContext);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:3000/my-downloads?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("MyPurchase data:", data);
        setModels(data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading purchases:", err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <div> <Loader /></div>;
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <title>My Purchase</title>

      <SectionTitle title="My" highlight="Purchased" suffix="Models" />

      {models.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-4">
          <p className="text-gray-400 text-xl font-medium">You haven't purchased any models yet.</p>
          <Link to="/all-models" className="btn btn-primary btn-outline rounded-full px-8">
            Explore Models
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {models.map((model) => (
            <PurchasedByCard
              key={model._id}
              model={model}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPurchase;
