import { Link, useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Detail/Detail.module.css"


const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            <button className={styles.buttonBack}>
                <NavLink className={styles.buttonBackText} to="/home">Back</NavLink>
            </button>
            <div className={styles.div} >
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <img className={styles.image} src={character?.image} alt={character.name} />
                        </div>
                        <div className={styles.flipCardBack}>
                            <h3>{character?.name}</h3>
                            <h4>Status: {character?.status}</h4>
                            <h4>Specie: {character?.species}</h4>
                            <h4>Gender: {character?.gender}</h4>
                            <h4>Origin: {character?.origin?.name}</h4>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
};



export default Detail;