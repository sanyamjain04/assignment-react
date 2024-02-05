import { useState } from "react";
import { Button } from "./ui/button";

interface IJoke {
  id: string;
  joke: string;
  punchLine: string;
}

export const Joke = ({ joke }: { joke: IJoke }) => {
  const [showPuchline, setShowPunchline] = useState<boolean>(false);

  return (
    <div className="space-y-8 max-w-lg mx-auto">
      <p className="text-left ">{joke?.joke}</p>

      <Button variant="secondary" onClick={() => setShowPunchline((v) => !v)}>
        {showPuchline ? "Hide" : "Show"} Puchline
      </Button>

      {showPuchline ? <p className="text-right">{joke?.punchLine}</p> : null}
    </div>
  );
};
