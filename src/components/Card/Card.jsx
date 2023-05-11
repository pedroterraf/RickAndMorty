import { Link } from 'react-router-dom';
import styles from './Card.module.css'

const Card = ({id, name, status, species, gender, origin, image, onClose}) => {
    return (
      <div className={styles.div} >
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
               <div className={styles.flipCardFront}>
               <img src={image} alt="Avatar" className={styles.img}/>
               </div>
               <div className={styles.flipCardBack}>
                  <img className={styles.button} onClick={() => onClose(id)} src={"/imageClose/x.svg"} alt={""} width='30px' height="30px"/>
                  <Link to={`/detail/${id}`}>
                     <h3 className={styles.name}>{name}</h3>
                  </Link>
                  {/* <h4>{`Status: ${status}`}</h4>
                  <h4>{`Species: ${species}`}</h4>
                  <h4>{`Gender: ${gender}`}</h4>
                  <h4>{`Origin: ${origin.name}`}</h4> */}
               </div>
            </div>
         </div>
      </div>
    )
 };
 
 export default Card;
 
