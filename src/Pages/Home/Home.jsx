import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import { ModelCard } from "../../components/ModelCard";
import AboutAi from "../../components/AboutAi";
import GetStarted from "../../components/GetStarted";

const Home = () => {
  const data = useLoaderData();
  console.log(data[0]);

  // Guaranteed sorting by newest
  const sortedData = [...data].sort((a, b) => {
    const dateA = Date.parse(a.createdAt || a.created_at);
    const dateB = Date.parse(b.createdAt || b.created_at);
    return dateB - dateA;
  });

  return (
    <div>
      <Banner />

      <div className="text-center text-5xl font-bold mt-15 border-b-2 border-b-blue-400 w-1/2 mb-11 mx-auto pb-5">
        Featured <span className="text-blue-800 font-black">AI</span> Models
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-18">
        {sortedData.map(model => <ModelCard key={model._id} model={model} />)}
      </div>

      <AboutAi />
      <GetStarted />
    </div>
  );
};

export default Home;
