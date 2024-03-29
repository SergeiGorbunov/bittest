import styles from "./header.module.scss";
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h2>BitTest</h2>
      <p className={styles.company}>Моя организация</p>
      <div className={styles.profile}>
        <div
          className={styles.profile__avatar}
        />
        <div className={styles.profile__text}>
          <p className={styles.profile__meta}>Вы авторизованы</p>
          <p>Администратор</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
