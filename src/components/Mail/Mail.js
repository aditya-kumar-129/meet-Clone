import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalContext } from "../../context/context";
import { db } from "../../lib/firebase";
import styles from "./Mail.module.css";

// importing icons from material-ui
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { Checkbox } from "@mui/material";

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ,'Jul', 'Aug', 'Sep' ,'Oct' ,'Nov', 'Dec']

const Mail = ({ data }) => {
  const [starred, setStarred] = useState(false);

  const { currentUser } = useLocalContext();

  const navigate = useNavigate();

  // Below function is used to change the read property of the mail that has been sent to the user once he has read the mail
  const updateRead = () => {
    navigate(`/mail/${data.id}`);
    if (data.read === false) {
      db.collection("RecivedMails").doc(currentUser.email).collection("mail").doc(data.id).update({...data,read: true,});
    }
  };

  return (
    <div className={`${styles.mail} ${data.read === false && styles.mail__unread}`} onClick={updateRead} >
      <Checkbox className={`${styles.mail__colorGray} ${styles.mail__hoverBlack}`} />
      {starred ? (
        <StarIcon onClick={() => setStarred(!starred)} className={`${styles.mail__Yellow}`} />
      ) : (
        <StarBorderIcon onClick={() => setStarred(!starred)} className={`${styles.mail__colorGray} ${styles.mail__hoverBlack}`} />
      )}

      <div className={styles.mail__texts}>
        <p className={styles.mail__text}>{data.senderName}</p>
        <div className={styles.mail__titleSubtitle}>
          <p className={`${styles.mail__text} ${styles.mail__body}`}>{data.body}</p>
        </div>
        <div className={styles.mail__date}>
          <span>{month[data.month]}</span>
          <span>{data.date}</span>
        </div>
      </div>
    </div>
  );
};

export default Mail;
