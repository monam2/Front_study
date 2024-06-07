import { CardDTO } from "@/pages/index/types/card";
import styles from './Card.module.scss';

interface Props {
    data : CardDTO;
}

const Card = ({data}:Props) => {

    const openDialog = ()=> {
        console.log("함수호출")
    }

  return (
    <div className={styles.card} onClick={openDialog}>
        <img src={data.urls.small} className={styles.card__image} alt={data.alt_description} />
    </div>
  )
}

export default Card