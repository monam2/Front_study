import { CardDTO } from "@/pages/index/types/card";
import styles from "./Card.module.scss";

interface Props {
  data: CardDTO;
  handleDialog: (eventValue: boolean) => void;
  handleSetData: (eventValue: CardDTO) => void;
}

const Card = ({ data, handleDialog, handleSetData }: Props) => {
  const openDialog = () => {
    handleDialog(true);
    handleSetData(data);
  };

  return (
    <div className={styles.card} onClick={openDialog}>
      <img
        src={data.urls.small}
        className={styles.card__image}
        alt={data.alt_description}
      />
    </div>
  );
};

export default Card;
