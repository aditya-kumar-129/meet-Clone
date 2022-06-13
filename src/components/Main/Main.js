import React, { useState } from "react";
import { Mail } from "..";
import { useLocalContext } from "../../context/context";
import { useMailContext } from "../../context/MailContext";
import styles from "./Main.module.css";

// importinag icons from material-ui
import InboxIcon from "@mui/icons-material/Inbox";
import ErrorIcon from "@mui/icons-material/Error";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from "@mui/icons-material/Refresh";
import PeopleIcon from "@mui/icons-material/People";

import { Checkbox } from "@mui/material";

const Main = () => {
  const { drawerOpen } = useLocalContext();
  const { onScreenMails,
    mailsType, setMailsType,
    socialUnreadNo, primaryUnreadNo, promosUnreadNo, updatesUnreadNo,
  } = useMailContext();

  const [active, setActive] = useState("primary");

  const updateActive = (localText, globaltext) => {
    setMailsType(globaltext);
    setActive(localText);
  };

  return (
    <div className={`${styles.main} ${drawerOpen && styles.main__fullWidth}`}>
      <div className={styles.main__controlBtns}>
        <Checkbox color="secondary" className={styles.mail__check} />
        <RefreshIcon />
        <MoreVertIcon />
      </div>
      
      {mailsType === "Sent" ? (<div></div>) : (
        <div className={styles.main__tabs}>
          <div className={`${styles.main__tab} ${active === "primary" && styles.main__tabPrimary__active}`} onClick={() => updateActive("primary","Primary")}>
            <InboxIcon />
            <p>Primary</p>
            {primaryUnreadNo !== 0 && (
              <div className={`${styles.mail__unread} ${styles.primary__unread}`}>
                {primaryUnreadNo} new
              </div>
            )}
          </div>

          <div onClick={() => updateActive("Social", "Social")} className={`${styles.main__tab} ${active === "Social" && styles.main__tabSocial__active}`}>
            <PeopleIcon />
            <p>Social</p>
            {socialUnreadNo !== 0 && (
              <div className={`${styles.mail__unread} ${styles.social__unread}`}>
                {socialUnreadNo} new
              </div>
            )}
          </div>

          <div onClick={() => updateActive("Promotions","Promotions")} className={`${styles.main__tab} ${active === "Promotions" && styles.main__tabPromotions__active}`}>
            <LocalOfferIcon />
            <p>Promotions</p>
            {promosUnreadNo !== 0 && (
              <div className={`${styles.mail__unread} ${styles.promotions__unread}`}>
                {promosUnreadNo} new
              </div>
            )}
          </div>

          <div onClick={() => updateActive("Updates", "Updates")} className={`${styles.main__tab} ${active === "Updates" && styles.main__tabUpdates__active}`}>
            <ErrorIcon />
            <p>Important</p>
            {updatesUnreadNo !== 0 && (
              <div className={`${styles.mail__unread} ${styles.updates__unread}`}>
                {updatesUnreadNo} new
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.main__mails}>
        {onScreenMails.map((mail, index) => (<Mail key={index} data={mail} />))}
      </div>
    </div>
  );
};

export default Main;
