import styles from "./Table.module.scss";
import { useGetAllUsersQuery } from "../../utils/store/usersApi";
const Table = () => {
  const { data } = useGetAllUsersQuery({});
  data && console.log(data);
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Email</th>
          <th>Имя</th>
          <th>Роль</th>
          <th>Подписка</th>
          <th>Токены</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {/* {data &&
          data.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.subscription.type}</td>
              <td>{user.subscription.tokens}</td>
              <td></td>
            </tr>
          ))} */}
        <tr>
          <td>1</td>
          <td>ФИО</td>
          <td>Роль</td>
          <td>Подписка</td>
          <td>Токены</td>
          <td>Действия</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
