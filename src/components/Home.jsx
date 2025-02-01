import React, { useState } from "react";
import Navbar from "./Navbar";
import data from "../Data/data";
import { Link } from "react-router-dom";

function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar onSearch={(term) => setSearchTerm(term)} />

            <div className="text-center py-8">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to E-Store</h1>
                <p className="text-gray-600 mt-2">Find the best products at affordable prices</p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                    {filteredData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-4 w-64 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center space-y-4"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-48 h-48 object-cover rounded-lg"
                            />
                            <div className="flex justify-between w-full">
                            <h3 className="text-base font-medium text-gray-800">{item.name}</h3>
                            <p className="text-sm font-semibold text-custom-darkblue">
                                ${item.price}
                            </p>
                            </div>
                            <button className="w-[90%] bg-slate-500 py-2 rounded-full">
                               <Link to='/buyPage' state={{item}}> Buy </Link> 
                                </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
