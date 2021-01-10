import styles from "./Search.module.scss";

const Search = ({ onChange }) => {
  return (
    <input
      className={styles.input}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default Search;
