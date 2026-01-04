import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import { ModelCard } from "../../components/ModelCard";
import AboutAi from "../../components/AboutAi";

import GetStarted from "../../components/GetStarted";
import SectionTitle from "../../components/SectionTitle";

const Home = () => {
  const data = useLoaderData();
  data.forEach(item => console.log(item._id, item.createdAt));

  // Guaranteed sorting by newest
  const sortedData = [...data].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime(); // converts to milliseconds
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA; // newest first
  });


  return (
    <div>
      <Banner />

      <SectionTitle title="Featured" highlight="AI" suffix="Models" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-18">
        {sortedData.map(model => <ModelCard key={model._id} model={model} />)}
      </div>

      <AboutAi />
      <GetStarted />
    </div>
  );
};

export default Home;
