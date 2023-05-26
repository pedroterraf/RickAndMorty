import styles from "../NavBar/NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { Link, NavLink } from "react-router-dom";



const NavBar = ({onSearch, characters}) => {
    return (
        <div className={styles.buttons}>
            <div className={styles.logout}>
                <Link to="/" ><img src='/imageButtonsNav/logout.svg' alt={""}/></Link>
            </div>
            <div className={styles.mybuttonAbout} >
                <NavLink className={styles.textAbout} to="/about" >Contact</NavLink>
            </div>
            <div className={styles.mybuttonHome}>
                <NavLink className={styles.textHome} to="/home">Home</NavLink>
            </div>
            <div className="search">
                <SearchBar onSearch={onSearch} characters={characters} />
            </div>
            <div className={styles.mybuttonFav}>
                <NavLink className={styles.textFav} to="/favorites">Favorites</NavLink>
            </div>
        </div>
    )
}

export default NavBar;