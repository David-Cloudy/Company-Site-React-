import styles from "./SpecialistsSection.module.css";
import Container from "../../../shared-components/Container/Container";
import { experts } from "../../../data/experts";
import Expert from "./Expert/Expert";

const SpecialistsSection = () => {
  return (
    <section className={styles.specialistsSection} id="specialistsSection">
      <Container additionalClass={styles.specialistsSectionContainer}>
        <h2 className={styles.specHeading}>Nasi specjaliści</h2>
        <div className={styles.expertsList}>
          {experts.map(({ name, position, description, photo }) => (
            <Expert
              key={name}
              name={name}
              position={position}
              description={description}
              photo={photo}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SpecialistsSection;
