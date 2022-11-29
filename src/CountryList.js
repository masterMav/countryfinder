const CountryList = ({ list }) => {
  return (
    <div className="row g-4">
      {list.map((i) => (
        <div className="customCard card mb-3 " key={i.name}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={i.flag} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{i.name}</h5>
                <p className="card-text">
                  It's capital is {i.capital} & is located in {i.subregion}.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Population: {i.population}
                    <br />
                    Area: {i.area}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
