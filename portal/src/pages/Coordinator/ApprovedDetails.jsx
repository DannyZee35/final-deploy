




import {
    Container,
    CircularProgress,
    Box,
    Typography,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,TextField,Button
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useParams } from "react-router-dom";
  import { getSingleCourse,updateCourse,getLogsForCourse} from "../../features/courses/courseSlice";
  import custLogo from "../../assets/cust.png"

  const drawerWidth = 300;
  
  export const ApprovedDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const logs = useSelector((state) => state.course.singleCourse.logs || []);


    useEffect(() => {
      dispatch(getLogsForCourse({ id: id }));
    }, [dispatch, id]);
    const { singleCourse, isLoading } = useSelector((state) => state.course);
    useEffect(() => {
        dispatch(getSingleCourse(id))
        
    }, [dispatch, id]);

    if (isLoading) {
        <CircularProgress />;
    }
    const [status, setStatus] = useState(singleCourse.status);
    const [feedback, setFeedback] = useState(singleCourse.feedback);
    
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedCourseData = {
            status: status,
            feedback: feedback
        };

        console.log('handleSubmit called', id, updatedCourseData);

        await dispatch(updateCourse({ id: id, updatedCourseData: updatedCourseData }));
        setIsEditing(false);

        console.log('handleSubmit called', id, updatedCourseData);

    };
    return (
      <>
        <Container
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          p: 5,
          mt: 15,
        }}
      >
        {isLoading ? <CircularProgress/> : 
        
        (
          <>
          
        
        <Box>
          <Stack direction={"row"} alignItems={"flex-start"} justifyContent={"center"} sx={{mb:5}}>
            <img src={custLogo} height={200} width={200}/>
    
          </Stack>
          <Typography variant="h4" textAlign={"center"} mt={2}>
        Web Based Course Folders Management System
        </Typography>
          <hr/>

          <Stack
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            spacing={2}
            sx={{mt:5}}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px" }}
              gutterBottom
            >
              <strong>Course Title:&nbsp; &nbsp;</strong> {singleCourse.courseTitle}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px" }}
              gutterBottom
            >
              <strong>Course Code:&nbsp; &nbsp;</strong> {singleCourse.courseCode}
            </Typography>{" "}
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px" }}
              gutterBottom
            >
              <strong>Section No:&nbsp; &nbsp;</strong> {singleCourse.Section_no}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px" }}
              gutterBottom
            >
              <strong>Instructor Name:&nbsp; &nbsp;</strong> {singleCourse.Instructor_name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px" }}
              gutterBottom
            >
              <strong>Semester No:&nbsp; &nbsp;</strong> {singleCourse.semester_no}
            </Typography>
          </Stack>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            <strong>Introduction</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            {singleCourse.introduction}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            <strong>Objectives</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            {singleCourse.objectives}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            <strong>Contents</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            {singleCourse.contents}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            <strong>Reference and Text Books</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            {singleCourse.ref_books}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            <strong>Evaluation Criteria</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            {singleCourse.evaluation_criteria}
          </Typography>
 
          <TableContainer >
                  <Table sx={{border:"1px solid black"}}>
                    <TableHead sx={{backgroundColor:'#8DB3E2' }}>
                      <TableRow  >
                      <TableCell sx={{border:"1px solid black",fontWeight:"bold"}}>Lecture No</TableCell>

                        <TableCell sx={{border:"1px solid black",fontWeight:"bold"}}>Date</TableCell>
                        <TableCell sx={{border:"1px solid black" ,fontWeight:"bold"}}>Duration</TableCell>
                        <TableCell sx={{border:"1px solid black" ,fontWeight:"bold"}}>Topics Covered</TableCell>
                        <TableCell sx={{border:"1px solid black" ,fontWeight:"bold"}}>Evaluation Instruments Used</TableCell>

                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {logs.map((log) => (
                        <TableRow key={log.lectureNo}>
                          <TableCell sx={{border:"1px solid black"}}>{log.lectureNo}</TableCell>
                          <TableCell sx={{border:"1px solid black"}}>{log.Date}</TableCell>
                          <TableCell sx={{border:"1px solid black"}}>{log.Duration}</TableCell>

                          <TableCell sx={{border:"1px solid black"}}>{log.Topics_Covered}</TableCell>
                          <TableCell sx={{border:"1px solid black"}}>{log.instruments}</TableCell>

                        </TableRow>
                      ))}
                    </TableBody>

                  </Table>
                </TableContainer>


          <Box sx={{ mb: 10, mt: 3, height: '400px', width: '600px' }} >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", }}
              gutterBottom
            >
              <strong>Attendance Record</strong>
            </Typography>


            {singleCourse.attendance_record && <img src={singleCourse.attendance_record.url} style={{ height: "100%", width: "100%" }} />}
          </Box>

          <Box sx={{ mb: 5, mt:10 }} >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", }}
              gutterBottom
            >
              <strong>Assignment Question Paper</strong>
            </Typography>

            {singleCourse.assignmentTask && <a href={singleCourse.assignmentTask.url} target="_blank">Assignment Question Paper</a>}

           </Box>
          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            spacing={5}
          >

            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Best Assignment</strong>
              </Typography>

              {singleCourse.Best_Solved_Assignment && <img src={singleCourse.Best_Solved_Assignment.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Avg Assignemnt</strong>
              </Typography>

              {singleCourse.Avg_Solved_Assignment && <img src={singleCourse.Avg_Solved_Assignment.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Worst Assignment</strong>
              </Typography>

              {singleCourse.Worst_Solved_Assignment && <img src={singleCourse.Worst_Solved_Assignment.url} style={{ height: "100%", width: "100%" }} />}
            </Box>

          </Stack>
          <Box sx={{ mb: 5, mt:10 }} >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", }}
              gutterBottom
            >
              <strong>Quiz Question Paper</strong>
            </Typography>

            {singleCourse.Quiz_Paper && <a href={singleCourse.Quiz_Paper.url} target="_blank">Quiz Question Paper</a>}

           </Box>


          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            spacing={5}
          >

            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Best Solved Quiz</strong>
              </Typography>

              {singleCourse.Best_Solved_Quiz && <img src={singleCourse.Best_Solved_Quiz.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Avg Solved Quiz</strong>
              </Typography>

              {singleCourse.Avg_Solved_Quiz && <img src={singleCourse.Avg_Solved_Quiz.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Worst Solved Quiz</strong>
              </Typography>

              {singleCourse.Worst_Solved_Quiz && <img src={singleCourse.Worst_Solved_Quiz.url} style={{ height: "100%", width: "100%" }} />}
            </Box>

          </Stack>

          <Box sx={{ mb: 5, mt:10 }} >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", }}
              gutterBottom
            >
              <strong>Mid Question Paper</strong>
            </Typography>

            {singleCourse.MidTerm && <a href={singleCourse.MidTerm.url} target="_blank">Mid Question Paper</a>}

           </Box>


          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            spacing={5}
          >

            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Best Solved Mid</strong>
              </Typography>

              {singleCourse.Best_Mid && <img src={singleCourse.Best_Mid.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Avg Solved Mid</strong>
              </Typography>

              {singleCourse.Avg_Mid && <img src={singleCourse.Avg_Mid.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Worst Solved Mid</strong>
              </Typography>

              {singleCourse.Worst_Mid && <img src={singleCourse.Worst_Mid.url} style={{ height: "100%", width: "100%" }} />}
            </Box>

          </Stack>

          <Box sx={{ mb: 5, mt:10 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", }}
              gutterBottom
            >
              <strong>Final Question Paper</strong>
            </Typography>

            {singleCourse.Final_Paper && <a href={singleCourse.Final_Paper.url} target="_blank">Final Question Paper</a>}

           </Box>


          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            spacing={5}
          >

            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Best Solved Final</strong>
              </Typography>

              {singleCourse.Best_Final && <img src={singleCourse.Best_Final.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Avg Solved Final</strong>
              </Typography>

              {singleCourse.Avg_Final && <img src={singleCourse.Avg_Final.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Worst Solved Final</strong>
              </Typography>

              {singleCourse.Worst_Final && <img src={singleCourse.Worst_Final.url} style={{ height: "100%", width: "100%" }} />}
            </Box>

          </Stack>

          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            spacing={5}
            sx={{ mt: 15 }}
          >

            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Course Result</strong>
              </Typography>

              {singleCourse.Course_Result && <img src={singleCourse.Course_Result.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>CLO Assesment</strong>
              </Typography>

              {singleCourse.CLO_Assesment && <img src={singleCourse.CLO_Assesment.url} style={{ height: "100%", width: "100%" }} />}
            </Box>


          </Stack>

          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            spacing={5}
            sx={{ mt: 15 }}
          >

            <Box sx={{ height: '100px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Project Report</strong>
              </Typography>

              {singleCourse.Project_Report &&

                <a href={singleCourse.Project_Report.url} target="_blank" >Project Report</a>
              }
            </Box>
            <Box sx={{ height: '100px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Review Report</strong>
              </Typography>

              {singleCourse.ReviewReport && <a href={singleCourse.ReviewReport.url} target="_blank">Review Report</a>}
            </Box>


          </Stack>
            <>
                                {!isEditing && (
                                    <>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ fontSize: "18px", mt: 2 }}
                                            gutterBottom
                                        >
                                            <strong>Coordinator Feedback</strong>
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ fontSize: "18px", mt: 2 }}
                                            gutterBottom
                                        >
                                            {singleCourse.feedback}
                                        </Typography>                                      
                                        <Button
                                                onClick={() => {
                                                    setIsEditing(true);
                                                    setStatus(singleCourse.status);
                                                    setFeedback(singleCourse.feedback);
                                                  }}

                                            variant="contained" color="primary" size="large" sx={{ textTransform: 'none' }}>
                                            Edit
                                        </Button>
                                    </>
                                )}
                      
                            { isEditing && (
                                <form onSubmit={handleSubmit}>


                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontSize: "18px", mt: 2, mb: 3 }}
                                        gutterBottom
                                    >
                                        <strong>Coordinator Feedback</strong>
                                    </Typography>
                                    <TextField multiline rows={5} label="Feedback" fullWidth value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                                    <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-start"} gap="20px" sx={{ mt: 3 }}>
                                        <Button type="submit"
                                            onClick={() => setStatus('Approved')} variant="contained" color="success" size="large" sx={{ textTransform: 'none' }}>
                                            Accept
                                        </Button>
                                        <Button type="submit"
                                            onClick={() => setStatus('Un Approved')} variant="contained" color="error" size="large" sx={{ textTransform: 'none' }}>
                                            Reject
                                        </Button>
                                    </Stack>
                                </form>
                                )}
                            </>
          </Box>
            </>
 ) }
 
{singleCourse.FolderCoordinatorFeedback &&

<>
  <Typography
    variant="subtitle1"
    sx={{ fontSize: "18px", mt: 2 }}
    gutterBottom
  >
    <strong>Course Folder Convenor Feedback</strong>
  </Typography>
  <Typography
    variant="subtitle1"
    sx={{ fontSize: "18px", mt: 2 }}
    gutterBottom
  >
    {singleCourse.FolderCoordinatorFeedback}
  </Typography>

</>
}

{singleCourse.HodFeedback &&

<>
  <Typography
    variant="subtitle1"
    sx={{ fontSize: "18px", mt: 2 }}
    gutterBottom
  >
    <strong>Head Of Department Feedback</strong>
  </Typography>
  <Typography
    variant="subtitle1"
    sx={{ fontSize: "18px", mt: 2 }}
    gutterBottom
  >
    {singleCourse.HodFeedback}
  </Typography>

</>
}
        </Container>
      </>
    );
  };
  