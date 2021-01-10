export const getRepos = async (query) => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${query}+in:name`
  );
  const reposData = response.json();

  return reposData;
};
