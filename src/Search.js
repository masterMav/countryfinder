import CountryList from "./CountryList";
import useFetch from "./useFetch";
const Search = ({ searchType, input }) => {
  const { list, error, loading } = useFetch(
    `https://restcountries.com/v3.1/${searchType}/${input}`
  );

  return (
    <div className="container">
      {searchType === "lang" && (
        <h2 className="my-5">List of all countries speaking {input}.</h2>
      )}
      {searchType === "region" && (
        <h2 className="my-5">List of all countries in {input}.</h2>
      )}
      {list && <CountryList list={list} />}
      {error && <p className="badge bg-danger">{error}</p>}
      {loading && <p>Loading....</p>}
    </div>
  );
};

export default Search;
