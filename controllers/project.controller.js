const Project = require('../models/project.model');

const createProject = async (req, res) => {
    const { name, description } = req.body;
    const userId = req.user._id;

    try {
        // Check if project exists for THIS USER
        const projectExists = await Project.findOne({ name, user: userId });

        if (projectExists) {
            return res.status(400).json({ 
                message: 'You already have a project with this name' 
            });
        }

        const project = await Project.create({ 
            name: name.trim(), 
            description: description?.trim(),
            user: userId // Include the user ID
        });

        res.status(201).json({
            _id: project._id,
            name: project.name,
            description: project.description,
            user: project.user,
            createdAt: project.createdAt
        });
    } catch (error) {
        console.error('Project creation error:', error);
        res.status(500).json({ 
            message: 'Server error', 
            error: error.message
        });
    }
};

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createProject,
    getAllProjects
};
