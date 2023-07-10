const Log = require('../model/LogModel');
const Course = require('../model/CourseModel');

// POST route handler
const createCourseLog = async (req, res) => {
    try {
        const id = req.params.id;
        const logData = req.body;
    
        // Create a new log object
        const log = new Log(logData);
    
        // Save the log
        await log.save();
    
        // Find the course by its ID
        const course = await Course.findById(id);
    
        // Add the log's ID to the course's logs array
        course.logs.push(log._id);
    
        // Save the updated course
        await course.save();
    
        res.status(200).json({ message: "Log added successfully", log });
      } catch (error) {
        res.status(500).json({ message: "Error adding log", error: error.message });
      }
  };
  

  const getCourseLogs = async (req, res) => {
    try {
      const id = req.params.id;
  
      // Find the course by its ID
      const course = await Course.findById(id);
  
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
  
      // Fetch the logs for the course and populate complete log data
      const logs = await Log.find({ _id: { $in: course.logs } });
  
      res.status(200).json({ logs });
    } catch (error) {
      res.status(500).json({ message: "Error retrieving logs", error: error.message });
    }
  };

module.exports = {
    createCourseLog,
    getCourseLogs
};
