import styles from "./Table.module.scss";
const Table = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <tr>
          <th className={styles.table__header_item}>Email</th>
          <th className={styles.table__header_item}>Имя</th>
          <th className={styles.table__header_item}>Роль</th>
          <th className={styles.table__header_item}>Подписка</th>
          <th className={styles.table__header_item}>Токены</th>
          <th className={styles.table__header_item}>Действия</th>
        </tr>
      </thead>
    </table>
  );
};

export default Table;
