import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    userType: 'buyer' | 'seller' | 'both';
    joinDate: string;
    totalOrders?: number;
    rating?: number;
    skills?: string[];
    description?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    register: (userData: RegisterData) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
    updateProfile: (data: Partial<User>) => void;
}

interface RegisterData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    userType: 'buyer' | 'seller' | 'both';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check for existing user session on app load
        const savedUser = localStorage.getItem('fiverr_user');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (error) {
                localStorage.removeItem('fiverr_user');
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
        setIsLoading(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Check if user exists in localStorage (simulating database)
        const users = JSON.parse(localStorage.getItem('fiverr_users') || '[]');
        const existingUser = users.find((u: User & { password: string }) =>
            u.email === email && u.password === password
        );

        if (existingUser) {
            const { password: _, ...userWithoutPassword } = existingUser;
            setUser(userWithoutPassword);
            localStorage.setItem('fiverr_user', JSON.stringify(userWithoutPassword));
            setIsLoading(false);
            return { success: true };
        } else {
            setIsLoading(false);
            return { success: false, error: 'Invalid email or password' };
        }
    };

    const register = async (userData: RegisterData): Promise<{ success: boolean; error?: string }> => {
        setIsLoading(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('fiverr_users') || '[]');
        const existingUser = users.find((u: User) => u.email === userData.email);

        if (existingUser) {
            setIsLoading(false);
            return { success: false, error: 'User with this email already exists' };
        }

        // Create new user
        const newUser: User & { password: string } = {
            id: Date.now().toString(),
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            userType: userData.userType,
            joinDate: new Date().toISOString(),
            password: userData.password,
            totalOrders: 0,
            rating: 5.0,
            skills: [],
            description: ''
        };

        // Save to localStorage (simulating database)
        users.push(newUser);
        localStorage.setItem('fiverr_users', JSON.stringify(users));

        // Set current user
        const { password: _, ...userWithoutPassword } = newUser;
        setUser(userWithoutPassword);
        localStorage.setItem('fiverr_user', JSON.stringify(userWithoutPassword));

        setIsLoading(false);
        return { success: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('fiverr_user');
    };

    const updateProfile = (data: Partial<User>) => {
        if (user) {
            const updatedUser = { ...user, ...data };
            setUser(updatedUser);
            localStorage.setItem('fiverr_user', JSON.stringify(updatedUser));

            // Update in users array too
            const users = JSON.parse(localStorage.getItem('fiverr_users') || '[]');
            const userIndex = users.findIndex((u: User) => u.id === user.id);
            if (userIndex !== -1) {
                users[userIndex] = { ...users[userIndex], ...data };
                localStorage.setItem('fiverr_users', JSON.stringify(users));
            }
        }
    };

    const value: AuthContextType = {
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        updateProfile
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
