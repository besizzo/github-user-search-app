import styles from "./Results.module.scss";

const NOT_SPECIFIED = "not specified";

const Results = ({ repos }) => {
  if (!repos) {
    return null;
  }

  return (
    <div className={styles.container}>
      {repos.map((repoElement) => {
        console.log(repoElement)
        const { id, name, description, language, html_url } = repoElement;
        return (
          <div key={id} className={styles.item}>
            <p className={`${styles.name} ${styles.marginBottom}`}><a href={`${html_url}`}>{name}</a></p>
            <p className={styles.marginBottom}>
              Language: <strong>{language ?? NOT_SPECIFIED}</strong>
            </p>
            <p className={styles.marginBottom}>
              Description: {description ?? NOT_SPECIFIED}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
