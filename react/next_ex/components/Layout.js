import { useRouter } from "next/router";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
const router = useRouter();

const onClickHandler = ()=> {
  router.push('/');
}

  return (
    <div>
      <header className={styles.header} onClick={onClickHandler}>NARAS 🌎</header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
