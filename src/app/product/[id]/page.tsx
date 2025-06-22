'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Star, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/data/sample-data';
import type { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';

export default function ProductPage() {
    const params = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    useEffect(() => {
        if (params.id) {
            const foundProduct = products.find(p => p.id === params.id);
            setProduct(foundProduct || null);
        }
    }, [params.id]);

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                    <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
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

    const handleAddToCart = async () => {
        setIsAddingToCart(true);
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading
        addToCart(product, quantity);
        setIsAddingToCart(false);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
                <Link href="/" className="hover:text-orange-600">Home</Link>
                <span>/</span>
                <Link href={`/category/${product.categoryId}`} className="hover:text-orange-600">
                    {product.category}
                </Link>
                <span>/</span>
                <span className="text-gray-900">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Images */}
                <div>
                    <div className="mb-4">
                        <Image
                            src={product.images[selectedImage] || product.imageUrl}
                            alt={product.name}
                            width={600}
                            height={400}
                            className="w-full h-96 object-cover rounded-lg border"
                        />
                    </div>

                    {/* Image thumbnails */}
                    {product.images.length > 1 && (
                        <div className="flex space-x-2 overflow-x-auto">
                            {product.images.map((image, index) => (
                                <button
                                    key={image}
                                    onClick={() => setSelectedImage(index)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden ${selectedImage === index ? 'border-orange-500' : 'border-gray-200'
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Details */}
                <div>
                    <div className="mb-4">
                        <Badge variant="secondary">{product.category}</Badge>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

                    {product.brand && (
                        <p className="text-lg text-gray-600 mb-4">Brand: {product.brand}</p>
                    )}

                    <div className="flex items-center mb-4">
                        <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-gray-600 ml-2">(47 reviews)</span>
                    </div>

                    <div className="mb-6">
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                            ${product.price.toFixed(2)}
                        </div>
                        {product.price > 50 && (
                            <Badge className="bg-green-100 text-green-800">Free Shipping</Badge>
                        )}
                    </div>

                    <p className="text-gray-700 mb-6">{product.description}</p>

                    {/* Stock Status */}
                    <div className="mb-6">
                        {product.inStock ? (
                            <div className="flex items-center text-green-600">
                                <Check className="h-5 w-5 mr-2" />
                                <span>In Stock ({product.stockQuantity} available)</span>
                            </div>
                        ) : (
                            <div className="text-red-600">
                                <span>Out of Stock</span>
                            </div>
                        )}
                    </div>

                    {/* Quantity and Add to Cart */}
                    {product.inStock && (
                        <div className="mb-8">
                            <div className="flex items-center space-x-4 mb-4">
                                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                                <div className="flex items-center border rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-3 py-2 hover:bg-gray-100"
                                        disabled={quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 border-x">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-3 py-2 hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <Button
                                onClick={handleAddToCart}
                                disabled={isAddingToCart}
                                className="w-full bg-orange-600 hover:bg-orange-700 mb-4"
                                size="lg"
                            >
                                <ShoppingCart className="h-5 w-5 mr-2" />
                                {isAddingToCart ? 'Adding...' : `Add ${quantity} to Cart`}
                            </Button>
                        </div>
                    )}

                    {/* Product Features */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <Truck className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                            <div className="text-sm font-medium">Fast Shipping</div>
                            <div className="text-xs text-gray-600">2-3 business days</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                            <div className="text-sm font-medium">Quality Guarantee</div>
                            <div className="text-xs text-gray-600">Professional grade</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <RotateCcw className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                            <div className="text-sm font-medium">Easy Returns</div>
                            <div className="text-xs text-gray-600">30-day policy</div>
                        </div>
                    </div>

                    {/* Product Specifications */}
                    {product.specifications && Object.keys(product.specifications).length > 0 && (
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                                            <span className="font-medium text-gray-700">{key}:</span>
                                            <span className="text-gray-900">{value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Additional specs from product data */}
                                {product.weight && (
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-700">Weight:</span>
                                        <span className="text-gray-900">{product.weight} lbs</span>
                                    </div>
                                )}

                                {product.dimensions && (
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-700">Dimensions:</span>
                                        <span className="text-gray-900">
                                            {product.dimensions.length}" × {product.dimensions.width}" × {product.dimensions.height}"
                                        </span>
                                    </div>
                                )}

                                <div className="flex justify-between py-2">
                                    <span className="font-medium text-gray-700">SKU:</span>
                                    <span className="text-gray-900">{product.sku}</span>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
