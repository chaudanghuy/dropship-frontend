import React from 'react';

const steps = [
    {
        number: 1,
        title: 'Post your project',
        description: 'Tell us what you need done in seconds.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        )
    },
    {
        number: 2,
        title: 'Choose freelancers',
        description: 'Browse profiles, reviews, and proposals. Interview favorites and hire the best fit.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        )
    },
    {
        number: 3,
        title: 'Collaborate safely',
        description: 'Use our workspace to chat, share files, and give feedback.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        )
    },
    {
        number: 4,
        title: 'Pay when happy',
        description: 'Pay only when you are 100% satisfied with the work delivered.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        )
    }
];

const HowItWorks = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        How Fiverr works
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Get your project done in 4 simple steps
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center group">
                            {/* Step Number and Icon */}
                            <div className="relative mb-6">
                                <div className="bg-white rounded-full p-6 shadow-lg mx-auto w-20 h-20 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-green-600">
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                    {step.number}
                                </div>
                            </div>

                            {/* Step Content */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connection Line (hidden on mobile and last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-green-200 transform translate-x-10 z-0">
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors transform hover:scale-105">
                        Get started now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
