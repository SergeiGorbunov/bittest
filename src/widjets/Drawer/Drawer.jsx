import styles from "./Drawer.module.scss";
import { setDrawer } from "../../utils/store/drawer";
import { useDispatch, useSelector } from "react-redux";
import History from "../../components/History/History.jsx";
import Chart from "../../components/Chart/Chart.jsx";

const Drawer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.drawer.drawer);
    const userMail = useSelector((store) => store.drawer.userMail);

  const setIsOpen = (isOpen) => {
    dispatch(setDrawer(isOpen));
  };
  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className={
        isOpen ? styles.drawer__container : styles["drawer__container-hidden"] + " " + styles.drawer
      }
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.drawer}>
        <div className={styles.drawer__start}>
          <p>{userMail}</p>
          <div onClick={() => setIsOpen(!isOpen)} className={styles.close}></div>

        </div>
        <p>Использование токенов</p>
        <Chart />
        <History />
      </div>
    </div>
  );
};

export default Drawer;
