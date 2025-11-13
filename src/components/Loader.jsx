import React from "react";
import { DNA } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <DNA
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};

export default Loader;
