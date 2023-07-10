const Course = require('../model/CourseModel');





const getAllCoursesByUser = async (req, res) => {
  const { role, id: userId } = req.user;
  try {
    let courses;
    if (role === 'course coordinator' || role === 'head of department' || role === 'course folder convenor') {
      courses = await Course.find({});
    } else {
      courses = await Course.find({ Course_Instructor: userId });
    }
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};



const getSingleCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(400).json({ error: 'Course Not Found' });
    }    
    
    if (!req.user) {
      return res.status(401).json({ error: 'User Not Found' });
    }
    
    if (req.user.UserRole === 'instructor' && course.Course_Instructor.toString() !== req.user.id) {
      return res.status(401).json({ error: 'User Not Authorized' });
    } else if (req.user.UserRole === 'course coordinator') {
      // Allow hod users to see all courses
    }
    
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

  const updateCourse = async (req, res) => {
  // Get the course ID from the request URL
    const { status, feedback } = req.body; // Get the new status and feedback values from the request body
    const coordinatorId = req.user._id; // Get the ID of the logged-in coordinator from the request user object

    try {
      // Find the course by ID
      const course = await Course.findById(req.params.id);

      // Check if the course exists
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }

      // Update the course status and feedback
      course.status = status;
      course.feedback = feedback;

      // Update the coordinator ID only if it's not already set
      if (!course.coordinator) {
        course.coordinator = coordinatorId;
      }

      // Save the updated course
      await course.save();

      res.json(course);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };

  const FolderUpdateCourse = async (req, res) => {
    // Get the course ID from the request URL
      const { status, FolderCoordinatorFeedback } = req.body; // Get the new status and feedback values from the request body
      const coordinatorId = req.user._id; // Get the ID of the logged-in coordinator from the request user object
  
      try {
        // Find the course by ID
        const course = await Course.findById(req.params.id);
  
        // Check if the course exists
        if (!course) {
          return res.status(404).json({ message: 'Course not found' });
        }
  
        // Update the course status and feedback
        course.status = status;
        course.FolderCoordinatorFeedback = FolderCoordinatorFeedback;
  
        // Update the coordinator ID only if it's not already set
        if (!course.coordinator) {
          course.coordinator = coordinatorId;
        }
  
        // Save the updated course
        await course.save();
  
        res.json(course);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    };

    const HodUpdateCourse = async (req, res) => {
      // Get the course ID from the request URL
        const { status, HodFeedback } = req.body; // Get the new status and feedback values from the request body
        const coordinatorId = req.user._id; // Get the ID of the logged-in coordinator from the request user object
    
        try {
          // Find the course by ID
          const course = await Course.findById(req.params.id);
    
          // Check if the course exists
          if (!course) {
            return res.status(404).json({ message: 'Course not found' });
          }
    
          // Update the course status and feedback
          course.status = status;
          course.HodFeedback = HodFeedback;
    
          // Update the coordinator ID only if it's not already set
          if (!course.coordinator) {
            course.coordinator = coordinatorId;
          }
    
          // Save the updated course
          await course.save();
    
          res.json(course);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server Error' });
        }
      };
module.exports = {
  getSingleCourse,
  FolderUpdateCourse,
  HodUpdateCourse,
  getAllCoursesByUser,
  updateCourse
};
