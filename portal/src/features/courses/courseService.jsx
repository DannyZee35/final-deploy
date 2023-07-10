import axios from "axios";

const create_Course = async (courseData, token) => {
 
 
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    const response = await axios.post(
      "https://final-backend-ten.vercel.app/create-course",
      courseData,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//get courses
const getCourses = async (token) => {
 
 
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        
      },
    };
  
    try {
      const response = await axios.get(
        "https://final-backend-ten.vercel.app/courses",
        config
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  const updateCourse = async (courseID, courseData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(config);
    console.log(courseData);

    try {
      const response = await axios.put(
        `https://final-backend-ten.vercel.app/${courseID}`,
        courseData,
        config
      )
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
 

  const getSingleCourse = async (courseID, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(`https://final-backend-ten.vercel.app/courses/${courseID}`, config)
  
    return response.data
  }

 
 
  export const updateHodFeedback = async (id, updatedHodFeedbackData, token) => {
    try {
      const response = await axios.put(`https://final-backend-ten.vercel.app/HodFeedback/${id}`, updatedHodFeedbackData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const updateFolderFeedback = async (id, updatedFolderFeedbackData, token) => {
    try {
      const response = await axios.put(`https://final-backend-ten.vercel.app/FolderFeedback/${id}`, updatedFolderFeedbackData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  const addLogToCourse = async (id, logData, token) => {
    try {
      const response = await axios.post(
        `https://final-backend-ten.vercel.app/courses/${id}/logs`,
        logData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
 
 const getLogsForCourse = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(`https://final-backend-ten.vercel.app/courses/${id}/logs`, config)

  return response.data.logs;
}
   
const courseService = {
  create_Course,getCourses,
  getSingleCourse,
  updateCourse,
  updateHodFeedback,
  updateFolderFeedback,
  addLogToCourse,
  getLogsForCourse
};

export default courseService;