import styles from "./Expert.module.css";

const Expert = (props) => {
  return (
    <div>
      <div>Obrazek</div>
      <div>
        <h3>
          {props.name} [ {props.position}]
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Expert;
