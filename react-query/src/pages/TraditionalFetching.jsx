import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../components/button";

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
      <section className="traditional__section p-2">
        <h2 className="traditional__jsonplaceholder">Json Placeholder Page</h2>
        <div>
          <h3 className="pl-3">{ data.name }</h3>
          <h3 className="pl-3">{ data.username }</h3>
          <h3 className="pl-3">{ data.email }</h3>
          <br role="separator"/>
          <h3 className="pl-3">
            <ExtractObject object={ data.address } />
          </h3>
          <br role="separator"/>
          <h3 className="pl-3">
            <ExtractObject object={ data.company } />
          </h3>
        </div>
        <Button />
      </section>
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
