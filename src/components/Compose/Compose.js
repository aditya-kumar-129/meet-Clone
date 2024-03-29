import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocalContext } from "../../context/context";
import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

// https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from "uuid";
import { db } from "../../lib/firebase";
import styles from "./Compose.module.css";

const Compose = () => {
  const {setComposeOpen,setSnackbarOpen,setSnackbarMsg,currentUser,category} = useLocalContext();

  const [recipents, setRecipents] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");

  // Generate a unique id for each email
  useEffect(() => {
    setId(uuidv4());
  }, []);

  const createMailId = () => {
    setId(uuidv4());
  };

  const sendMail = () => {
    setComposeOpen(false);
    createMailId();
    setSnackbarOpen(true);
    setSnackbarMsg("Sending Mail...");
    db.collection("SentMails").doc(currentUser.email).collection("mails").doc(id).set({
      id,category,recipents,subject,body,
      sender: currentUser.email,
      senderName: currentUser.displayName,
      read: true,
      month : new Date().getMonth(),
      date : new Date().getDate(),
    })
    .then(() => {
      addRecivedMail();
    })
    .catch((err) => console.log(err));
  };

  const addRecivedMail = () => {
    db.collection("RecivedMails").doc(recipents).collection("mail").doc(id).set({
      id,category,recipents,subject,body,
      sender: currentUser.email,
      senderName: currentUser.displayName,
      read: false,
      month : new Date().getMonth(),
      date : new Date().getDate(),
    })
    .then(() => {
      setSnackbarMsg("Mail sent");
    });
  };

  return (
    <div className={styles.compose}>
      <div className={styles.compose__container}>
        <div className={styles.compose__header}>
          <h4>New Message</h4>
          <CloseIcon
            onClick={() => setComposeOpen(false)}
            className={styles.compose__icon}
          />
        </div>
        <input
          className={styles.compose__input}
          placeholder="Recipents"
          value={recipents}
          onChange={(e) => setRecipents(e.target.value)}
        />
        <input
          className={styles.compose__input}
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className={styles.compose__textarea}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <div className={styles.compose__footer}>
          <div className={styles.compose__footer__container}>
            <Button className={styles.compose__btn} color="primary" variant="contained" onClick={sendMail}>
              Send
            </Button>
            <MenuItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compose;
