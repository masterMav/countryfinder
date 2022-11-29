import CountryList from "./CountryList";
import useFetch from "./useFetch";
const Lang = () => {
  const { list, error, loading } = useFetch(
    "https://restcountries.com/v3.1/lang/german"
  );

  return (
    <div className="findby">
      <h2 className="mb-5">Language.</h2>
      {list && <CountryList list={list} />}
      {error && <p className="badge bg-danger">{error}</p>}
      {loading && <p>Loading....</p>}
    </div>
  );
};

export default Lang;
