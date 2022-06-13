import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalContext } from "../../context/context";
import { db } from "../../lib/firebase";
import styles from "./Mail.module.css";

// importing icons from material-ui
import LabelIcon from "@mui/icons-material/Label";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { Checkbox } from "@mui/material";

const Mail = ({ data }) => {
  const [starred, setStarred] = useState(false);
  const [important, setImportant] = useState(false);

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

      {important ? (
        <LabelIcon onClick={() => setImportant(!important)} className={`${styles.mail__Yellow} ${styles.mail__label}`} />
      ) : (
        <LabelOutlinedIcon onClick={() => setImportant(!important)} className={`${styles.mail__colorGray} ${styles.mail__hoverBlack} ${styles.mail__label}`} />
      )}

      <div className={styles.mail__texts}>
        <p className={styles.mail__text}>{data.senderName}</p>
        <div className={styles.mail__titleSubtitle}>
          <p className={styles.mail__text}>{data.subject}</p>
          <p className={`${styles.mail__text} ${styles.mail__body}`}>{data.body}</p>
        </div>
        <p className={styles.mail__text}>Jan 14</p>
      </div>
    </div>
  );
};

export default Mail;
