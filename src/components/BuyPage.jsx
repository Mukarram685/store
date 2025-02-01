import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import data from '../Data/data'; // Import your data source
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../Redux/Slice';


function BuyPage() {
    const location = useLocation();
    const { item } = location.state || {};
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const dispatch = useDispatch();

    const addToCart = () => {
        const updatedItem = {
            ...item,
            quantity,
            totalPrice: parseFloat(item.price * quantity).toFixed(2), // Calculate total price based on quantity
        };
        dispatch(addItem(updatedItem));
    };

    const relatedItems = data.filter(
        (dataItem) => dataItem.category === item?.category && dataItem.id !== item.id
    );

    return (
        <div className="p-5 bg-gray-100 min-h-screen md:flex justify-between space-x-6">
            <div className="flex-1">
                {item && (
                    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center mx-auto">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">{item.name}</h1>
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-68 object-cover rounded-md mb-4"
                        />
                        <div className="text-left">
                            <p className="text-2xl font-bold">Description:</p>
                            <p className="text-gray-600 text-lg mb-4">{item.description}</p>
                        </div>
                        <div className="flex justify-between items-center mt-4 border-t pt-4">
                            <div className="flex items-center space-x-4">
                                <button
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
                                    onClick={decrementQuantity}
                                >
                                    -
                                </button>
                                <p className="text-xl font-semibold">{quantity}</p>
                                <button
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
                                    onClick={incrementQuantity}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300"
                                onClick={addToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Related Items</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedItems.map((relatedItem) => (
                        <div
                            key={relatedItem.id}
                            className="bg-white shadow-md rounded-lg p-4 text-center"
                        >
                            <img
                                src={relatedItem.img}
                                alt={relatedItem.name}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-medium text-gray-800">
                                {relatedItem.name}
                            </h3>
                            <p className="text-gray-600 text-sm">{relatedItem.category}</p>
                            <button className="px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition duration-300 mt-2">
                                View
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BuyPage;
