import styles from "./other.module.css";

function Ternary() {
  const a: boolean = true;
  const b: boolean = false;
  return (
    <div className={styles.container}>
      {a ? <TrueSentence name="A" /> : <FalseSentence name="A" />}
      {b ? <TrueSentence name="B" /> : <FalseSentence name="B" />}
    </div>
  );
}

interface sentenceProps {
  name: string;
}

function TrueSentence(props: sentenceProps) {
  return <h3>{props.name} is true</h3>;
}

function FalseSentence(props: sentenceProps) {
  return <h3>{props.name} is false</h3>;
}

export default Ternary;
