import { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Card.module.css'
import { addFavCharacter, removeFavCharacter } from '../../redux/action/action'

const Card = ({id, name, status, species, gender, origin, image, onClose, addFavCharacter, removeFavCharacter, myFavorites}) => {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavCharacter(id);
      };
      if (!isFav) {
         setIsFav(true);
         addFavCharacter({id, name, status, species, gender, origin, image});
      };
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

    return (
      <div className={styles.div} >
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
               <div className={styles.flipCardFront}>
               <img src={image} alt="Avatar" className={styles.img}/>
               </div>
               <div className={styles.flipCardBack}>
               {
                     isFav ? (
                           <img className={styles.buttonFav} onClick={() => handleFavorite(id)} src={"/imageFavorites/noFav.svg"} alt={""} />
                     ) : (
                           <img className={styles.buttonNoFav} onClick={() => handleFavorite(id)} src={"/imageFavorites/fav.svg"} alt={""} />
                     )
                  }
                  <img className={styles.buttonOnClose} onClick={() => onClose(id)} src={"/imageClose/x.svg"} alt={""} />
                  <NavLink className={styles.nameLink} to={`/detail/${id}`}>
                     <h3 className={styles.name}>{name}</h3>
                  </NavLink>
                     <h4 className={styles.h4}>{species}</h4>
                     <h4 className={styles.h4}>{gender}</h4>
               </div>
            </div>
         </div>
      </div>
    )
 };

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
      
   }
};

const mapDispatchToProps = (dispatch) => {
   return{
      addFavCharacter : (character) => {
         dispatch(addFavCharacter(character));
      },
      removeFavCharacter : (id) => {
         dispatch(removeFavCharacter(id));
      }
   }
}

 
 export default connect(mapStateToProps , mapDispatchToProps)(Card);
 
