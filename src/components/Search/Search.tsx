import styles from './Search.module.scss'
const Search = () => {
    return (
        <div className={styles.search}>
            <div className={styles.search__icon}></div>
            <input placeholder="Поиск" className={styles.search__input} type="search" name="" id=""/>
        </div>
    )
}
export default Search