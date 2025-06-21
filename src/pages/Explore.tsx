import React, { useState } from 'react';

const categories = [
    'All Categories',
    'Graphics & Design',
    'Digital Marketing',
    'Writing & Translation',
    'Video & Animation',
    'Music & Audio',
    'Programming & Tech',
    'AI Services',
    'Business'
];

const services = [
    {
        id: 1,
        title: "I will design a modern logo for your business",
        seller: "designpro_mike",
        sellerLevel: "Level 2",
        rating: 4.9,
        reviews: 127,
        price: 25,
        category: "Graphics & Design",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop&crop=center",
        tags: ["Logo Design", "Brand Identity"],
        deliveryTime: "2 days"
    },
    {
        id: 2,
        title: "I will create a professional WordPress website",
        seller: "webdev_sarah",
        sellerLevel: "Top Rated",
        rating: 5.0,
        reviews: 89,
        price: 150,
        category: "Programming & Tech",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=200&fit=crop&crop=center",
        tags: ["WordPress", "Web Development"],
        deliveryTime: "7 days"
    },
    {
        id: 3,
        title: "I will write engaging content for your blog",
        seller: "writer_alex",
        sellerLevel: "Level 1",
        rating: 4.8,
        reviews: 234,
        price: 35,
        category: "Writing & Translation",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop&crop=center",
        tags: ["Content Writing", "Blog Posts"],
        deliveryTime: "3 days"
    },
    {
        id: 4,
        title: "I will edit your video professionally",
        seller: "video_emma",
        sellerLevel: "Level 2",
        rating: 4.9,
        reviews: 156,
        price: 75,
        category: "Video & Animation",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop&crop=center",
        tags: ["Video Editing", "Motion Graphics"],
        deliveryTime: "5 days"
    },
    {
        id: 5,
        title: "I will create social media marketing strategy",
        seller: "marketing_pro",
        sellerLevel: "Top Rated",
        rating: 4.9,
        reviews: 312,
        price: 95,
        category: "Digital Marketing",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop&crop=center",
        tags: ["Social Media", "Marketing Strategy"],
        deliveryTime: "4 days"
    },
    {
        id: 6,
        title: "I will compose original music for your project",
        seller: "music_master",
        sellerLevel: "Level 2",
        rating: 4.7,
        reviews: 98,
        price: 120,
        category: "Music & Audio",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop&crop=center",
        tags: ["Music Composition", "Original Music"],
        deliveryTime: "10 days"
    },
    {
        id: 7,
        title: "I will develop an AI chatbot for your business",
        seller: "ai_specialist",
        sellerLevel: "Level 2",
        rating: 4.8,
        reviews: 67,
        price: 200,
        category: "AI Services",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop&crop=center",
        tags: ["AI Development", "Chatbot"],
        deliveryTime: "14 days"
    },
    {
        id: 8,
        title: "I will create a comprehensive business plan",
        seller: "business_guru",
        sellerLevel: "Top Rated",
        rating: 5.0,
        reviews: 189,
        price: 180,
        category: "Business",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop&crop=center",
        tags: ["Business Plan", "Strategy"],
        deliveryTime: "7 days"
    }
];

const Explore = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [priceFilter, setPriceFilter] = useState('all');
    const [deliveryFilter, setDeliveryFilter] = useState('all');
    const [sortBy, setSortBy] = useState('relevance');

    const filteredServices = services.filter(service => {
        if (selectedCategory !== 'All Categories' && service.category !== selectedCategory) {
            return false;
        }

        if (priceFilter === 'under50' && service.price >= 50) return false;
        if (priceFilter === '50to100' && (service.price < 50 || service.price > 100)) return false;
        if (priceFilter === 'over100' && service.price <= 100) return false;

        if (deliveryFilter === 'express' && Number.parseInt(service.deliveryTime) > 3) return false;
        if (deliveryFilter === 'fast' && Number.parseInt(service.deliveryTime) > 7) return false;

        return true;
    });

    const sortedServices = [...filteredServices].sort((a, b) => {
        switch (sortBy) {
            case 'price_low':
                return a.price - b.price;
            case 'price_high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'reviews':
                return b.reviews - a.reviews;
            default:
                return 0;
        }
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-green-600 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Explore Services</h1>
                    <p className="text-xl text-green-100">
                        Discover thousands of services from talented freelancers
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div className="lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>

                            {/* Category Filter */}
                            <div className="mb-6">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Price Filter */}
                            <div className="mb-6">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="price"
                                            value="all"
                                            checked={priceFilter === 'all'}
                                            onChange={(e) => setPriceFilter(e.target.value)}
                                            className="text-green-600"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Any price</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="price"
                                            value="under50"
                                            checked={priceFilter === 'under50'}
                                            onChange={(e) => setPriceFilter(e.target.value)}
                                            className="text-green-600"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Under $50</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="price"
                                            value="50to100"
                                            checked={priceFilter === '50to100'}
                                            onChange={(e) => setPriceFilter(e.target.value)}
                                            className="text-green-600"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">$50 - $100</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="price"
                                            value="over100"
                                            checked={priceFilter === 'over100'}
                                            onChange={(e) => setPriceFilter(e.target.value)}
                                            className="text-green-600"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Over $100</span>
                                    </label>
                                </div>
                            </div>

                            {/* Delivery Time Filter */}
                            <div className="mb-6">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Delivery Time</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="delivery"
                                            value="all"
                                            checked={deliveryFilter === 'all'}
                                            onChange={(e) => setDeliveryFilter(e.target.value)}
                                            className="text-green-600"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Any time</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="delivery"
                                            value="express"
                                            checked={deliveryFilter === 'express'}
                                            onChange={(e) => setDeliveryFilter(e.target.value)}
                                            className="text-green-600"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Express (1-3 days)</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="delivery"
                                            value="fast"
                                            checked={deliveryFilter === 'fast'}
                                            onChange={(e) => setDeliveryFilter(e.target.value)}
                                            className="text-green-600"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Fast (up to 7 days)</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Sort and Results */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                            <p className="text-gray-600 mb-4 sm:mb-0">
                                {sortedServices.length} services available
                            </p>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                >
                                    <option value="relevance">Relevance</option>
                                    <option value="rating">Best Rating</option>
                                    <option value="reviews">Most Reviews</option>
                                    <option value="price_low">Price: Low to High</option>
                                    <option value="price_high">Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedServices.map((service) => (
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
                                            {service.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Price and Delivery */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {service.deliveryTime}
                                            </div>
                                            <div className="text-right">
                                                <span className="text-sm text-gray-500">Starting at</span>
                                                <div className="text-lg font-bold text-gray-900">${service.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Load More Button */}
                        <div className="text-center mt-12">
                            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                                Load More Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
