import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ onSearch }) {
    const [isopen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState("");

    const handleSearchToggle = () => {
        setIsOpen(true); // Keep the search bar open for further searches
        onSearch(search); // Trigger the search callback
    };

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-custom-darkblue text-custom-gray flex justify-between items-center p-4 relative">
            <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/menu--v1.png"
                alt="hamburger"
                className="md:hidden cursor-pointer"
                onClick={handleMenuToggle}
            />

            <div className="text-2xl font-bold cursor-pointer">E-Store</div>
            <div>
                <ul className="hidden md:flex gap-8 cursor-pointer">
                    <li className="hover:text-white transition">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-white transition">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="hover:text-white transition">
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-2">
                <div
                    className={`${isopen ? "w-40" : "w-[2px]"
                        } overflow-hidden transition-all duration-300 bg-custom-gray text-black py-1 rounded`}
                >
                    <input
                        type="search"
                        name="search"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-2 bg-transparent focus:outline-none"
                    />
                </div>
                <img
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png"
                    alt="Search Icon"
                    className="cursor-pointer"
                    onClick={handleSearchToggle}
                />
            </div>
            <div
                className={`fixed top-0 left-0 h-full bg-custom-darkblue text-custom-gray transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    } w-1/2 md:hidden`}
            >
                <div className="p-4 flex justify-end">
                    <img
                        src="https://img.icons8.com/ios-glyphs/30/ffffff/close-window.png"
                        alt="Close"
                        className="cursor-pointer"
                        onClick={handleMenuToggle}
                    />
                </div>

                <ul className="flex flex-col gap-6 p-8 border-custom-gray">
                    <li className="hover:text-white transition cursor-pointer border-b border-custom-gray pb-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-white transition cursor-pointer border-b border-custom-gray pb-2">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="hover:text-white transition cursor-pointer border-b border-custom-gray pb-2">
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
