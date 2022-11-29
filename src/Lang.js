import useFetch from "./useFetch";
const Lang = () => {
  const { list, error, loading } = useFetch(
    "https://restcountries.com/v3.1/name/united"
  );

  return (
    <div className="findby">
      <h2 className="mb-5">Language.</h2>
      {list &&
        list.map((i) => (
          <div className="country-list" key={i}>
            <p className="lead">{i}</p>
          </div>
        ))}
      {error && <p className="badge bg-danger">{error}</p>}
      {loading && <p>Loading....</p>}
    </div>
  );
};

export default Lang;
