import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function TraditionalFetching() {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const [state, setState] = useState({
    isLoading: true,
    data: null,
  });
  const { isLoading, data } = state;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setState({ isLoading: false, data: res.data });
      })
      .catch((err) => {
        console.error(err);
        setState({ isLoading: false, data: null });
      });
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (!data) return <h2>Error fetching...</h2>;

  return (
    <>
      <h2>Json Placeholder Page</h2>
      {
        <div>
          <h3>{data.name}</h3>
          <h3>{data.username}</h3>
          <h3>{data.email}</h3>
          <br />
          <h3>
            <ExtractObject object={data.address} />
          </h3>
          <br />
          <h3>
            <ExtractObject object={data.company} />
          </h3>
        </div>
      }
    </>
  );
}

function ExtractObject({ object }) {
  return Object.entries(object).map(([key, value]) => {
    if (typeof value === "string") {
      return (
        <span key={key}>
          {key}: {value} <br />
        </span>
      );
    } else if (typeof value === "object") {
      return (
        <span key={key}>
          {key}: {JSON.stringify(value)};
        </span>
      );
    }
  });
}

export default TraditionalFetching;
