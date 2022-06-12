import React from "react";
import { useLocalContext } from "../../context/context";
import SidebarNavBtn, { MeetBtns } from "./SideBarNavBtn";
import styles from "./SideBar.module.css";

import { Drawer, Badge, Avatar } from "@mui/material";

// https://towardsdev.com/use-your-makestyles-7d347f9a3e96
import { makeStyles } from "@material-ui/core/styles";

// Importing Icons from @material-ui/icons
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";

// https://stackoverflow.com/questions/57557271/how-to-use-clsx-in-react
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex" },

  drawerOpen: {
    width: 256,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: { width: "70px" },
  },
}));

const Sidebar = ({ children }) => {
  const classes = useStyles();
  const { drawerOpen, currentUser, setComposeOpen } = useLocalContext();
  return (
      <div className={styles.drawerBox}>
        <div className={classes.root}>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: drawerOpen,
              [classes.drawerClose]: !drawerOpen,
              backgroundColor: "#red",
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: drawerOpen,
                [classes.drawerClose]: !drawerOpen,
              }),
            }}
          >
            <div
              onClick={() => setComposeOpen(true)}
              className={`${styles.sidebar__compose} ${
                !drawerOpen && "styles.sidebar__composeClose"
              }`}
            >
              <img
                className={styles.sidebar__addIMG}
                src="/assets/PlusImage.png"
                alt="add"
              />
              <p>Compose</p>
            </div>
            <SidebarNavBtn />
            <MeetBtns />

            <div className={styles.sidebar__hangoutsOptions}>
              <div className={styles.sidebar__hangoutsWrapper}>
                <p className={styles.navbar__meetTitle}>Hangouts</p>
                <div className={styles.sidebar__Hangoutsbadge}>
                  <Badge
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    overlap="circular"
                    color="error"
                    variant="dot"
                  >
                    <Avatar className={styles.sidebar__avatarSmall} />
                  </Badge>
                  <p>{currentUser?.displayName}</p>
                </div>
              </div>
            </div>

            <div className={styles.sidebar__hangoutChats}>
              <div className={styles.sidebar__hangoutImg}></div>
              <p>No recent chats</p>
              <p>Start a new one</p>
            </div>

            <div className={styles.sidebar__footer}>
              <PersonIcon />
              <ChatIcon />
            </div>
          </Drawer>
          {children}
        </div>
      </div>
  );
};

export default Sidebar;