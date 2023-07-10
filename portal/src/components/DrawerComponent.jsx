import {
  Drawer,
  Toolbar,
  ListItem,
  Divider,
  ListItemButton,
  ListItemIcon,
  List,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import MenuBookIcon from '@mui/icons-material/MenuBook';


const drawerWidth = 300;

export const DrawerComponent = () => {
  const [selectedTab, setSelectedTab] = useState("");
  useEffect(() => {
    const activeTab = DrawerList.find(
      (item) => item.to === window.location.pathname
    );
    setSelectedTab(activeTab?.title || "");
  }, []);
  const { user } = useSelector((state) => state.auth);
  const DrawerList = [
    {
      title: "Dashboard",
      to: "/InstDashboard",
      visible: user?.UserRole === "course instructor",
      icon:  <DashboardRoundedIcon/>
    },
 
    {
      title: "Courses",
      to: "/courses",
      visible: user?.UserRole === "course instructor",
      icon:  <MenuBookRoundedIcon/>
    },
    {
      title: "Approved Courses",
      to: "/instructorApproved",
      visible: user?.UserRole === "course instructor",
      icon:  <TaskAltRoundedIcon/>
    },
    {
      title: "UnApproved Courses",
      to: "/instructorUnApproved",
      visible: user?.UserRole === "course instructor",
      icon:  <CancelRoundedIcon/>
    },
    {
      title: "Dashboard",
      to: "/dashboard",
      visible: user?.UserRole === "course coordinator",
      icon:  <DashboardRoundedIcon/>
    },

    {
      title: "Approved Courses",
      to: "/approved",
      visible: user?.UserRole === "course coordinator",
      icon:  <TaskAltRoundedIcon/>
    },
    {
      title: "Rejected Courses",
      to: "/rejected",
      visible: user?.UserRole === "course coordinator",
      icon:  <CancelRoundedIcon/>
    },

    {
      title: "Dashboard",
      to: "/hod-dashboard",
      visible: user?.UserRole === "head of department",
      icon:  <DashboardRoundedIcon/>
    },
    {
      title: "Manage",
      to: "/manage",
      visible: user?.UserRole === "head of department",
      icon:  <DashboardRoundedIcon/>
    },
    {
      title: "Rejected Courses",
      to: "/HodRejected",
      visible: user?.UserRole === "head of department",
      icon:  <CancelRoundedIcon/>
    },

    {
      title: "Dashboard",
      to: "/folder-dashboard",
      visible: user?.UserRole === "course folder convenor",
      icon:  <DashboardRoundedIcon/>
    },
    {
      title: "Rejected Courses",
      to: "/folder-rejected",
      visible: user?.UserRole === "course folder convenor",
      icon:  <CancelRoundedIcon/>
    },
  ];
  const filteredDrawerList = DrawerList.filter(
    (item) => item.visible !== false
  );

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {filteredDrawerList.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            component={Link}
            to={item.to}
            sx={{
              color: "black",
              ...(selectedTab === item.title
                ? { backgroundColor: "#1976d2",color:"white" }
                : {}),
            }}
            onClick={() => setSelectedTab(item.title)}
          >
            <ListItemButton>
              <ListItemIcon  sx={{
              color: "#1976d2",
              ...(selectedTab === item.title
                ? { backgroundColor: "#1976d2",color:"white" }
                : {}),
            }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};
