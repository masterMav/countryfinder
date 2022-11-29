import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [list, setList] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Please enter valid input.");
        }
        return res.json();
      })
      .then((data) => {
        const newList = data.map((i) => {
          return i.name.official;
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
