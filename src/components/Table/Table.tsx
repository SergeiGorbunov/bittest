import styles from "./Table.module.scss";
import { useGetPageWithUsersQuery } from "../../utils/store/usersApi";
import { useState } from "react";
import { useSelector } from "react-redux";
const Table = () => {
  const searchValue = useSelector((store) => store.search.search);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useGetPageWithUsersQuery(
    {
      page: currentPage,
      search: searchValue,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const pages = [];
  for (let i = 1; i <= data?.pages; i++) {
    pages.push(i);
  }
  console.log(pages);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  } else
    return (
      <>
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
            {data &&
              data.data.map((user) => (
                <tr key={user.id}>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.subscription.plan.type}</td>
                  <td>{user.subscription.tokens}</td>
                  <td>
                    <button>Редактировать</button>
                    <button>Удалить</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className={styles.pagination}>
          {pages.map((page) => (
            <button
              className={
                page === currentPage
                  ? styles.pagination__button__active
                  : styles.pagination__button
              }
              key={page}
              onClick={() => {
                handlePageChange(page);
              }}
            >
              {page}
            </button>
          ))}
        </div>
      </>
    );
};

export default Table;
