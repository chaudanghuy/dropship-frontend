export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  category: string;
  imageUrl: string;
  images: string[];
  inStock: boolean;
  stockQuantity: number;
  specifications: Record<string, string>;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  brand?: string;
  sku: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
  parentId?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  price: number;
}

export interface Cart {
  id: string;
  userId?: string;
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: Address;
  createdAt: Date;
  isAdmin: boolean;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: string;
  userId: string;
  user: User;
  items: CartItem[];
  shippingAddress: Address;
  billingAddress: Address;
  totalAmount: number;
  shippingCost: number;
  taxAmount: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
  trackingNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  user: User;
  rating: number;
  comment: string;
  createdAt: Date;
}
