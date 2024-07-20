// react router component
import axios from "axios";
import { QueryClientProvider, QueryClient, useQuery } from "react-query"; 
import Button from "../components/button";

// create an instance
const queryClient = new QueryClient();

function RQPage() {
  // returns the datas like useState
  // if your not planning to wrap the whole main jsx w ith Queryclient provider then 
  // wrapped this first in a function

  // useQuery accepts three arguments in here we use only 2 arguments(identifier, function)
  const { isLoading, data } = useQuery("json-placeholder", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    // returns a promise
    return response.data;
  });

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (  
    <>
      <section className="react-query__section p-3">      
        <h2>
          RQ JSON Placeholder
        </h2>
        <p>
          Name: { data?.name }
        </p>
        <Button />
      </section>
    </>
  );
}

// use a wrapper function to wrap the entire code with the client provider won't work if you put it in the same function
export default function RQPageWrapper() {
  return (
    <QueryClientProvider client={ queryClient }>
      <RQPage />
    </QueryClientProvider>
  );
}

