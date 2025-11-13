import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { PurchasedByCard } from "../../components/PurchasedByCard";


const MyPurchase = () => {
  const { user } = useContext(AuthContext); // ✅ useContext instead of use()
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return; // ✅ Prevent fetch before user loads

    fetch(`http://localhost:3000/my-purchase?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("MyPurchase data:", data); // ✅ check structure
        setModels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading purchases:", err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <div> Please wait ... Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {models.map((model) => (
     <PurchasedByCard
  key={model._id || model.modelId}
  model={{ ...model, _id: model._id || model.modelId }} 
        />
      ))}
    </div>
  );
};

export default MyPurchase;
