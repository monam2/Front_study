import { useNavigate } from "react-router-dom"
import styles from './CommonHeader.module.scss'

const CommonHeader = () => {
  const navigate = useNavigate();
  
  const moveToPage = (filter:string)=> {
    navigate(filter)
  }

  return (
    <header className={styles.header}>
        <div className={styles.header__logoBox} onClick={()=>moveToPage('/')}>
            <img src="src/assets/images/image-logo.png" alt="" className={styles.header__logoBox__logo} />
            <span className={styles.header__logoBox__title}>PhotoSplash</span>
        </div>
        <div className={styles.header__profileBox}>
            <button className={styles.header__profileBox__button}>사진 제출</button>
            <button className={styles.header__profileBox__button}  onClick={()=>moveToPage('/bookmark')}>북마크</button>
            <span className={styles.header__profileBox__userName}>kangcw0107 | @monam2</span>
        </div>
    </header>
  )
}

export default CommonHeader