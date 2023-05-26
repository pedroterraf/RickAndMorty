import { connect } from "react-redux";
import styles from "../Favorites/Favorites.module.css"
import { NavLink } from "react-router-dom";


const Favorites = ({myFavorites}) => {
    return ( 
        <div className={styles.div}>
            {
                myFavorites?.map(fav => {
                    return(
                        <div className={styles.flipCard}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <img className={styles.image} src={fav?.image} alt={fav.name} />
                            </div>
                            <div className={styles.flipCardBack}>
                                <NavLink className={styles.name} to={`/detail/${fav.id}`}>
                                    <h3>{fav?.name}</h3>
                                </NavLink>
                                <div className={styles.h4}>
                                    <h4>Specie: {fav?.species}</h4>
                                    <h4>Gender: {fav?.gender}</h4>
                                </div>
                            </div>
                        </div>
                    </div>    
                    )
                })
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites
    }
 }

export default connect(mapStateToProps, null)(Favorites);
