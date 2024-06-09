import { useEffect, useState } from "react";
import styles from "./CommonNav.module.scss";
import { Link, useLocation } from "react-router-dom";
import navJson from './nav.json'
import { useRecoilState } from "recoil";
import { pageState } from "@/store/atoms/pageState";
import { searchState } from "@/store/atoms/searchState";

interface Navigation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

const CommonNav = () => {
  const loacation = useLocation()
  const [navigation, setNavigation] = useState<Navigation[]>(navJson);
  const [page, setPage] = useRecoilState(pageState);
  const [search, setSearch] = useRecoilState(searchState);

  const navLinks = navigation.map((item: Navagation) => {
    return (
      <Link to={item.path} className={item.isActive ? `${styles.navigation__menu} ${styles.active}` : `${styles.navigation__menu}`} key={item.path}>
        <span className={styles.navigation__menu__label}>{item.label}</span>
      </Link>
    );
  });

  useEffect(()=>{
    navigation.forEach((nav:Navigation)=>{
      nav.isActive = false;

      if (nav.path === location.pathname || location.pathname.includes(nav.path)){
        nav.isActive = true;
        setSearch(nav.searchValue);
        setPage(1);
      }
    })
  },[location.pathname])

  return <nav className={styles.navigation}>
    {navLinks}
  </nav>;
};

export default CommonNav;
