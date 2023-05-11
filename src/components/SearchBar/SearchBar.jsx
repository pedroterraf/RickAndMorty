import { useState } from "react";
import styles from "./SearchBar.module.css";


const SearchBar = ({onSearch, characters}) => {
  const [id,setId] = useState ("");

  const handleChange = (event) => {
    setId(event.target.value) 
  };
  
  return (
    <div className={styles.container}>
      <input placeholder="Id del personaje" className={styles.search} value={id} onChange={handleChange} type="search" />
      <img className={styles.image}
        onClick={() => {onSearch(id); setId("")} }
        src={"/imageSearch/searchnew.svg"}
        alt={"Buscar"}
      ></img>
    </div>
  );
};

export default SearchBar;
