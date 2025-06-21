import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-green-50 to-green-100 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-left">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Find the right
                            <span className="text-green-600"> freelance </span>
                            service, right away
                        </h1>

                        {/* Search Bar */}
                        <div className="bg-white rounded-lg shadow-lg p-2 flex items-center max-w-lg">
                            <div className="flex-1 flex items-center">
                                <svg className="w-5 h-5 text-gray-400 ml-3 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="What service are you looking for today?"
                                    className="w-full py-3 px-2 text-gray-700 focus:outline-none"
                                />
                            </div>
                            <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors">
                                Search
                            </button>
                        </div>

                        {/* Popular Searches */}
                        <div className="mt-6">
                            <span className="text-gray-600 text-sm">Popular:</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {['Website Design', 'WordPress', 'Logo Design', 'Video Editing'].map((tag) => (
                                    <button
                                        key={tag}
                                        className="text-sm text-gray-700 bg-white px-3 py-1 rounded-full border border-gray-200 hover:border-green-600 hover:text-green-600 transition-colors"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hero Image/Illustration */}
                    <div className="hidden lg:block">
                        <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg h-96 flex items-center justify-center">
                            <div className="text-white text-center">
                                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold mb-2">Quality Work Done Quickly</h3>
                                <p className="text-green-100">Find the perfect freelancer for your project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
