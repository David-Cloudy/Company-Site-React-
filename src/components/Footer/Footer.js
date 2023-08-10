import styles from "./Footer.module.css";
import Container from "../../shared-components/Container/Container";
import FooterIcons from "./FooterIcons/FooterIcons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container additionalClass={styles.footerContainer}>
        <h4>Nazwa firmy - wszelkie prawa zastrzeżone, 2023</h4>
        <FooterIcons />
      </Container>
    </footer>
  );
};

export default Footer;
