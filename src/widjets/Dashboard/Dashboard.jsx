import styles from "./Dashboard.module.scss";
import Search from "../../components/Search/Search.jsx";
import CustomizedTables from "../../components/Table/Table.jsx";
const Dashboard = () => {
  return (
    <>
      <section className={styles.dashboard}>
        <h3 className={styles.company}>Моя организация</h3>
        <div className={styles.divider}></div>
        <h3 className={styles.users}>Пользователи</h3>
        <Search />
        <CustomizedTables />
      </section>
    </>
  );
};

export default Dashboard;