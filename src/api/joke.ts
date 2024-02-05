import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function getJoke() {
  return axios.get(
    "https://mwks-joke-service.azurewebsites.net/api/joke/random",
    {
      headers: {
        accept: "text/plain",
      },
    }
  );
}

export const useRandomJokesQuery = () => {
  return useQuery({
    queryKey: ["joke"],
    queryFn: getJoke,
  });
};
