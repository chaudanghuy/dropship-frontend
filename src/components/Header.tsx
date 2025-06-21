import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './auth/AuthModal';

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-green-600">
                            fiverr<span className="text-gray-900">.</span>
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                            Business
                        </a>
                        <Link to="/explore" className="text-gray-700 hover:text-green-600 font-medium">
                            Explore
                        </Link>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-700">English</span>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                            Become a Seller
                        </a>
                    </nav>

                    {/* User Actions */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-700 hover:text-green-600 font-medium">
                            Sign in
                        </button>
                        <button className="bg-green-600 text-white px-4 py-2 rounded font-medium hover:bg-green-700 transition-colors">
                            Join
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-green-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
