'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ProductCard';
import { products, categories, searchProducts } from '@/data/sample-data';
import type { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';

type SortOption = 'name' | 'price-low' | 'price-high' | 'category';

export default function ProductsPage() {
    const { addToCart } = useCart();
    const [allProducts, setAllProducts] = useState<Product[]>(products);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [sortBy, setSortBy] = useState<SortOption>('name');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        let filtered = [...allProducts];

        // Apply search filter
        if (searchQuery.trim()) {
            filtered = searchProducts(searchQuery);
        }

        // Apply category filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.categoryId === selectedCategory);
        }

        // Apply price range filter
        filtered = filtered.filter(product =>
            product.price >= priceRange.min && product.price <= priceRange.max
        );

        // Apply sorting
        filtered = sortProducts(filtered, sortBy);

        setFilteredProducts(filtered);
    }, [searchQuery, selectedCategory, sortBy, priceRange, allProducts]);

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

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedCategory('all');
        setPriceRange({ min: 0, max: 1000 });
        setSortBy('name');
    };

    const activeFiltersCount =
        (searchQuery ? 1 : 0) +
        (selectedCategory !== 'all' ? 1 : 0) +
        (priceRange.min > 0 || priceRange.max < 1000 ? 1 : 0);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">All Products</h1>
                <p className="text-gray-600 text-lg">
                    Browse our complete catalog of building materials, tools, and hardware supplies.
                </p>
            </div>

            {/* Search and Filters */}
            <div className="mb-8">
                {/* Search Bar */}
                <div className="relative mb-4">
                    <Input
                        type="text"
                        placeholder="Search for tools, lumber, hardware..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-4 pr-12 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-orange-500"
                    />
                    <Button
                        size="sm"
                        className="absolute right-1 top-1 bg-orange-600 hover:bg-orange-700"
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                </div>

                {/* Filter Controls */}
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                    <div className="flex flex-wrap items-center gap-4">
                        {/* Category Filter */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-700">Category:</span>
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="w-48">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    {categories.map((category) => (
                                        <SelectItem key={category.id} value={category.id}>
                                            {category.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Sort */}
                        <div className="flex items-center space-x-2">
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

                        {/* Price Range */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-700">Price:</span>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="number"
                                    placeholder="Min"
                                    value={priceRange.min}
                                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) || 0 }))}
                                    className="w-20"
                                />
                                <span>-</span>
                                <Input
                                    type="number"
                                    placeholder="Max"
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) || 1000 }))}
                                    className="w-20"
                                />
                            </div>
                        </div>

                        {/* Clear Filters */}
                        {activeFiltersCount > 0 && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={clearFilters}
                                className="flex items-center space-x-2"
                            >
                                <X className="h-4 w-4" />
                                <span>Clear Filters ({activeFiltersCount})</span>
                            </Button>
                        )}
                    </div>

                    {/* View Mode and Results Count */}
                    <div className="flex items-center space-x-4">
                        <Badge variant="secondary" className="text-sm">
                            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                        </Badge>

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
                </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
                <div className={`grid gap-6 ${viewMode === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                    : 'grid-cols-1'
                    }`}>
                    {filteredProducts.map((product) => (
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
                        Try adjusting your search terms or filters to find what you're looking for.
                    </p>
                    <Button onClick={clearFilters} className="bg-orange-600 hover:bg-orange-700">
                        Clear All Filters
                    </Button>
                </div>
            )}

            {/* Pagination (placeholder for future implementation) */}
            {filteredProducts.length > 12 && (
                <div className="mt-12 flex justify-center">
                    <div className="flex space-x-2">
                        <Button variant="outline" disabled>Previous</Button>
                        <Button variant="default" className="bg-orange-600 hover:bg-orange-700">1</Button>
                        <Button variant="outline">2</Button>
                        <Button variant="outline">3</Button>
                        <Button variant="outline">Next</Button>
                    </div>
                </div>
            )}
        </div>
    );
}
