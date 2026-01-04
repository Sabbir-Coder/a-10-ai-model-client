import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ModelCard } from "../../components/ModelCard";
import Loader from "../../components/Loader";
import SectionTitle from "../../components/SectionTitle";
import { Link } from "react-router-dom";
const MyModels = () => {
    const { user } = use(AuthContext)
    const [models, setModels] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch(`http://localhost:3000/my-models?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {

                setModels(data)
                setLoading(false)
            })

    }, [user])


    if (loading) {
        return <div> <Loader /></div>
    }

    return (
        <div className="min-h-screen py-10 px-4">
            <title>My Models</title>

            <SectionTitle title="My" highlight="Created" suffix="Models" />

            {models.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-4">
                    <p className="text-gray-400 text-xl font-medium">You haven't created any models yet.</p>
                    <Link to="/dashboard/add-model" className="btn btn-primary btn-outline rounded-full px-8">
                        Add New Model
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {models.map(model => <ModelCard key={model._id} model={model} />)}
                </div>
            )}
        </div>
    );
};

export default MyModels;