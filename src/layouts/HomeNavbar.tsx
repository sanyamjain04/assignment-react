import { useRandomJokesQuery } from "@/api/joke";
import { Button } from "@/components/ui/button";

export const HomeNavbar = () => {
  const { isFetching, refetch } = useRandomJokesQuery();

  return (
    <>
      <div className="flex justify-between items-center">
        <Button
          onClick={() => {
            refetch();
          }}
          disabled={isFetching}
        >
          Get A New Random Joke
        </Button>

        <a
          className="text-blue-500 underline underline-offset-4"
          href="https://mwks-joke-service.azurewebsites.net/swagger/index.html"
          target="_blank"
        >
          View API Docs
        </a>
      </div>
      <hr className="my-4" />
    </>
  );
};
