import React, { useState } from "react";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";

import { Avatar, Badge, Button } from "@mui/material";
import Popover from "@mui/material/Popover";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const HomePage = (props) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.header}>
      <Avatar className={styles.header__avatar} onClick={handleClick} />
      <Popover
        open={open}
        id={id}
        onClose={handleClose}
        anchorEl={anchorEl}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <div className={styles.home__popoverContainer}>
          <div className={styles.home__popover__top}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <div className={styles.home__badge}>
                  <CameraAltOutlinedIcon className={styles.home__camera} />
                </div>
              }
            >
              <Avatar />
            </Badge>
            <div className={styles.home__text}>
              <div className={styles.home__mail}>
                {props.userData._delegate.displayName}
              </div>
              <div className={styles.home__displayName}>
                {props.userData._delegate.email}
              </div>
            </div>
            <div className={styles.home__btn}>Manage your Google Account</div>
          </div>

          <div className={styles.home__popover__btm}>
            <div className={styles.home__addBtn}>
              <PersonOutlinedIcon className={styles.home__addIcon} />
              <Button
                onClick={() => {
                  navigate("/createAccount");
                }}
              >
                <p>Add another account</p>
              </Button>
            </div>
            <Button
              onClick={() => {
                auth.signOut();
                navigate("/signIn");
              }}
              variant="outlined"
              className={styles.home__signOut}
            >
              Sign Out
            </Button>
          </div>
          <div className={styles.home__popover__footer}>
            <p>Privacy policy</p>
            <span>•</span>
            <p>Terms of service</p>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default HomePage;
