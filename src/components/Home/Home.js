import React from "react";
import styles from "./Home.module.css";

// index.js files are automatically detected by react compiler inisde any folder. In other words we can say that they are default imports.

import { Header, SideBar, Compose, Main, SnackBar, ViewMail } from "..";
import { useLocalContext } from "../../context/context";

const Home = ({ email, displayName , showMail = true , mailData }) => {
  const { composeOpen } = useLocalContext();
  return (
    <div className={styles.home}>
      {composeOpen && <Compose />}
      <Header email={email} displayName={displayName} />
      <SideBar>
        {showMail ? <Main /> : <ViewMail mailData={mailData} />}
      </SideBar>
      <SnackBar />
    </div>
  );
};

export default Home;
