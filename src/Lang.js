import CountryList from "./CountryList";
import useFetch from "./useFetch";
const Lang = ({ input }) => {
  const { list, error, loading } = useFetch(
    `https://restcountries.com/v3.1/lang/${input}`
  );

  return (
    <div className="container">
      <h2 className="my-5">List of all countries speaking {input}.</h2>
      {list && <CountryList list={list} />}
      {error && <p className="badge bg-danger">{error}</p>}
      {loading && <p>Loading....</p>}
    </div>
  );
};

export default Lang;
