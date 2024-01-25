import styles from "./Table.module.scss";
import { useGetPageWithUsersQuery } from "../../utils/store/usersApi";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDrawer, setUserId, setUserMail } from "../../utils/store/drawer";

const Table = () => {
  const searchValue = useSelector((store) => store.search.search);
  const [sort, setSort] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  let tempOrder = "";
  if (sort) {
    tempOrder = "tokens:asc";
  } else {
    tempOrder = "tokens:desc";
  }
  const { data, isLoading, error } = useGetPageWithUsersQuery(
    {
      page: currentPage,
      search: searchValue,
      orderBy: tempOrder,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const pages = [];
  for (let i = 1; i <= data?.pages; i++) {
    pages.push(i);
  }

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
              <th
                className={styles.tokens}
                onClick={() => {
                  setSort(!sort);
                }}
              >
                Токены
              </th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data.map((user) => (
                <>
                  <tr key={user.id}>
                    <td> {user.email}</td>
                    <td
                      className={styles.name}
                      onClick={() => {
                        dispatch(setDrawer(true));
                        dispatch(setUserId(user.id));
                        dispatch(setUserMail(user.email));
                      }}
                    >
                      {user.name}
                    </td>
                    <td>{user.role}</td>
                    <td>{user.subscription.plan.type}</td>
                    <td>{user.subscription.tokens}</td>
                    <td>
                      <button className={styles.edit__button}></button>
                      <button className={styles.delete__button}></button>
                    </td>
                  </tr>
                </>
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
