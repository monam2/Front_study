import styles from './SubLayout.module.css'

const SubLayout = ({ children }) => {
  return (
    <>
      {children}
      <footer className={styles.footer}>@monam2</footer>
    </>
  );
};

export default SubLayout;
