import styles from "./SpecialistsSection.module.css";
import Container from "../../../shared-components/Container/Container";
import { experts } from "../../../data/experts";
import Expert from "./Expert/Expert";

const SpecialistsSection = () => {
  return (
    <section className={styles.specialistsSection}>
      <Container>
        <h2 style={{ color: "#152d41" }}>Nasi specjaliści</h2>
        {experts.map((expert) => (
          <Expert
            name={expert.name}
            key={expert.name}
            position={expert.position}
            description={expert.description}
            photo={expert.photo}
          />
        ))}
      </Container>
    </section>
  );
};

export default SpecialistsSection;
