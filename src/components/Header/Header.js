import styles from "./Header.module.css";
import HeaderShadow from "./HeaderShadow/HeaderShadow";

const Header = () => {
  return (
    <header className={styles.header}>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url("/assets/images/backgroundPhoto.jpg")`,
        }}
      ></div>
      <HeaderShadow />
    </header>
  );
};

export default Header;
