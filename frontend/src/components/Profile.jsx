import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import '../styles/Profile.css';

const Profile = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get('/user/profile', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                // console.log('useEffect response', response);
                setUser(response.data);
                setName(response.data.name);
                setBio(response.data.bio);
            } catch (error) {
                console.error(error.response?.data?.message || 'Error fetching profile');
            }
        };
        fetchUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('bio', bio);
        if (profileImage) formData.append('profileImage', profileImage);

        try {
            const response = await api.put('/user/profile', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            // console.log('profile data', response);
            setUser(response.data);
        } catch (error) {
            console.error(error.response?.data?.message || 'Error updating profile');
        }
    };

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            {user.profileImage && (
                <img src={`http://localhost:5000${user.profileImage}`} alt="Profile" />
                // <img src={user.profileImage} alt="Profile" />
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <input
                    type="file"
                    onChange={(e) => setProfileImage(e.target.files[0])}
                />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
