'use client';

import { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { Product, CartItem } from '@/types';

interface CartState {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
}

interface CartContextType extends CartState {
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
}

type CartAction =
    | { type: 'ADD_TO_CART'; product: Product; quantity: number }
    | { type: 'REMOVE_FROM_CART'; productId: string }
    | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
    | { type: 'CLEAR_CART' };

const initialState: CartState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
};

const generateCartItemId = () => Math.random().toString(36).substr(2, 9);

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItemIndex = state.items.findIndex(
                item => item.productId === action.product.id
            );

            let newItems: CartItem[];

            if (existingItemIndex >= 0) {
                // Update existing item quantity
                newItems = state.items.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + action.quantity }
                        : item
                );
            } else {
                // Add new item
                const newItem: CartItem = {
                    id: generateCartItemId(),
                    productId: action.product.id,
                    product: action.product,
                    quantity: action.quantity,
                    price: action.product.price,
                };
                newItems = [...state.items, newItem];
            }

            const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            return {
                items: newItems,
                totalItems,
                totalPrice,
            };
        }

        case 'REMOVE_FROM_CART': {
            const newItems = state.items.filter(item => item.productId !== action.productId);
            const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            return {
                items: newItems,
                totalItems,
                totalPrice,
            };
        }

        case 'UPDATE_QUANTITY': {
            if (action.quantity <= 0) {
                return cartReducer(state, { type: 'REMOVE_FROM_CART', productId: action.productId });
            }

            const newItems = state.items.map(item =>
                item.productId === action.productId
                    ? { ...item, quantity: action.quantity }
                    : item
            );

            const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            return {
                items: newItems,
                totalItems,
                totalPrice,
            };
        }

        case 'CLEAR_CART': {
            return initialState;
        }

        default:
            return state;
    }
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product: Product, quantity = 1) => {
        dispatch({ type: 'ADD_TO_CART', product, quantity });
    };

    const removeFromCart = (productId: string) => {
        dispatch({ type: 'REMOVE_FROM_CART', productId });
    };

    const updateQuantity = (productId: string, quantity: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const value: CartContextType = {
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
