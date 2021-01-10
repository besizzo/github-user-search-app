import { useState, useMemo, useEffect } from "react";
import debounce from "lodash/debounce";

import Search from "../Search";
import Results from "../Results";
import { getRepos } from "../../api/repos";

import useRequestsHistory from "./useRequestsHistory";
import styles from "./Main.module.scss";

const Main = () => {
  const [input, setInput] = useState("");
  const [repos, setRepos] = useState(null);
  const { requestsHistory, handleUpdateRequestsHistory } = useRequestsHistory();

  const handleGetRepos = async (input) => {
    const reposData = await getRepos(input);
    setRepos(reposData.items);
  };

  const handleInputChange = useMemo(
    () =>
      debounce((value) => {
        if (value && input !== value) {
          setInput(value);
          handleUpdateRequestsHistory(value);
        }
      }, 500),
    [input, handleUpdateRequestsHistory]
  );

  useEffect(() => {
    if (input) {
      handleGetRepos(input);
    }
  }, [input]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Search onChange={handleInputChange} />
        <p className={styles.searchHistory}>Search history:</p>
        {requestsHistory.map((historyItem, index) => (
          <div key={`${historyItem}-${index}`}>{historyItem}</div>
        ))}
      </div>
      <Results repos={repos} />
    </main>
  );
};

export default Main;
