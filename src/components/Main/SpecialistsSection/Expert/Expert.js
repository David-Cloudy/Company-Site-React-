import styles from "./Expert.module.css";

const Expert = (props) => {
  return (
    <div className={styles.expert}>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(/assets/images/${props.photo})`,
        }}
      ></div>
      <div className={styles.text}>
        <h4>
          {props.name} [ {props.position} ]
        </h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Expert;
