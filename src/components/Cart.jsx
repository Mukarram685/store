import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../Redux/Slice';
import Navbar from './Navbar';

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <>
            <Navbar />
            <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Your Cart</h1>
                {cart.items.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cart.items.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center space-y-4"
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-32 h-32 object-cover rounded-md"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-gray-600 text-sm">
                                    Price (each): ${item.price}
                                </p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Total Price: ${item.totalPrice}</p>
                                <button
                                    onClick={() => handleRemoveItem(item)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center mt-10">
                        <p className="text-lg text-gray-600">Your cart is empty.</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;
