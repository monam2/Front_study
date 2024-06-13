import styles from './SubLayout.module.css'

const SubLayout = ({ children }) => {
  return (
    <div className="SubLayout">
      <div>{children}</div>
      <footer className={styles.footer}>@monam2</footer>
    </div>
  );
};

export default SubLayout;
