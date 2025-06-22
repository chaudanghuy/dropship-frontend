import Image from 'next/image';
import Link from 'next/link';
import { Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { categories, getProductsByCategory } from '@/data/sample-data';

export default function CategoriesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Browse our extensive collection of building materials, tools, and hardware supplies.
                    Find everything you need for your construction and home improvement projects.
                </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category) => {
                    const categoryProducts = getProductsByCategory(category.id);

                    return (
                        <Link key={category.id} href={`/category/${category.slug}`}>
                            <Card className="group hover:shadow-xl transition-all duration-300 h-full cursor-pointer">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <Image
                                        src={category.imageUrl}
                                        alt={category.name}
                                        width={400}
                                        height={250}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
                                    <Badge className="absolute top-4 right-4 bg-orange-600 text-white">
                                        {categoryProducts.length} products
                                    </Badge>
                                </div>

                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                            {category.name}
                                        </h3>
                                        <Package className="h-6 w-6 text-orange-600 flex-shrink-0 ml-2" />
                                    </div>

                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {category.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">
                                            {categoryProducts.length} {categoryProducts.length === 1 ? 'item' : 'items'} available
                                        </span>
                                        <div className="flex items-center text-orange-600 group-hover:text-orange-700">
                                            <span className="text-sm font-medium mr-1">Browse</span>
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    );
                })}
            </div>

            {/* Featured Categories Section */}
            <div className="mt-20">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                    Popular Categories
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.slice(0, 4).map((category) => {
                        const categoryProducts = getProductsByCategory(category.id);

                        return (
                            <Link
                                key={category.id}
                                href={`/category/${category.slug}`}
                                className="group text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <div className="relative mb-4 overflow-hidden rounded-full w-20 h-20 mx-auto">
                                    <Image
                                        src={category.imageUrl}
                                        alt={category.name}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 mb-2">
                                    {category.name.split(' & ')[0]} {/* Show first part of name */}
                                </h3>
                                <p className="text-xs text-gray-600">
                                    {categoryProducts.length} products
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
                <p className="text-lg mb-6 text-orange-100">
                    Contact our expert team for personalized product recommendations and bulk ordering options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                        Contact Us
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                        View All Products
                    </Button>
                </div>
            </div>
        </div>
    );
}
