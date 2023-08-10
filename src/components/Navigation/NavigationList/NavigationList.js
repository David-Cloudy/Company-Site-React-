import styles from "./NavigationList.module.css";

const NavigationList = () => {
  return (
    <ul className={styles.navigationList}>
      <li>
        <a className={styles.navAnchor} href="#specialistsSection">
          o nas
        </a>
      </li>
      <li>
        <a className={styles.navAnchor} href="#offerSection">
          oferta
        </a>
      </li>
      <li>
        <a className={styles.navAnchorDisabled}>kontakt</a>
      </li>
    </ul>
  );
};

export default NavigationList;
