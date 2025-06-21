import React from 'react';

const featuredServices = [
    {
        id: 1,
        title: "I will design a modern logo for your business",
        seller: "designpro_mike",
        sellerLevel: "Level 2",
        rating: 4.9,
        reviews: 127,
        price: 25,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop&crop=center",
        tags: ["Logo Design", "Brand Identity"]
    },
    {
        id: 2,
        title: "I will create a professional WordPress website",
        seller: "webdev_sarah",
        sellerLevel: "Top Rated",
        rating: 5.0,
        reviews: 89,
        price: 150,
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=200&fit=crop&crop=center",
        tags: ["WordPress", "Web Development"]
    },
    {
        id: 3,
        title: "I will write engaging content for your blog",
        seller: "writer_alex",
        sellerLevel: "Level 1",
        rating: 4.8,
        reviews: 234,
        price: 35,
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop&crop=center",
        tags: ["Content Writing", "Blog Posts"]
    },
    {
        id: 4,
        title: "I will edit your video professionally",
        seller: "video_emma",
        sellerLevel: "Level 2",
        rating: 4.9,
        reviews: 156,
        price: 75,
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop&crop=center",
        tags: ["Video Editing", "Motion Graphics"]
    }
];

const FeaturedServices = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Featured services
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Hand-picked by our team for exceptional quality
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredServices.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
                        >
                            {/* Service Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-2 right-2">
                                    <button className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all">
                                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Service Info */}
                            <div className="p-4">
                                {/* Seller Info */}
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2">
                                        {service.seller[0].toUpperCase()}
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-gray-900">{service.seller}</span>
                                        <span className="text-xs text-green-600 ml-1">{service.sellerLevel}</span>
                                    </div>
                                </div>

                                {/* Service Title */}
                                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                                    {service.title}
                                </h3>

                                {/* Rating */}
                                <div className="flex items-center mb-2">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-900 ml-1">{service.rating}</span>
                                        <span className="text-sm text-gray-500 ml-1">({service.reviews})</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {service.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Starting at</span>
                                    <span className="text-lg font-bold text-gray-900">${service.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;
