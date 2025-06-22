'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ProductCard';
import { products, categories, getProductsByCategory } from '@/data/sample-data';
import type { Product, Category } from '@/types';
import { useCart } from '@/contexts/CartContext';

type SortOption = 'name' | 'price-low' | 'price-high' | 'category';

export default function CategoryPage() {
    const params = useParams();
    const { addToCart } = useCart();
    const [category, setCategory] = useState<Category | null>(null);
    const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
    const [sortBy, setSortBy] = useState<SortOption>('name');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    useEffect(() => {
        if (params.slug) {
            const foundCategory = categories.find(c => c.slug === params.slug);
            setCategory(foundCategory || null);

            if (foundCategory) {
                const products = getProductsByCategory(foundCategory.id);
                setCategoryProducts(products);
            }
        }
    }, [params.slug]);

    const handleAddToCart = (product: Product) => {
        addToCart(product);
    };

    const sortProducts = (products: Product[], sortBy: SortOption): Product[] => {
        const productsCopy = [...products];

        switch (sortBy) {
            case 'name':
                return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
            case 'price-low':
                return productsCopy.sort((a, b) => a.price - b.price);
            case 'price-high':
                return productsCopy.sort((a, b) => b.price - a.price);
            case 'category':
                return productsCopy.sort((a, b) => a.category.localeCompare(b.category));
            default:
                return productsCopy;
        }
    };

    const sortedProducts = sortProducts(categoryProducts, sortBy);

    if (!category) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
                    <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
                    <Link href="/">
                        <Button className="bg-orange-600 hover:bg-orange-700">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
                <Link href="/" className="hover:text-orange-600">Home</Link>
                <span>/</span>
                <Link href="/categories" className="hover:text-orange-600">Categories</Link>
                <span>/</span>
                <span className="text-gray-900">{category.name}</span>
            </nav>

            {/* Category Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h1>
                <p className="text-gray-600 text-lg">{category.description}</p>
                <div className="mt-4">
                    <Badge variant="secondary">
                        {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
                    </Badge>
                </div>
            </div>

            {/* Filters and Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Filter className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">Sort by:</span>
                        <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                            <SelectTrigger className="w-40">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="name">Name A-Z</SelectItem>
                                <SelectItem value="price-low">Price: Low to High</SelectItem>
                                <SelectItem value="price-high">Price: High to Low</SelectItem>
                                <SelectItem value="category">Category</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">View:</span>
                    <Button
                        variant={viewMode === 'grid' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                        className="p-2"
                    >
                        <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                        variant={viewMode === 'list' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('list')}
                        className="p-2"
                    >
                        <List className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
                <div className={`grid gap-6 ${viewMode === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                    : 'grid-cols-1'
                    }`}>
                    {sortedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                    <p className="text-gray-600 mb-8">
                        There are currently no products in this category.
                    </p>
                    <Link href="/">
                        <Button className="bg-orange-600 hover:bg-orange-700">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Continue Shopping
                        </Button>
                    </Link>
                </div>
            )}

            {/* Related Categories */}
            <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories
                        .filter(cat => cat.id !== category.id)
                        .slice(0, 6)
                        .map((relatedCategory) => (
                            <Link
                                key={relatedCategory.id}
                                href={`/category/${relatedCategory.slug}`}
                                className="group text-center hover:shadow-lg transition-shadow rounded-lg p-4"
                            >
                                <div className="relative mb-4 overflow-hidden rounded-lg">
                                    <img
                                        src={relatedCategory.imageUrl}
                                        alt={relatedCategory.name}
                                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
                                    />
                                </div>
                                <h3 className="font-semibold text-sm group-hover:text-orange-600">
                                    {relatedCategory.name}
                                </h3>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
}
