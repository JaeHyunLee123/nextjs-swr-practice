import React from "react";
import useSWR from "swr";

interface IDogVideo {
  url: string;
  isLiked: boolean;
}

export default () => {
  const { data, isValidating } = useSWR<IDogVideo>(
    "https://dogs-api.nomadcoders.workers.dev"
  );

  console.log(data);

  return (
    <div>
      <h1>Woof.tv</h1>
      {isValidating ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <video src={data?.url}></video>
          <div>
            <button>New Dog!</button>
            <button>Like</button>
          </div>
        </div>
      )}
    </div>
  );
};
