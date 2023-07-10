import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getCourses,

    reset,
} from "../../features/courses/courseSlice";
import {
    CircularProgress,
    Stack,
    Typography,
    Container,
    Box,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 300;



export const HodDashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { courses, isLoading, isError, message } = useSelector(
        (state) => state.course
    );
    const approvedCourses = courses.filter((course) => course.status === "Approved");

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getCourses());

        return () => {
            dispatch(reset());
        };
    }, [isError, message, dispatch]);

    if (isLoading) {
        <CircularProgress />;
    }

    const stackStyles = {
        backgroundColor: "white",
        padding: 2,
        borderRadius: "10px",
        border: "3px solid #1976d2",
        boxShadow: "0px 4px 4px rgba(0, 0, 0,0.5)",
    };
    let courseId = 1;
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
                <Typography sx={{ mb: 10 }} variant="h4">
                    Approved Courses
                </Typography>
                {isLoading ? <CircularProgress /> :

                    (
                        <>

                            <Box sx={{}}>
                                {approvedCourses.map((course) => (
                                    <Stack
                                        direction={"row"}
                                        alignItems={"center"}
                                        justifyContent={"flex-start"}
                                        spacing={2}
                                        key={course._id}
                                        rowGap={5}
                                        sx={{ mb: 5, ...stackStyles }}
                                    >
                                        <Typography sx={{ flex: 0.5 }}>
                                            <strong>ID: </strong> {courseId++}
                                        </Typography>
                                        <Typography sx={{ flex: 1 }}>
                                            <strong>Course Name: </strong> {course.courseTitle}
                                        </Typography>
                                        <Typography sx={{ flex: 1 }}>
                                            <strong>Course Code: </strong> {course.courseCode}
                                        </Typography>
                                        <Typography sx={{ flex: 1 }}>
                                            <strong>Instructor Name: </strong>
                                            {course.Instructor_name}
                                        </Typography>

                                        <Typography sx={{ flex: 1 }}>
                                            <strong>Semester: </strong> {course.semester_no}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                flex: 1,

                                            }}
                                        >
                                            <strong>Status: </strong>
                                            {course.status === "Approved" ?
                                                (<span style={{ backgroundColor: "#99ee99", color: '#fff', padding: '5px 6px', borderRadius: '5px' }}>{course.status} </span>)
                                                :
                                                (<span style={{ backgroundColor: "#df2c14", color: '#fff', padding: '5px 6px', borderRadius: '5px' }}>{course.status} </span>)
                                            }

                                        </Typography>


                                        <Button
                                            color="primary"
                                            onClick={() => navigate(`/hod-details/${course._id}`)}
                                        >
                                            View
                                        </Button>
                                    </Stack>
                                ))}
                            </Box>
                        </>
                    )}
            </Container>
        </>
    )
}