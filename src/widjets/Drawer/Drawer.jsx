import styles from "./Drawer.module.scss";
import { setDrawer } from "../../utils/store/drawer";
import { useDispatch, useSelector } from "react-redux";
import { useGetPageWithTransactionsQuery } from "../../utils/store/transactionsApi";

const Drawer = () => {
  const userId = useSelector((store) => store.drawer.userId);
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.drawer.drawer);
  const { data, isLoading, error } = useGetPageWithTransactionsQuery(userId);
  const setIsOpen = (isOpen) => {
    dispatch(setDrawer(isOpen));
  };
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (data) {
    console.log(data);
  }
  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className={
        isOpen ? styles.drawer__container : styles["drawer__container-hidden"]
      }
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.drawer}></div>
    </div>
  );
};

export default Drawer;
