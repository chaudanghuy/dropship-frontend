'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
    const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
    const [isLoading, setIsLoading] = useState(false);

    const shippingCost = totalPrice > 50 ? 0 : 9.99;
    const tax = totalPrice * 0.08; // 8% tax
    const finalTotal = totalPrice + shippingCost + tax;

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        if (newQuantity >= 1) {
            updateQuantity(productId, newQuantity);
        }
    };

    const handleCheckout = async () => {
        setIsLoading(true);
        // Simulate checkout process
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert('Checkout functionality will be implemented in the next phase!');
        setIsLoading(false);
    };

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-md mx-auto text-center">
                    <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
                    <p className="text-gray-600 mb-8">
                        Start shopping to add items to your cart
                    </p>
                    <Link href="/">
                        <Button className="bg-orange-600 hover:bg-orange-700">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Continue Shopping
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
                <Badge variant="secondary" className="text-lg">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {items.map((item) => (
                        <Card key={item.id} className="overflow-hidden">
                            <CardContent className="p-6">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {/* Product Image */}
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={item.product.imageUrl}
                                            alt={item.product.name}
                                            width={120}
                                            height={120}
                                            className="w-full sm:w-30 h-30 object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-semibold text-lg">
                                                    <Link
                                                        href={`/product/${item.product.id}`}
                                                        className="hover:text-orange-600"
                                                    >
                                                        {item.product.name}
                                                    </Link>
                                                </h3>
                                                <p className="text-gray-600">{item.product.category}</p>
                                                {item.product.brand && (
                                                    <p className="text-sm text-gray-500">Brand: {item.product.brand}</p>
                                                )}
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => removeFromCart(item.productId)}
                                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>

                                        {/* Price and Quantity */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-sm text-gray-600">Qty:</span>
                                                <div className="flex items-center border rounded-lg">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                                                        disabled={item.quantity <= 1}
                                                        className="h-8 w-8 p-0"
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </Button>
                                                    <span className="px-3 py-1 text-sm font-medium">
                                                        {item.quantity}
                                                    </span>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                                                        className="h-8 w-8 p-0"
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-bold">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    ${item.price.toFixed(2)} each
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {/* Clear Cart Button */}
                    <div className="pt-4">
                        <Button
                            variant="outline"
                            onClick={clearCart}
                            className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Clear Cart
                        </Button>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-4">
                        <CardContent className="p-6">
                            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between">
                                    <span>Subtotal ({totalItems} items)</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>
                                        {shippingCost === 0 ? (
                                            <span className="text-green-600">FREE</span>
                                        ) : (
                                            `$${shippingCost.toFixed(2)}`
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <div className="border-t pt-3">
                                    <div className="flex justify-between text-lg font-bold">
                                        <span>Total</span>
                                        <span>${finalTotal.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {totalPrice < 50 && (
                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                                    <p className="text-sm text-orange-800">
                                        Add ${(50 - totalPrice).toFixed(2)} more for free shipping!
                                    </p>
                                </div>
                            )}
                        </CardContent>

                        <CardFooter className="p-6 pt-0">
                            <div className="w-full space-y-3">
                                <Button
                                    className="w-full bg-orange-600 hover:bg-orange-700"
                                    onClick={handleCheckout}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                                </Button>
                                <Link href="/" className="block">
                                    <Button variant="outline" className="w-full">
                                        <ArrowLeft className="h-4 w-4 mr-2" />
                                        Continue Shopping
                                    </Button>
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
