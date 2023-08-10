import styles from "./Box.module.css";

const Box = (props) => {
  return (
    <div className={styles.box}>
      <p className={styles.boxName}>{props.name}</p>
      {props.isNew ? (
        <>
          <div className={styles.dot} />
          <p>(Nowość)</p>
        </>
      ) : null}
    </div>
  );
};

export default Box;
