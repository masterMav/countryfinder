import { useState, useEffect } from "react";

const useFetch = (url) => {
  // adds commas to large numbers
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  //all 3 states
  const [list, setList] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        // Invalid input
        if (!res.ok) {
          throw Error("Please enter valid input.");
        }
        return res.json();
      })
      .then((data) => {
        // Country info
        let newList = data.map((i) => {
          return {
            name: i.name.common,
            area: numberWithCommas(i.area),
            population: numberWithCommas(i.population),
            capital: i.capital,
            subregion: i.subregion,
            flag: i.flags.png,
          };
        });

        setList(newList);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        setList("");
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { list, error, loading };
};

export default useFetch;
