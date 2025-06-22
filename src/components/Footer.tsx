import Link from 'next/link';
import { Package, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main footer content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-orange-600 text-white p-2 rounded-lg">
                                <Package className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">BuildMart</h3>
                                <p className="text-xs text-gray-400">Hardware & Building Supplies</p>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-4">
                            Your trusted source for quality building materials, tools, and hardware supplies.
                            Serving contractors and DIY enthusiasts since 1985.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <Youtube className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/help" className="hover:text-white">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/orders" className="hover:text-white">
                                    Track Your Order
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="hover:text-white">
                                    Returns & Exchanges
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="hover:text-white">
                                    Shipping Information
                                </Link>
                            </li>
                            <li>
                                <Link href="/warranty" className="hover:text-white">
                                    Warranty Information
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Shop Categories */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Shop Categories</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/category/lumber" className="hover:text-white">
                                    Lumber & Building Materials
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/tools" className="hover:text-white">
                                    Tools & Equipment
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/hardware" className="hover:text-white">
                                    Hardware & Fasteners
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/electrical" className="hover:text-white">
                                    Electrical Supplies
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/plumbing" className="hover:text-white">
                                    Plumbing
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/concrete" className="hover:text-white">
                                    Concrete & Masonry
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 mt-0.5 text-orange-500" />
                                <div>
                                    <p>123 Industrial Drive</p>
                                    <p>Construction City, CC 12345</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-orange-500" />
                                <div>
                                    <p>(555) 123-BUILD</p>
                                    <p className="text-sm text-gray-400">Mon-Fri: 7AM-7PM, Sat: 8AM-6PM</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-orange-500" />
                                <p>info@buildmart.com</p>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <h5 className="font-semibold mb-2">Newsletter</h5>
                            <p className="text-sm text-gray-400 mb-3">
                                Get updates on new products and special offers
                            </p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-orange-500 text-white"
                                />
                                <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-r-lg transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 BuildMart. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <Link href="/privacy" className="hover:text-white">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-white">
                                Terms of Service
                            </Link>
                            <Link href="/accessibility" className="hover:text-white">
                                Accessibility
                            </Link>
                            <Link href="/sitemap" className="hover:text-white">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
