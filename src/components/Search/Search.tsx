import styles from "./Search.module.scss";
import { useState } from "react";

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.search}>
      <div className={styles.search__icon}></div>
      <input
        placeholder="Поиск"
        className={styles.search__input}
        type="search"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </div>
  );
};
export default Search;
