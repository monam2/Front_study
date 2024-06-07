import { useState } from "react";
import styles from "./CommonNav.module.scss";
import { Link } from "react-router-dom";
import navJson from './nav.json'

interface Navagation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  inActive: boolean;
}

const CommonNav = () => {
  const [navigation, setNavigation] = useState<Navagation[]>(navJson);

  const navLinks = navigation.map((item: Navagation) => {
    return (
      <Link to={item.path} className={styles.navigation__menu} key={item.path}>
        <span className={styles.navigation__menu__label}>{item.label}</span>
      </Link>
    );
  });

  return <nav className={styles.navigation}>
    {navLinks}
  </nav>;
};

export default CommonNav;
