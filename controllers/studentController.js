const Student = require('../models/Student');

exports.insertUser = async (req, res) => {
    try {
        const { rollNo, fullName, department, CGPA } = req.body;

        await Student.create({
            rollNo,
            fullName,
            department,
            CGPA
        });

        res.json({
            status: true,
            message: 'Student added successfully'
        });

    } catch (err) {
        console.log(err);
        res.json({
            status: false,
            message: 'Internal server error'
        });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const students = await Student.find();

        res.json({
            status: true,
            data: students
        });

    } catch (err) {
        console.log(err);
        res.json({status: false,message: 'Internal server error'});
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { fullName, department, CGPA } = req.body;

        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            { fullName, department, CGPA },
            { new: true }
        );

        if (!updatedStudent) {
            return res.json({ status: false, message: 'Student not found' });
        }
        res.json({ status: true, message: 'Student updated successfully', data: updatedStudent });

    } catch (err) {
        console.log(err);
        res.json({ status: false, message: 'Internal server error' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.json({ status: false, message: 'Student not found' });
        }

        res.json({ status: true, message: 'Student deleted successfully' });

    } catch (err) {
        console.log(err);
        res.json({ status: false, message: 'Internal server error' });
    }
};