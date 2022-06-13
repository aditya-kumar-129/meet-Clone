import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { useLocalContext } from "./context";

const MailContext = createContext();

export function useMailContext() {
  return useContext(MailContext);
}

export function MailContextProvider({ children }) {
  const [receivedMails, setReceivedMails] = useState([]);
  const [onScreenMails, setOnScreenMails] = useState([]);
  const [sentMails, setSentMails] = useState([]);
  const [mailsType, setMailsType] = useState("Primary");

  const [inboxUnreadNo, setInboxUnreadNo] = useState(0);
  const [socialUnreadNo, setSocialUnreadNo] = useState(0);
  const [primaryUnreadNo, setPrimaryUnreadNo] = useState(0);
  const [promosUnreadNo, setPromosUnreadNo] = useState(0);
  const [updatesUnreadNo, setUpdatesUnreadNo] = useState(0);

  const { currentUser } = useLocalContext();

  // This useEffect is for getting all the mails that has been sent to the user from the firebase database
  useEffect(() => {
    if (currentUser) {
      db.collection("RecivedMails").doc(currentUser.email).collection("mail").onSnapshot((snapshot) => {
        setReceivedMails(snapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [currentUser]);

  // This useEffect is for getting all the mails that the user has sent to any one of the users
  useEffect(() => {
    if (currentUser) {
      db.collection("SentMails").doc(currentUser.email).collection("mails").onSnapshot((snapshot) => {
        setSentMails(snapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [currentUser]);

  // This useEffect is used for filtering the mails that he/she has recieved from anyone based on the tab he/she has selected such as primary,social,promotion,updates and sent mails and then setting the onScreenMails to the filtered mails
  useEffect(() => {
    // when the user clicks on the sent mail then we have to show the sent mails
    if (mailsType === "Sent") {
      setOnScreenMails(sentMails);
    }

    // Filtering of received mails when the user clicks on the primary tab
    if (mailsType === "Primary") {
      let array = receivedMails.filter((e) => {
        return e.category === "Primary";
      });
      setOnScreenMails(array);
    }

    // Filtering of received mails when the user clicks on the promotions tab
    if (mailsType === "Promotions") {
      let array = receivedMails.filter((e) => {
        return e.category === "Promotions";
      });
      setOnScreenMails(array);
    }

    // Filtering of received mails when the user clicks on the social tab
    if (mailsType === "Social") {
      let array = receivedMails.filter((e) => {
        return e.category === "Social";
      });
      setOnScreenMails(array);
    }

    // Filtering of received mails when the user clicks on the updates tab
    if (mailsType === "Updates") {
      let array = receivedMails.filter((e) => {
        return e.category === "Updates";
      });
      setOnScreenMails(array);
    }
  }, [mailsType, receivedMails, sentMails]);
  
  useEffect(() => {
    // First we are sorting the received mails whose read status is false
    let array = receivedMails.filter((e) => {
      return e.read === false;
    });

    // Then we are counting the number of unread mails so that we can update the total count of unread message in the inbox of the sidebar
    setInboxUnreadNo(array.length);

    // Then we are counting the number of unread mails which is of category primary
    let primaryUnread = array.filter((e) => {
      return e.category === "Primary";
    });

    // Then we are updating the unread no of mails of primary tab.
    setPrimaryUnreadNo(primaryUnread.length);

    // Then we are counting the number of unread mails which is of category social
    let socialUnread = array.filter((e) => {
      return e.category === "Social";
    });

    // Then we are updating the unread no of mails of social tab.
    setSocialUnreadNo(socialUnread.length);

    // Then we are counting the number of unread mails which is of category promotions
    let promotionUnread = array.filter((e) => {
      return e.category === "Promotions";
    });

    // Then we are updating the unread no of mails of promotions tab.
    setPromosUnreadNo(promotionUnread.length);

    // Then we are counting the number of unread mails which is of category updates
    let updateUnread = array.filter((e) => {
      return e.category === "Updates";
    });

    // Then we are updating the unread no of mails of updates tab.
    setUpdatesUnreadNo(updateUnread.length);
  }, [receivedMails]);

  useEffect(()=>{
    setOnScreenMails(receivedMails);
  },[receivedMails]);

  const value = {onScreenMails, setMailsType, mailsType, socialUnreadNo, primaryUnreadNo, inboxUnreadNo, promosUnreadNo, updatesUnreadNo };
  return <MailContext.Provider value={value}>{children}</MailContext.Provider>;
}
