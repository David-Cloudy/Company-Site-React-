import styles from "./OfferSection.module.css";
import Container from "../../../shared-components/Container/Container";
import { offers } from "../../../data/offers";
import Box from "./Box/Box";

const OfferSection = () => {
  return (
    <section className={styles.offerSection} id="offerSection">
      <Container>
        <h3 className={styles.header}>Czym zajmuje się nasza firma?</h3>
        <div className={styles.boxes}>
          {offers.map((offer) => (
            <Box name={offer.name} isNew={offer.isNew} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OfferSection;
