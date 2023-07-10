import "./App.css";
import { Login } from "./authentication/login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  
} from "react-router-dom";
import { InstructorHome } from "./pages/Instructor/InstructorHome";
import { Coordinator } from "./pages/Coordinator/Coordinator";
import { useSelector } from "react-redux";
import { withAuth } from "./authentication/withAuth";
import { Navbar } from "./components/Navbar";
import { Courses } from "./pages/Instructor/Courses";
import { CourseDetails } from "./pages/Instructor/CourseDetails";
import { ApprovedCourses } from "./pages/Coordinator/ApprovedCourses";
import { RejectedCourses } from "./pages/Coordinator/RejectedCourses";
import { CoSingleCourse } from "./pages/Coordinator/CoSingleCourse";
import { ApprovedDetails } from "./pages/Coordinator/ApprovedDetails";
import { RejectDetails } from "./pages/Coordinator/RejectDetails";
import { InstructorApproved } from "./pages/Instructor/InstructorApproved";
import { InstructorRejected } from "./pages/Instructor/InstructorRejected";
import { HodDashboard } from "./pages/HOD/HodDashboard";
import { HodDetailsCourse } from "./pages/HOD/HodDetailsCourse";
import {StartPage} from "./StartPage"
import { InsLogin } from "./authentication/InsLogin";
import { CoLogin } from "./authentication/CoLogin";
import { HodLogin } from "./authentication/HodLogin";
import { SignUp } from "./authentication/SignUp";
import { FolderConvenier } from "./authentication/FolderConvenier";
import { HodRejected } from "./pages/HOD/HodRejected";
import { FolderDashboard } from "./pages/Course Convinier/FolderDashboard";
import { FolderDetails } from "./pages/Course Convinier/FolderDetails";
import { FolderRejectedDetails } from "./pages/Course Convinier/FolderRejectedDetails";
import { CourseLog } from "./pages/Instructor/CourseLog";
import {Manage} from "./pages/HOD/Manage";

const drawerWidth = 300;

function App() {
  const ProtectedCoordinator = withAuth(Coordinator, ["course coordinator"]);
  const InstructorRoutes = withAuth(InstructorHome, ["course instructor"]);
  const CoursesRoute = withAuth(Courses, ["course instructor"]);
  const SingleCourse = withAuth(CourseDetails, ["course instructor"]);
  const CoordinatordApprovedCourses = withAuth(ApprovedCourses, ["course coordinator"]);
  const CoordinatorRejectedCourses = withAuth(RejectedCourses, ["course coordinator"]);
  const DetailsCourseCoordinator = withAuth(CoSingleCourse, ["course coordinator"]);
  const ApprovedDetailsCoordinator= withAuth(ApprovedDetails, ["course coordinator"]);
  const RejectDetailsCoordinator= withAuth(RejectDetails, ["course coordinator"]);
  const InstructorApprovedCourses= withAuth(InstructorApproved, ["course instructor"]);
  const InstructorUnApprovedCourses= withAuth(InstructorRejected, ["course instructor"]);
  const ProtectedHodDashboard= withAuth(HodDashboard, ["head of department"]);
  const ProtectedHodCourseDetails= withAuth(HodDetailsCourse, ["head of department"]);
  const ProtectedHodRejected= withAuth(HodRejected, ["head of department"]);
  const ProtectedFolder= withAuth(FolderDashboard, ["course folder convenor"]);
  const ProtectedFolderDetails= withAuth(FolderDetails, ["course folder convenor"]);
  const ProtectedFolderRejected= withAuth(FolderDetails, ["course folder convenor"]);
  const ProtectedCourseLog= withAuth(CourseLog, ["course instructor"]);
  const ProtectedManage= withAuth(Manage, ["head of department"]);

 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<StartPage />} />
        <Route path="/InstDashboard" element={<InstructorRoutes />} />

   
        <Route path="/courses" element={<CoursesRoute />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/ApprovedCourseDetails/:id" element={<ApprovedDetailsCoordinator />} />
        <Route path="/RejectCourseDetails/:id" element={<RejectDetailsCoordinator />} />
        <Route path="/instructorApproved" element={<InstructorApprovedCourses />} />
        <Route path="/instructorUnApproved" element={<InstructorUnApprovedCourses />} />
        <Route path="/hod-dashboard" element={<ProtectedHodDashboard />} />
        <Route path="/hod-details/:id" element={<ProtectedHodCourseDetails />} />
        <Route path="/log" element={<ProtectedCourseLog />} />
        <Route path="/manage" element={<ProtectedManage />} />

        
        <Route path="/dashboard" element={<ProtectedCoordinator />} />
        <Route path="/hodCourseDetail/:id" element={<DetailsCourseCoordinator />} />
        <Route path="/approved" element={<CoordinatordApprovedCourses />} />
        <Route path="/rejected" element={<CoordinatorRejectedCourses />} />
 
        <Route path="/HodRejected" element={<ProtectedHodRejected />} />

        <Route path="/folder-dashboard" element={<ProtectedFolder />} />
        <Route path="/folder-details/:id" element={<ProtectedFolderDetails />} />
        <Route path="/folder-rejected" element={<FolderRejectedDetails />} />


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/Inslogin" element={<InsLogin />} />
        
        <Route path="/CoLogin" element={<CoLogin />} />
        <Route path="/hodLogin" element={<HodLogin />} />
        <Route path="/folderCoordinator" element={<FolderConvenier />} />

      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

const Root = () => {
  const { user } = useSelector((state) => state.auth)
 
  return (
    <>
    {user ? <Navbar/> : null}
 

      <Outlet />
    </>
  );
};

export default App;
