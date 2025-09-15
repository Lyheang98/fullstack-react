import React from 'react'
import { Link } from 'react-router-dom';
const QuoteSection = () => {
    return (
        <div>
            <div className="py-20 bg-gray-50">
                <section className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="text-red-900 text-3xl md:text-4xl font-semibold pb-4 relative">
                            Stop Waiting, Start Shipping
                        </h3>

                        <p className="text-black text-base md:text-lg leading-relaxed mt-4">
                            get your favorite perfume at your door step. We deliver
                            worldwide with free shipping on orders over $50. Shop now and
                            experience the convenience of online shopping with fast and
                            reliable delivery.
                        </p>

                        <Link
                            to="/blog"
                            className="bg-gradient-to-r from-black to-red-800 rounded-lg py-3 px-10 mt-8 
                     font-medium text-white hover:text-red-900 border 
                     transition ease-in-out duration-300 inline-block text-center"
                        >
                            Call Now
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default QuoteSection;