import styles from "./HeaderShadow.module.css";
import Container from "../../../shared-components/Container/Container";
import HeaderText from "./HeaderText/HeaderText";

const HeaderShadow = () => {
  return (
    <div className={styles.headerShadow}>
      <Container>
        <HeaderText />
      </Container>
    </div>
  );
};

export default HeaderShadow;
