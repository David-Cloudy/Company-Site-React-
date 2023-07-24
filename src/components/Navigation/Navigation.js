import styles from "./Navigation.module.css";
import NavigationList from "./NavigationList/NavigationList";
import Container from "../../shared-components/Container/Container";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Container additionalClass={styles.navContainer}>
        <h4>nazwa firmy</h4>
        <NavigationList />
      </Container>
    </nav>
  );
};

export default Navigation;
