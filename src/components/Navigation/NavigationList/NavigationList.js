import styles from "./NavigationList.module.css";

const NavigationList = () => {
  return (
    <ul className={styles.navigationList}>
      <li>
        <a className={styles.navAnchor} href="">
          o nas
        </a>
      </li>
      <li>
        <a className={styles.navAnchor} href="">
          oferta
        </a>
      </li>
      <li>
        <a className={styles.navAnchorDisabled} href="">
          kontakt
        </a>
      </li>
    </ul>
  );
};

export default NavigationList;
