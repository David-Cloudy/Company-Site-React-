import styles from "./HeaderText.module.css";

const HeaderText = () => {
  return (
    <div className={styles.headerText}>
      <h1>Nasza firma oferuje najwyższej jakości produkty</h1>
      <h4>Nie wierz nam na słowo - sprawdź</h4>
      <a className={styles.headerAnchor} href={"#offerSection"}>
        oferta
      </a>
    </div>
  );
};

export default HeaderText;
