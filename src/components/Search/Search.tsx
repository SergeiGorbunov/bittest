import styles from "./Search.module.scss";
import { setSearch } from "../../utils/store/search";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
const Search: React.FC = () => {
  const searchValue = useSelector((search: string) => search.search.search);
  const dispatch = useDispatch();
  return (
    <div className={styles.search}>
      <div className={styles.search__icon}></div>
      <input
        placeholder="Поиск"
        className={styles.search__input}
        type="search"
        onChange={(e) => dispatch(setSearch(e.target.value))} //dispatch
        value={searchValue}
      />
    </div>
  );
};
export default Search;
