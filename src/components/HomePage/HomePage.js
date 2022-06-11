import React, { useState } from "react";
import styles from "./HomePage.module.css";
import { auth } from "../../lib/firebase";

import { Avatar, Badge, Button } from "@mui/material";
import Popover from "@mui/material/Popover";

import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import { useLocalContext } from "../../context/context";

const HomePage = (props) => {
  const { setDrawerOpen, drawerOpen } = useLocalContext();
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
    <div className={styles.home}>
      <div className={styles.home__header}>
        <div className={styles.home__left}>
          <MenuIcon
            className={styles.home__menuIcon}
            onClick={() => setDrawerOpen(!drawerOpen)}
          />
          <img
            className={styles.home__logo}
            src="/assets/GmailLogo.png"
            alt="Gmail"
          />
        </div>

        <div className={styles.home__center}>
          <SearchIcon />
          <input className={styles.home__input} placeholder="Search Mail" />
        </div>

        <div className={styles.home__right}>
          <HelpOutlineOutlinedIcon />
          <SettingsIcon />
          <AppsIcon />
          <div>
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
                        <CameraAltOutlinedIcon
                          className={styles.home__camera}
                        />
                      </div>
                    }
                  >
                    <Avatar />
                  </Badge>
                  <div className={styles.home__text}>
                    <div className={styles.home__mail}>{props.displayName}</div>
                    <div className={styles.home__displayName}>
                      {props.email}
                    </div>
                  </div>
                  <div className={styles.home__btn}>
                    Manage your Google Account
                  </div>
                </div>

                <div className={styles.home__popover__btm}>
                  <div className={styles.home__addBtn}>
                    <PersonOutlinedIcon className={styles.home__addIcon} />
                    <Button
                      onClick={() => {
                        auth.signOut();
                      }}
                    >
                      <p>Add another account</p>
                    </Button>
                  </div>
                  <Button
                    onClick={() => {
                      auth.signOut();
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
