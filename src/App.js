import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
