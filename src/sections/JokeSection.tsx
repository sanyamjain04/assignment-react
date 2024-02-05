import { useRandomJokesQuery } from "@/api/joke";
import { Joke } from "@/components/Joke";
import { ErrorBoundary } from "react-error-boundary";

export const JokeSection = () => {
  const { data, isFetching, error } = useRandomJokesQuery();

  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      {isFetching ? (
        <p>Your Joke is Loading...</p>
      ) : error ? (
        <p className="text-red-500 font-semibold">
          There was an Error Loading Your Joke
        </p>
      ) : (
        <Joke joke={data?.data.data} />
      )}
    </ErrorBoundary>
  );
};

export default JokeSection;
