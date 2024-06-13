import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header className={styles.header}>NARAS 🌎</header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
