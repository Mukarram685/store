import React from 'react'
import Navbar from './Navbar'
import data from '../Data/data'
function Products() {
    const categories = data.filter((item)=> item.category).map((item) => item.category).filter((category, index, self) => self.indexOf(category) === index);
    return (
        <>
            <Navbar />
            {
                categories.map((item) => (
                    <div key={item}>
                        <h1 className='text-3xl font-bold text-gray-800 text-center mb-6'>{item}</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                            {/* {data.filter((item) => item.category === item).map((item) => (
                                <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>                                  
                                </div>
                            ))}  */}
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Products