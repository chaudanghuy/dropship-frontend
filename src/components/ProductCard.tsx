import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { Product } from '@/types';

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        onAddToCart?.(product);
    };

    return (
        <Card className="group hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
            <Link href={`/product/${product.id}`} className="block flex-1">
                <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    {!product.inStock && (
                        <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                            Out of Stock
                        </Badge>
                    )}
                    {product.stockQuantity < 10 && product.inStock && (
                        <Badge className="absolute top-2 left-2 bg-yellow-500 text-black">
                            Low Stock
                        </Badge>
                    )}
                </div>

                <CardContent className="p-4 flex-1">
                    <div className="mb-2">
                        <Badge variant="secondary" className="text-xs">
                            {product.category}
                        </Badge>
                    </div>

                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-orange-600">
                        {product.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                    </p>

                    {product.brand && (
                        <p className="text-xs text-gray-500 mb-2">Brand: {product.brand}</p>
                    )}

                    <div className="flex items-center mb-2">
                        <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">(47 reviews)</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-2xl font-bold text-gray-900">
                                ${product.price.toFixed(2)}
                            </span>
                            {product.price > 100 && (
                                <span className="text-sm text-green-600 ml-2">Free Shipping</span>
                            )}
                        </div>
                    </div>

                    {product.specifications && Object.keys(product.specifications).length > 0 && (
                        <div className="mt-3 pt-3 border-t">
                            <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                                {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                                    <div key={key}>
                                        <span className="font-medium">{key}:</span> {value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Link>

            <CardFooter className="p-4 pt-0">
                <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300"
                >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
