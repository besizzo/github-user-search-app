import styles from "./Header.module.scss";

import logo from "../../assets/logo.svg";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoWrapper}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div>
        <h3 className={styles.title}>requestum</h3>
        <p className={styles.subtitle}>web development company</p>
      </div>
    </div>
    <div>
      <p>Github user search app</p>
    </div>
  </header>
);

export default Header;
