import React from "react";
import styles from "./Home.module.css";

// index.js files are automatically detected by react compiler inisde any folder. In other words we can say that they are default imports.

import { Header, SideBar } from "..";

const Home = ({ email , displayName }) => {
  return (
    <div className={styles.home}>
      <Header email={email} displayName={displayName} />
      <SideBar />
    </div>
  );
};

export default Home;
