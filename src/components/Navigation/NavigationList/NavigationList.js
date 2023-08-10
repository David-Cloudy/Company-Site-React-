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
        {/* Button-not  <a> because Netliy does not accept <a> without valid href  */}
        <button className={styles.navAnchorDisabled}>kontakt</button>
      </li>
    </ul>
  );
};

export default NavigationList;
