import styles from "./Main.module.css";
import OfferSection from "./OfferSection/OfferSection";
import SpecialistsSection from "./SpecialistsSection/SpecialistsSection";

const Main = () => {
  return (
    <main className={styles.main}>
      <SpecialistsSection />
      <OfferSection />
    </main>
  );
};

export default Main;
