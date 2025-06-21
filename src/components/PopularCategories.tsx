import React from 'react';

const categories = [
    {
        title: 'Graphics & Design',
        description: 'Logo Design, Brand Style Guides, App Design',
        icon: '🎨',
        color: 'from-orange-400 to-red-500'
    },
    {
        title: 'Digital Marketing',
        description: 'Social Media, SEO, Content Marketing',
        icon: '📱',
        color: 'from-green-400 to-blue-500'
    },
    {
        title: 'Writing & Translation',
        description: 'Content Writing, Copywriting, Translation',
        icon: '✍️',
        color: 'from-purple-400 to-pink-500'
    },
    {
        title: 'Video & Animation',
        description: 'Video Editing, Animation, Intro Videos',
        icon: '🎬',
        color: 'from-yellow-400 to-orange-500'
    },
    {
        title: 'Music & Audio',
        description: 'Voice Over, Music Production, Audio Editing',
        icon: '🎵',
        color: 'from-blue-400 to-purple-500'
    },
    {
        title: 'Programming & Tech',
        description: 'WordPress, Web Development, Mobile Apps',
        icon: '💻',
        color: 'from-green-400 to-teal-500'
    },
    {
        title: 'AI Services',
        description: 'AI Development, Machine Learning, Chatbots',
        icon: '🤖',
        color: 'from-indigo-400 to-purple-500'
    },
    {
        title: 'Business',
        description: 'Business Plans, Market Research, Presentations',
        icon: '💼',
        color: 'from-gray-400 to-gray-600'
    }
];

const PopularCategories = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Popular services
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Choose from our most popular categories
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                        >
                            <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                <span className="text-4xl">{category.icon}</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {category.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCategories;
