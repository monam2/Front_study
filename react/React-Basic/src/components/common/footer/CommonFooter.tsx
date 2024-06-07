import styles from './CommonFooter.module.scss';

const CommonFooter = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.pagination}>
            <button className={styles.pagination__button}>
                <img src="/src/assets/icons/icon-arrowLeft.svg" alt="" />
            </button>
            <span>1</span>
            <button className={styles.pagination__button}>
                <img src="/src/assets/icons/icon-arrowRight.svg" alt="" />
            </button>
        </div>
    </footer>
  )
}

export default CommonFooter