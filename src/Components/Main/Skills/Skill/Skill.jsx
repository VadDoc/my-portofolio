import styles from "../Skills.module.css";

export const Skill = ({skill}) => {
  return <div className={styles.skill}>
    <div>{skill.logo}</div>
    <h3>{skill.title}</h3>
    <p>{skill.text}</p>
  </div>;
}