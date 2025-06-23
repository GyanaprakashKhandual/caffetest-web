const Bug = require('../models/bug.model');
const Project = require('../models/project.model');

const createBugForProject = async (req, res) => {
    try {
        const { projectId } = req.params;

        // Optional: Check if the project exists
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }

        const newBug = new Bug({
            ...req.body
        });

        await newBug.save();

        res.status(201).json({ success: true, message: 'Bug added to project', data: newBug });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


const getBugsByProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const bugs = await Bug.find();

        res.status(200).json({ success: true, data: bugs });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getBugById = async (req, res) => {
    try {
        const { bugId } = req.params;

        const bug = await Bug.findById(bugId).populate('bugId');
        if (!bug) {
            return res.status(404).json({ success: false, message: 'Bug not found' });
        }

        res.status(200).json({ success: true, data: bug });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateBug = async (req, res) => {
    try {
        const { bugId } = req.params;

        const updated = await Bug.findByIdAndUpdate(bugId, req.body, { new: true });
        if (!updated) {
            return res.status(404).json({ success: false, message: 'Bug not found' });
        }

        res.status(200).json({ success: true, message: 'Bug updated successfully', data: updated });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteBug = async (req, res) => {
    try {
        const { bugId } = req.params;

        const deleted = await Bug.findByIdAndDelete(bugId);
        if (!deleted) {
            return res.status(404).json({ success: false, message: 'Bug not found' });
        }

        res.status(200).json({ success: true, message: 'Bug deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createBugForProject,
    getBugsByProject,
    getBugById,
    updateBug,
    deleteBug
};
