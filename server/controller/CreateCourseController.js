const Course = require('../model/CourseModel');
const cloudinary = require('../middleware/cloudinary');
const multer = require('multer');
const path = require('path');
const fs = require("fs");



const createCourse = async (req, res,next) => {
  const {
    courseTitle,
    courseCode,
    Section_no,
    Instructor_name,
    semester_no,
    introduction,
    objectives,
    contents,
    ref_books,
    evaluation_criteria,

    
    status,
   
    attendance_record,
    //controller body yha se



  } = req.body;
  try {

     

    // Get path of the uploaded attendance record file


    // upload all files to cloudinary

    //cloudinary yha se 


    const file = req.files.attendance_record
    const lecNotes = req.files.ref_of_lectureNotes
    const AssTask = req.files.assignmentTask
    const BestAssi = req.files.Best_Solved_Assignment
    const AvgAssi = req.files.Avg_Solved_Assignment
    const WorstAssi = req.files.Worst_Solved_Assignment
    const quiz = req.files.Quiz_Paper
    const bestQuiz = req.files.Best_Solved_Quiz
    const avgQuiz = req.files.Avg_Solved_Quiz
    const worstQuiz = req.files.Worst_Solved_Quiz
    const mid = req.files.MidTerm
    const bestMid = req.files.Best_Mid
    const avgMid = req.files.Avg_Mid
    const worstMid = req.files.Worst_Mid
    const final = req.files.Final_Paper
    const bestFinal = req.files.Best_Final
    const avgFinal = req.files.Avg_Final
    const worstFinal = req.files.Worst_Final
    const project = req.files.Project_Report
    const courseResult = req.files.Course_Result
    const clo = req.files.CLO_Assesment
    const review = req.files.ReviewReport

    const result = await cloudinary.uploader.upload(file.tempFilePath, { folder: "Attendance" },)
    const lec_result = await cloudinary.uploader.upload(lecNotes.tempFilePath, { folder: "Lecture Notes" },)
    const assg_result = await cloudinary.uploader.upload(AssTask.tempFilePath, { public_id:AssTask.name, folder: "Assignment Question",   resource_type: 'auto'  },)
    const best_assg_result = await cloudinary.uploader.upload(BestAssi.tempFilePath, { folder: "Best Assignment" },)
    const avg_assg_result = await cloudinary.uploader.upload(AvgAssi.tempFilePath, { folder: "Avg Assignment" },)
    const worst_assg_result = await cloudinary.uploader.upload(WorstAssi.tempFilePath, { folder: "Worst Assignment" },)
    const quiz_result =await cloudinary.uploader.upload(quiz.tempFilePath, { public_id:quiz.name, folder: "Quiz Paper",   resource_type: 'auto'  },)
    const best_quiz_result = await cloudinary.uploader.upload(bestQuiz.tempFilePath, { folder: "Best Quiz" },)
    const avg_quiz_result = await cloudinary.uploader.upload(avgQuiz.tempFilePath, { folder: "Avg Quiz" },)
    const worst_quiz_result = await cloudinary.uploader.upload(worstQuiz.tempFilePath, { folder: "Worst Quiz" },)
    const mid_result =await cloudinary.uploader.upload(mid.tempFilePath, {public_id:mid.name, folder: "Mid Paper",   resource_type: 'auto'  },)
    const best_mid_result = await cloudinary.uploader.upload(bestMid.tempFilePath, { folder: "Best Mid" },)
    const avg_mid_result = await cloudinary.uploader.upload(avgMid.tempFilePath, { folder: "Avg Mid" },)
    const worst_mid_result = await cloudinary.uploader.upload(worstMid.tempFilePath, { folder: "Worst Mid" },)
    const final_result =await cloudinary.uploader.upload(final.tempFilePath, {public_id:final.name, folder: "Final Paper",   resource_type: 'auto'  },)
    const best_final_result = await cloudinary.uploader.upload(bestFinal.tempFilePath, { folder: "Best Final" },)
    const avg_final_result = await cloudinary.uploader.upload(avgFinal.tempFilePath, { folder: "Avg Final" },)
    const worst_final_result = await cloudinary.uploader.upload(worstFinal.tempFilePath, { folder: "Worst Final" },)
    const project_result = await cloudinary.uploader.upload(project.tempFilePath, {  public_id: project.name, 
      folder: "Project Report",    resource_type: 'auto'},)
    const course_result = await cloudinary.uploader.upload(courseResult.tempFilePath, { folder: "Course Result" },)
    const clo_result = await cloudinary.uploader.upload(clo.tempFilePath, { folder: "CLO Assesment" },)
    const review_result = await cloudinary.uploader.upload(review.tempFilePath, {public_id:review.name, folder: "Review Report",   resource_type: 'auto'  },)


    const InstructorId = req.user._id;

 

    const course = await new Course({
      Course_Instructor: InstructorId,
      courseTitle,
      courseCode,
      Section_no,
      Instructor_name,
      semester_no,
      introduction,
      objectives,
      contents,
      ref_books,
      evaluation_criteria,
     
      status,
   
      
    
      attendance_record: {
        url: result.url, 
      },
      ref_of_lectureNotes: {
        url: lec_result.url, 
      },
      assignmentTask: {
        url: assg_result.url, 
      },
      Best_Solved_Assignment: {
        url: best_assg_result.url, 
      },
      Avg_Solved_Assignment: {
        url: avg_assg_result.url, 
      },
      Worst_Solved_Assignment: {
        url: worst_assg_result.url, 
      },
      Quiz_Paper: {
        url: quiz_result.url, 
      },
      Best_Solved_Quiz: {
        url: best_quiz_result.url, 
      },
      Avg_Solved_Quiz: {
        url: avg_quiz_result.url, 
      },
      Worst_Solved_Quiz: {
        url: worst_quiz_result.url, 
      },
      MidTerm: {
        url: mid_result.url, 
      },
      Best_Mid: {
        url: best_mid_result.url, 
      },
      Avg_Mid: {
        url: avg_mid_result.url, 
      },
      Worst_Mid: {
        url: worst_mid_result.url, 
      },
      Final_Paper: {
        url: final_result.url, 
      },
      Best_Final: {
        url: best_final_result.url, 
      },
      Avg_Final: {
        url: avg_final_result.url, 
      },
      Worst_Final: {
        url: worst_final_result.url, 
      },
      Project_Report: {
        url: project_result.url, 
      },
      Course_Result: {
        url: course_result.url, 
      },
      CLO_Assesment: {
        url: clo_result.url, 
      },
      ReviewReport: {
        url: review_result.url, 
      } 

      //new course yha se 
    });

    const savedCourse = await course.save();

  
    
    
    res.status(201).json(savedCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};



module.exports = {
  createCourse,

};
