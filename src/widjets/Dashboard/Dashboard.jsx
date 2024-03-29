import styles from "./Dashboard.module.scss";
import Search from "../../components/Search/Search.jsx";
import Table from "../../components/Table/Table.jsx";
const Dashboard = () => {
  return (
    <>
      <section className={styles.dashboard}>
        <h3 className={styles.company}>Моя организация</h3>
        <div className={styles.divider}></div>
        <h3 className={styles.users}>Пользователи</h3>
        <Search />
        <Table />
      </section>
    </>
  );
};

export default Dashboard;
