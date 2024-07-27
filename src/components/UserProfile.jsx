// src/components/UserProfile.js
import React from 'react';
import useGlobalStore from '../store/useStore';

const UserProfile = () => {
    const { user, fetchRandomUser } = useGlobalStore();

    if (!user) return <div>Loading...</div>;

  if (!user) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100">
        <button 
        onClick={fetchRandomUser}
        className="absolute top-10 right-24 mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 block mx-auto"
      >
        Fetch New User
      </button>
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
        {/* TASK: Fix image resolution for better image display quality */}
        <img
          className="w-full h-44 object-cover"
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{`${user.name.first} ${user.name.last}`}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{`${user.location.city}, ${user.location.country}`}</p>
          <p className="text-gray-600">Age: {user.dob.age}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
