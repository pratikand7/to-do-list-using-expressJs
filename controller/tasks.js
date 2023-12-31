const Task = require('../models/tasks')

const getAllTask = async (req,res) => {
    try {
       const tasks = await Task.find({})
       res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error});
    }   
}

const getTask = async (req,res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        res.status(201).json({task});

        if(!task){
            return res.status(404).json({msg:"No task found!"})
        }
    } catch (error) {
        res.status(500).json({msg:error});
    }   
}

const updateTask = async (req,res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new : true,
            runValidators: true
        });
        

        if(!task){
            return res.status(404).json({msg:"No task found to update!"})
        }
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const deleteTask = async (req,res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        res.status(201).json({task});

        if(!task){
            return res.status(404).json({msg:"No task found to delete!"})
        }
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const editTask = async (req,res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new : true,
            runValidators: true,
            overwrite : true
        });
        

        if(!task){
            return res.status(404).json({msg:"No task found to update!"})
        }
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
}