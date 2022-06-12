import React, { useState } from "react";
import { useMailContext } from "../../context/MailContext";
import { useLocalContext } from "../../context/context";
import styles from "./SideBar.module.css";

import Badge from "@mui/material/Badge";

// Importing Icons from @material-ui/icons
import InboxIcon from "@mui/icons-material/Inbox";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import VideocamIcon from "@mui/icons-material/Videocam";

const SidebarNavBtn = () => {
  const { drawerOpen } = useLocalContext();
  const { setMailsType, inboxUnreadNo } = useMailContext();

  const [active, setActive] = useState("inbox");

  const updatePrimaryActive = () => {
    setMailsType("Primary");
    setActive("inbox");
  };
  const sentActive = () => {
    setMailsType("Sent");
    setActive("sent");
  };

  return (
    <div className={styles.sidebar__btns}>
      <div
        className={`${styles.sidebar__btn} ${styles.sidebar__topBtn}  ${
          !drawerOpen && "styles.sidebar__btnClose"
        } ${active === "inbox" && "styles.sidebar__active"}`}
        onClick={updatePrimaryActive}
      >
        <div
          className={`${styles.sidebar__btnLeft} ${
            !drawerOpen && "styles.sidebar__btnLeftClose"
          }`}
        >
          {drawerOpen ? (
            <>
              <InboxIcon className={styles.sidebar__icon} />
              <p>Inbox</p>
            </>
          ) : (
            <Badge badgeContent={0} color="error">
              <InboxIcon className={styles.sidebar__icon} />
            </Badge>
          )}
        </div>
        <div
          className={`${styles.sidebar__unread} ${
            !drawerOpen && "styles.sidebar__unreadClose"
          }`}
        >
          <p>{inboxUnreadNo}</p>
        </div>
      </div>

      <div
        onClick={sentActive}
        className={`${styles.sidebar__btn} ${styles.sidebar__topBtn}  ${
          !drawerOpen && "styles.sidebar__btnClose"
        }  ${active === "sent" && "styles.sidebar__active"}`}
      >
        <div
          className={`${styles.sidebar__btnLeft} ${
            !drawerOpen && "styles.sidebar__btnLeftClose"
          }`}
        >
          {drawerOpen ? (
            <>
              <InboxIcon className={styles.sidebar__icon} />
              <p>Sent</p>
            </>
          ) : (
            <Badge badgeContent={0} color="error">
              <InboxIcon className={styles.sidebar__icon} />
            </Badge>
          )}
        </div>
      </div>

      <SideDummyButtons />
      <SideDummyButtons />
      <SideDummyButtons />
      <SideDummyButtons />
      <SideDummyButtons />
      <SideDummyButtons />
      <SideDummyButtons />
      <SideDummyButtons />
    </div>
  );
};

export default SidebarNavBtn;

const SideDummyButtons = () => {
  const { drawerOpen } = useLocalContext();

  return (
    <div
      className={`${styles.sidebar__btn} ${styles.sidebar__topBtn}  ${
        !drawerOpen && "styles.sidebar__btnClose"
      }`}
    >
      <div
        className={`${styles.sidebar__btnLeft} ${
          !drawerOpen && "styles.sidebar__btnLeftClose"
        }`}
      >
        {drawerOpen ? (
          <>
            <InboxIcon className={styles.sidebar__icon} />
            <p>Inbox</p>
          </>
        ) : (
          <Badge badgeContent={0} color="error">
            <InboxIcon className={styles.sidebar__icon} />
          </Badge>
        )}
      </div>
    </div>
  );
};

export function MeetBtns() {
  const { drawerOpen } = useLocalContext();
  return (
    <div className={styles.navabr__meetOptions}>
      <p className={styles.navbar__meetTitle}>Meet</p>
      <div
        className={`${styles.sidebar__btn} ${styles.sidebar__topBtn}  ${
          !drawerOpen && "styles.sidebar__btnClose"
        }`}
      >
        <div
          className={`${styles.sidebar__btnLeft} ${
            !drawerOpen && "styles.sidebar__btnLeftClose"
          }`}
        >
          {drawerOpen ? (
            <>
              <VideocamIcon className={styles.sidebar__icon} />
              <p>New Meeting</p>
            </>
          ) : (
            <VideocamIcon className={styles.sidebar__icon} />
          )}
        </div>
      </div>

      <div
        className={`${styles.sidebar__btn} ${styles.sidebar__topBtn}  ${
          !drawerOpen && "styles.sidebar__btnClose"
        }`}
      >
        <div
          className={`${styles.sidebar__btnLeft} ${
            !drawerOpen && "styles.sidebar__btnLeftClose"
          }`}
        >
          {drawerOpen ? (
            <>
              <KeyboardIcon className={styles.sidebar__icon} />
              <p>Join a meeting</p>
            </>
          ) : (
            <KeyboardIcon className={styles.sidebar__icon} />
          )}
        </div>
      </div>
    </div>
  );
}
