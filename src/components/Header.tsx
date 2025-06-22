'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Menu, X, User, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/sample-data';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { totalItems } = useCart();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-white shadow-lg border-b">
            {/* Top bar */}
            <div className="bg-orange-600 text-white py-2">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <Truck className="h-4 w-4" />
                            <span>Free shipping on orders over $50</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Package className="h-4 w-4" />
                            <span>Professional contractor pricing available</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/account" className="hover:underline">My Account</Link>
                        <Link href="/orders" className="hover:underline">Track Orders</Link>
                        <Link href="/help" className="hover:underline">Help</Link>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="bg-orange-600 text-white p-2 rounded-lg">
                            <Package className="h-8 w-8" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">BuildMart</h1>
                            <p className="text-xs text-gray-600">Hardware & Building Supplies</p>
                        </div>
                    </Link>

                    {/* Search bar */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                        <div className="relative w-full">
                            <Input
                                type="text"
                                placeholder="Search for tools, lumber, hardware..."
                                className="w-full pl-4 pr-12 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-orange-500"
                            />
                            <Button
                                size="sm"
                                className="absolute right-1 top-1 bg-orange-600 hover:bg-orange-700"
                            >
                                <Search className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Cart and User Actions */}
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
                            <User className="h-5 w-5" />
                            <span>Sign In</span>
                        </Button>

                        <Link href="/cart" className="relative">
                            <Button size="sm" className="bg-orange-600 hover:bg-orange-700 flex items-center space-x-2">
                                <ShoppingCart className="h-5 w-5" />
                                <span className="hidden sm:inline">Cart</span>
                                {totalItems > 0 && (
                                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white min-w-[1.5rem] h-6 rounded-full flex items-center justify-center text-xs">
                                        {totalItems}
                                    </Badge>
                                )}
                            </Button>
                        </Link>

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile search */}
                <div className="md:hidden mt-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-4 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500"
                        />
                        <Button
                            size="sm"
                            className="absolute right-1 top-1 bg-orange-600 hover:bg-orange-700"
                        >
                            <Search className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-gray-50 border-t">
                <div className="container mx-auto px-4">
                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center space-x-8 py-3">
                        <Link href="/categories" className="font-medium text-gray-900 hover:text-orange-600">
                            All Categories
                        </Link>
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/category/${category.slug}`}
                                className="text-gray-700 hover:text-orange-600 whitespace-nowrap"
                            >
                                {category.name}
                            </Link>
                        ))}
                        <Link href="/deals" className="text-red-600 font-medium hover:text-red-700">
                            Special Deals
                        </Link>
                    </div>

                    {/* Mobile navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t">
                            <div className="flex flex-col space-y-3">
                                <Link href="/categories" className="font-medium text-gray-900 hover:text-orange-600">
                                    All Categories
                                </Link>
                                {categories.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={`/category/${category.slug}`}
                                        className="text-gray-700 hover:text-orange-600 pl-4"
                                    >
                                        {category.name}
                                    </Link>
                                ))}
                                <Link href="/deals" className="text-red-600 font-medium hover:text-red-700">
                                    Special Deals
                                </Link>
                                <div className="pt-3 border-t">
                                    <Link href="/account" className="block text-gray-700 hover:text-orange-600 mb-2">
                                        My Account
                                    </Link>
                                    <Link href="/orders" className="block text-gray-700 hover:text-orange-600 mb-2">
                                        Track Orders
                                    </Link>
                                    <Link href="/help" className="block text-gray-700 hover:text-orange-600">
                                        Help
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
