'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Truck, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/sample-data';
import type { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';

export default function Home() {
  const [featuredProducts] = useState<Product[]>(products.slice(0, 8));
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Build Your Dreams with Quality Materials
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                From lumber to tools, find everything you need for your construction projects.
                Professional-grade supplies at contractor-friendly prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  Browse Catalog
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop"
                alt="Construction tools and materials"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                Free Shipping Over $50
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600 text-sm">On orders over $50</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold mb-2">Quality Guarantee</h3>
            <p className="text-gray-600 text-sm">Professional-grade materials</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600 text-sm">Professional advice available</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Same-day local delivery</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group text-center hover:shadow-lg transition-shadow rounded-lg p-4"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="font-semibold text-sm group-hover:text-orange-600">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link href="/products">
            <Button variant="outline">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Contractor Discounts</h3>
              <p className="mb-6">
                Sign up for a contractor account and save up to 15% on bulk orders.
                Special pricing on lumber, hardware, and professional tools.
              </p>
              <Button className="bg-white text-orange-600 hover:bg-gray-100">
                Learn More
              </Button>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Weekly Deals</h3>
              <p className="mb-6">
                Check out our weekly specials on tools, building materials, and hardware.
                New deals every Monday!
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                View Deals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4">
        <div className="bg-orange-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for new product announcements, special offers,
            and building tips from the professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
