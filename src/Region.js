import { useState } from "react";
import Search from "./Search";

const Region = () => {
  const [region, setRegion] = useState("");
  const [fans, setFans] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFans(region);
  };

  return (
    <div className="nothing">
      <div className="bg-dark text-secondary px-4 py-4 text-center">
        <div className="pb-5">
          <h5 className="display-6 fw-bold text-white mb-5">Find By Region.</h5>
          <form className="col-lg-6 mx-auto customForm" onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              placeholder="Eg: Europe, Asia, Africa, North America"
              type="text"
              required
              value={region}
              onChange={(e) => {
                setRegion(e.target.value);
                setFans("");
              }}
            />
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button className="btn btn-outline-info btn-md px-4 me-sm-3 fw-bold">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {fans && <Search searchType="region" input={fans} />}
    </div>
  );
};

export default Region;
