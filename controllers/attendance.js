const Attendance = require('../models/attendance');
const Student = require('../models/student');

const markAttendance = async(req,res) => {
    try{
        const { courseId, studentRegNo, present } = req.body;
        const student = await Student.findOne({ regNo: studentRegNo });

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        const attendanceRecord = new Attendance({
        courseId,
        studentRegNo,
        present,
        });

        await attendanceRecord.save();

        res.status(201).json({ message: 'Attendance marked successfully' })
    }
    catch (err){
        console.warn(err);
    }
}

module.exports(markAttendance)