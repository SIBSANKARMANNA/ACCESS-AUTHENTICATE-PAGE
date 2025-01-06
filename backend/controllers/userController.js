const User = require('../models/User');

const getUserProfile = async (req, res) => {
    const user = req.user;

    if (user) {
        res.json({
            name: user.name,
            email: user.email,
            profileImage: user.profileImage,
            bio: user.bio,
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

const updateUserProfile = async (req, res) => {
    const user = req.user;

    try {
        user.name = req.body.name || user.name;
        user.bio = req.body.bio || user.bio;

        if (req.file) {
            user.profileImage = `/uploads/${req.file.filename}`;
        }

        const updatedUser = await user.save();

        res.json({
            name: updatedUser.name,
            email: updatedUser.email,
            profileImage: updatedUser.profileImage,
            bio: updatedUser.bio,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getUserProfile, updateUserProfile };
