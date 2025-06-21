import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
    const { user, updateProfile, logout } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        description: user?.description || '',
        skills: user?.skills?.join(', ') || ''
    });

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
                    <p className="text-gray-600">Please sign in to access your dashboard.</p>
                </div>
            </div>
        );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        });
    };

    const handleSaveProfile = () => {
        updateProfile({
            firstName: editForm.firstName,
            lastName: editForm.lastName,
            description: editForm.description,
            skills: editForm.skills.split(',').map(skill => skill.trim()).filter(skill => skill)
        });
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setEditForm({
            firstName: user.firstName,
            lastName: user.lastName,
            description: user.description || '',
            skills: user.skills?.join(', ') || ''
        });
        setIsEditing(false);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                {user.firstName[0]}{user.lastName[0]}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    {user.firstName} {user.lastName}
                                </h1>
                                <p className="text-gray-600 capitalize">{user.userType}</p>
                                <div className="flex items-center mt-1">
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="ml-1 text-sm font-medium text-gray-900">{user.rating?.toFixed(1)}</span>
                                    <span className="ml-2 text-sm text-gray-500">Member since {formatDate(user.joinDate)}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Profile Information */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
                                {!isEditing ? (
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="text-green-600 hover:text-green-700 font-medium"
                                    >
                                        Edit Profile
                                    </button>
                                ) : (
                                    <div className="space-x-2">
                                        <button
                                            onClick={handleSaveProfile}
                                            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={handleCancelEdit}
                                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </div>

                            {isEditing ? (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={editForm.firstName}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={editForm.lastName}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            value={editForm.description}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Tell others about yourself..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Skills (comma separated)
                                        </label>
                                        <input
                                            type="text"
                                            name="skills"
                                            value={editForm.skills}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="e.g., Web Design, Logo Design, React"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-700">Email</h3>
                                        <p className="mt-1 text-gray-900">{user.email}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-700">Description</h3>
                                        <p className="mt-1 text-gray-900">
                                            {user.description || 'No description provided yet.'}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-700">Skills</h3>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {user.skills && user.skills.length > 0 ? (
                                                user.skills.map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))
                                            ) : (
                                                <p className="text-gray-500">No skills added yet.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Activity Summary */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Activity Summary</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">{user.totalOrders || 0}</div>
                                    <div className="text-sm text-gray-600">Total Orders</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">{user.rating?.toFixed(1) || 'N/A'}</div>
                                    <div className="text-sm text-gray-600">Average Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">
                                        {Math.floor((Date.now() - new Date(user.joinDate).getTime()) / (1000 * 60 * 60 * 24))}
                                    </div>
                                    <div className="text-sm text-gray-600">Days on Fiverr</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Quick Actions */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                {(user.userType === 'seller' || user.userType === 'both') && (
                                    <button className="w-full text-left p-3 rounded-md border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors">
                                        <div className="font-medium text-gray-900">Create New Gig</div>
                                        <div className="text-sm text-gray-600">Start offering a new service</div>
                                    </button>
                                )}
                                <button className="w-full text-left p-3 rounded-md border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors">
                                    <div className="font-medium text-gray-900">Browse Services</div>
                                    <div className="text-sm text-gray-600">Find freelancers for your project</div>
                                </button>
                                <button className="w-full text-left p-3 rounded-md border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors">
                                    <div className="font-medium text-gray-900">View Messages</div>
                                    <div className="text-sm text-gray-600">Check your conversations</div>
                                </button>
                            </div>
                        </div>

                        {/* Account Status */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Status</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Email Verified</span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Verified
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Profile Complete</span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        {user.description && user.skills?.length ? 'Complete' : 'Incomplete'}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Account Type</span>
                                    <span className="text-sm font-medium text-gray-900 capitalize">{user.userType}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
