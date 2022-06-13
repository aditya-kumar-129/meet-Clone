import React from "react";
import { useLocalContext } from "../../context/context";
import styles from "./ViewMail.module.css";

import { Avatar, Button, Checkbox } from "@mui/material";

// importing icons from @mui/icons
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ViewMail = ({ mailData }) => {
  const { drawerOpen } = useLocalContext();

  return (
    <div className={`${styles.main} ${!drawerOpen && styles.main__fullWidth}`}>
      <div className={styles.main__controlBtns}>
        <Checkbox color="secondary" className={styles.main__check} />
        <RefreshIcon />
        <MoreVertIcon />
      </div>

      <div className={styles.viewMail__body}>
      {/* Containing the subject of the of the mail */}
        <h1 className={styles.viewMail__heading}>{mailData.subject}</h1>
        <div className={styles.viewMail__senderDetails}>
          <Avatar />
          <div>
            <div className={styles.viewMail__senderWrapper}>
              <h1 className={styles.viewMail__senderName}>{mailData.senderName}</h1>
              <p className={styles.viewMail__senderMail}>{`<${mailData.sender}>`}</p>
            </div>
            <p className={styles.viewMail__info}>to me</p>
          </div>
        </div>
        <div className={styles.viewMail__bodyBtm}>
          <p>{mailData.body}</p>
          <Button variant="outlined" className={styles.home__signOut}>Reply</Button>
          <Button variant="outlined" className={styles.home__signOut}>Forward</Button>
        </div>
      </div>
    </div>
  );
};

export default ViewMail;
