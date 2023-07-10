import {
  Container,
  Stack,
  Typography,
  TextField,Box,
  Button, CircularProgress
} from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { create_Course } from "../../features/courses/courseSlice";
const { URL } = window;
import criteria from "../../assets/sample criteria.png"


const drawerWidth = 10;
export const CreateCourse = () => {
  const [CourseForm, SetCourseForm] = useState({
    courseTitle: "",
    courseCode: "",
    Section_no: "",
    Instructor_name: "",
    semester_no: "",
    introduction: "",
    objectives: "",
    contents: "",
    ref_books: "",
    evaluation_criteria: "",
 
    attendance_record: "",
    ref_of_lectureNotes: "",
    assignmentTask: "",
    Best_Solved_Assignment: "",
    Avg_Solved_Assignment: "",
    Worst_Solved_Assignment: "",
    Quiz_Paper: "",
    Best_Solved_Quiz: "",
    Avg_Solved_Quiz: "",
    Worst_Solved_Quiz: "",
    MidTerm: "",
    Best_Mid: "",
    Avg_Mid: "",
    Worst_Mid: "",
    Final_Paper: "",
    Best_Final: "",
    Avg_Final: "",
    Worst_Final: "",
    Project_Report: "",
    Course_Result: "",
    CLO_Assesment: "",
    ReviewReport: ""

  });
  {/* coures form wha yha se  */ }



  const { isLoading } = useSelector((state) => state.course)
  const dispatch = useDispatch()


  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "contents") {
      SetCourseForm({ ...CourseForm, [name]: value.split(",") });
    } else if (name === "ref_books") {
      SetCourseForm({ ...CourseForm, [name]: value.split(",") });
    } else if (name === "evaluation_criteria") {
      SetCourseForm({ ...CourseForm, [name]: value.split(",") });
    } else if (name === "attendance_record") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "ref_of_lectureNotes") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "assignmentTask") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Best_Solved_Assignment") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Avg_Solved_Assignment") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Worst_Solved_Assignment") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Quiz_Paper") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Best_Solved_Quiz") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Avg_Solved_Quiz") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Worst_Solved_Quiz") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "MidTerm") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Best_Mid") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Avg_Mid") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Worst_Mid") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Final_Paper") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Best_Final") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Avg_Final") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Worst_Final") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Project_Report") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "Course_Result") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "CLO_Assesment") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
    else if (name === "ReviewReport") {
      SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    }
     else {
      SetCourseForm({ ...CourseForm, [name]: value });
    }
  };

  const sendData = async (dataCourses) =>{

    await dispatch(create_Course(dataCourses));

     SetCourseForm({
      courseTitle: "",
      courseCode: "",
      Section_no: "",
      Instructor_name: "",
      semester_no: "",
      introduction: "",
      objectives: "",
      contents: "",
      ref_books: "",
      evaluation_criteria: "",
     
      attendance_record: "",
      ref_of_lectureNotes: "",
      assignmentTask: "",
      Best_Solved_Assignment: "",
      Avg_Solved_Assignment: "",
      Worst_Solved_Assignment: "",
      Quiz_Paper: "",
      Best_Solved_Quiz: "",
      Avg_Solved_Quiz: "",
      Worst_Solved_Quiz: "",
      MidTerm: "",
      Best_Mid: "",
      Avg_Mid: "",
      Worst_Mid: "",
      Final_Paper: "",
      Best_Final: "",
      Avg_Final: "",
      Worst_Final: "",
      Project_Report: "",
      Course_Result: "",
      CLO_Assesment: "",
      ReviewReport: ""
    })  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.set('courseTitle', CourseForm.courseTitle);
      formData.set('courseCode', CourseForm.courseCode);
      formData.set('Section_no', CourseForm.Section_no);
      formData.set('Instructor_name', CourseForm.Instructor_name);
      formData.set('semester_no', CourseForm.semester_no);
      formData.set('introduction', CourseForm.introduction);
      formData.set('objectives', CourseForm.objectives);
      formData.set('contents', CourseForm.contents);
      formData.set('ref_books', CourseForm.ref_books);
      formData.set('evaluation_criteria', CourseForm.evaluation_criteria);
    
      formData.set('attendance_record', CourseForm.attendance_record);
      formData.set('ref_of_lectureNotes', CourseForm.ref_of_lectureNotes);
      formData.set('assignmentTask', CourseForm.assignmentTask);
      formData.set('Best_Solved_Assignment', CourseForm.Best_Solved_Assignment);
      formData.set('Avg_Solved_Assignment', CourseForm.Avg_Solved_Assignment);
      formData.set('Worst_Solved_Assignment', CourseForm.Worst_Solved_Assignment);
      formData.set('Quiz_Paper', CourseForm.Quiz_Paper);
      formData.set('Best_Solved_Quiz', CourseForm.Best_Solved_Quiz);
      formData.set('Avg_Solved_Quiz', CourseForm.Avg_Solved_Quiz);
      formData.set('Worst_Solved_Quiz', CourseForm.Worst_Solved_Quiz);
      formData.set('MidTerm', CourseForm.MidTerm);
      formData.set('Best_Mid', CourseForm.Best_Mid);
      formData.set('Avg_Mid', CourseForm.Avg_Mid);
      formData.set('Worst_Mid', CourseForm.Worst_Mid);
      formData.set('Final_Paper', CourseForm.Final_Paper);
      formData.set('Best_Final', CourseForm.Best_Final);
      formData.set('Avg_Final', CourseForm.Avg_Final);
      formData.set('Worst_Final', CourseForm.Worst_Final);
      formData.set('Project_Report', CourseForm.Project_Report);
      formData.set('Course_Result', CourseForm.Course_Result);
      formData.set('CLO_Assesment', CourseForm.CLO_Assesment);
      formData.set('ReviewReport', CourseForm.ReviewReport);

      sendData(formData);
      //await dispatch(create_Course(CourseForm));
      console.log(CourseForm)

     

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Container
        maxWidth={"lg"}
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
          mt: 10,
        }}
      >
        <Typography sx={{ color: "black" }} variant="h3">
          Add Course
        </Typography>
        <form type="submit" encType='multipart/form-data'>
          <Stack direction={"column"} spacing={3}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}
            >
              <TextField
                type="text"
                label="Course Title"
                name={"courseTitle"}
                value={CourseForm.courseTitle}
                onChange={handleChange}
              />
              <TextField
                type="text"
                label="Course Code"
                name={"courseCode"}
                value={CourseForm.courseCode}
                onChange={handleChange}
              />
              <TextField
                type="number"
                label="Section No"
                name={"Section_no"}
                value={CourseForm.Section_no}
                onChange={handleChange}
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}
            >
              <TextField
                type="text"
                label="Instructor Name"
                name={"Instructor_name"}
                value={CourseForm.Instructor_name}
                onChange={handleChange}
              />
              <TextField
                type="number"
                label="Semester No"
                name={"semester_no"}
                value={CourseForm.semester_no}
                onChange={handleChange}
              />
            </Stack>
            <Typography sx={{ color: "black" }} variant="h5">
              Introduction
            </Typography>
            <TextField
              sx={{ width: "800px" }}
              type="text"
              label="Introduction of Course"
              multiline
              rows={5}
              name={"introduction"}
              value={CourseForm.introduction}
              onChange={handleChange}
            />

            <Typography sx={{ color: "black" }} variant="h5">
              Objectives
            </Typography>
            <TextField
              sx={{ width: "800px" }}
              type="text"
              label="Objectives of Course"
              multiline
              rows={5}
              name={"objectives"}
              value={CourseForm.objectives}
              onChange={handleChange}
            />

            <Typography sx={{ color: "black" }} variant="h5">
              Contents
            </Typography>
            <TextField
              sx={{ width: "800px" }}
              type="text"
              label="Contents of Course"
              multiline
              rows={5}
              name={"contents"}
              value={CourseForm.contents}
              onChange={handleChange}
            />

            <Typography sx={{ color: "black" }} variant="h5">
              Reference Books
            </Typography>
            <TextField
              sx={{ width: "800px" }}
              type="text"
              label="Reference Books"
              multiline
              rows={5}
              name={"ref_books"}
              value={CourseForm.ref_books}
              onChange={handleChange}
            />

            <Typography sx={{ color: "black" }} variant="h5">
              Evaluation Criteria
            </Typography>
            <TextField
              sx={{ width: "800px" }}
              type="text"
              label="Evaluation Criteria"
              multiline
              rows={5}
              name={"evaluation_criteria"}
              value={CourseForm.evaluation_criteria}
              onChange={handleChange}
            />

          <Box>
          <Typography sx={{ color: "black" }} variant="h5">
              Sample Criteria
            </Typography>
            <img  src={criteria} height={300} width={400}/>
          </Box>

            <Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Attendance Record
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="attendance_record"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.attendance_record && (
                    <img
                    src={URL.createObjectURL(CourseForm.attendance_record)}
                      alt="Attendance Record"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>


              {/* front form wla yha */}


              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Reference of Lecture Notes
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="ref_of_lectureNotes"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.ref_of_lectureNotes && (
                    <img
                    src={URL.createObjectURL(CourseForm.ref_of_lectureNotes)}
              
                      alt="ref of lectureNotes"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Assignment Question Paper
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="assignmentTask"
                      onChange={handleChange}
                      accept=".doc,.docx,.pdf"
                      type="file"
                    />
                  </Button>
                  {CourseForm.assignmentTask  && <Typography>{CourseForm.assignmentTask.name}</Typography>}
                </Stack>
              </Stack>
            </Stack>


            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            <Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Best Solved Assignment
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Best_Solved_Assignment"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Best_Solved_Assignment && (
                    <img
                      src={URL.createObjectURL(CourseForm.Best_Solved_Assignment)}
                      alt="Best Solved Assignment"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Avg Solved Assignment
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Avg_Solved_Assignment"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Avg_Solved_Assignment && (
                    <img
                      src={URL.createObjectURL(CourseForm.Avg_Solved_Assignment)}
                      alt="Avg Solved Assignment"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Worst Solved Assignment
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Worst_Solved_Assignment"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Worst_Solved_Assignment && (
                    <img
                      src={URL.createObjectURL(CourseForm.Worst_Solved_Assignment)}
                      alt="Worst Solved Assignment"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>

            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            <Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Quiz Question Paper
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Quiz_Paper"
                      onChange={handleChange}
                      accept=".doc,.docx,.pdf"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Quiz_Paper  && <Typography>{CourseForm.Quiz_Paper.name}</Typography>}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Best Solved Quiz
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Best_Solved_Quiz"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Best_Solved_Quiz && (
                    <img
                      src={URL.createObjectURL(CourseForm.Best_Solved_Quiz)}
                      alt="Best Solved Quiz"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Avg Solved Quiz
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Avg_Solved_Quiz"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Avg_Solved_Quiz && (
                    <img
                      src={URL.createObjectURL(CourseForm.Avg_Solved_Quiz)}
                      alt="Attendance Record"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>

            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            <Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Worst Solved Quiz
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Worst_Solved_Quiz"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Worst_Solved_Quiz && (
                    <img
                      src={URL.createObjectURL(CourseForm.Worst_Solved_Quiz)}
                      alt="Worst_Solved_Quiz"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Mid Term
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="MidTerm"
                      onChange={handleChange}
                      accept=".doc,.docx,.pdf"
                      type="file"
                    />
                  </Button>
                  {CourseForm.MidTerm  && <Typography>{CourseForm.MidTerm.name}</Typography>}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Best Mid
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Best_Mid"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Best_Mid && (
                    <img
                      src={URL.createObjectURL(CourseForm.Best_Mid)}
                      alt="Best_Mid"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>

            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            <Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Avg Mid
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Avg_Mid"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Avg_Mid && (
                    <img
                      src={URL.createObjectURL(CourseForm.Avg_Mid)}
                      alt="Quiz Paper"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Worst Mid
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Worst_Mid"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Worst_Mid && (
                    <img
                      src={URL.createObjectURL(CourseForm.Worst_Mid)}
                      alt="Worst_Mid"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Final Paper
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Final_Paper"
                      onChange={handleChange}
                      accept=".doc,.docx,.pdf"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Final_Paper  && <Typography>{CourseForm.Final_Paper.name}</Typography>}
                </Stack>
              </Stack>
            </Stack>

            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            <Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Best Final
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Best_Final"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Best_Final && (
                    <img
                      src={URL.createObjectURL(CourseForm.Best_Final)}
                      alt="Best_Final"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Avg Final
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Avg_Final"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Avg_Final && (
                    <img
                      src={URL.createObjectURL(CourseForm.Avg_Final)}
                      alt="Avg_Final"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Worst Final
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Worst_Final"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Worst_Final && (
                    <img
                      src={URL.createObjectURL(CourseForm.Worst_Final)}
                      alt="Best Mid"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>

            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            <Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Course Result
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Course_Result"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Course_Result && (
                    <img
                      src={URL.createObjectURL(CourseForm.Course_Result)}
                      alt="Course_Result"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  CLO Assesment
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="CLO_Assesment"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.CLO_Assesment && (
                    <img
                      src={URL.createObjectURL(CourseForm.CLO_Assesment)}
                      alt="CLO_Assesment"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            <Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Project Report
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Project_Report"
                      onChange={handleChange}
                      accept=".doc,.docx,.pdf"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Project_Report && <Typography>{CourseForm.Project_Report.name}</Typography>}

                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Course Review Report
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="ReviewReport"
                      onChange={handleChange}
                      accept=".doc,.docx,.pdf"
                      type="file"
                    />
                  </Button>
                  {CourseForm.ReviewReport && <Typography>{CourseForm.ReviewReport.name}</Typography>}

                </Stack>
              </Stack>
            </Stack>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Button
                variant="contained"
                size="large"
                type="submit"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            )}

          </Stack>
        </form>
      </Container>
    </>
  );
};
