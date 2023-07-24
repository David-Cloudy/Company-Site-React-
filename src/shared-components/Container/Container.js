import styles from "./Container.module.css";

const Container = (props) => {
  return (
    <div className={`${styles.container} ${props.additionalClass}`}>
      {props.children}
    </div>
  );
};

export default Container;
