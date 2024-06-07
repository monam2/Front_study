import styles from './Card.module.scss';

const Card = () => {

    const openDialog = ()=> {
        console.log("함수호출")
    }

  return (
    <div className={styles.card} onClick={openDialog}>
        <img src="" className={styles.card__image} alt="" />
    </div>
  )
}

export default Card