import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";

const Cards = ({characters, onClose}) => {

  return (
    <div className={styles.container}>
      {characters.map(
        ({ id, status, name, species, gender, origin, image }) => (
          <Card
          id={id}
            key={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
            onClose={() => onClose(id)}
          />
        )
      )}
    </div>
  );
};

export default Cards;
