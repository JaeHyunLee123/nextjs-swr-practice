import React from "react";
import useSWR from "swr";

interface IDogVideo {
  url: string;
  isLiked: boolean;
}

export default () => {
  const { data, isValidating, mutate } = useSWR<IDogVideo>(
    "https://dogs-api.nomadcoders.workers.dev"
  );

  console.log(data);

  return (
    <div className="p-10 bg-slate-800 h-screen">
      <h1 className="text-white text-6xl font-bold mb-10">Woof.tv</h1>
      {isValidating ? (
        <h2 className="text-white text-4xl font-bold">Loading...</h2>
      ) : (
        <div className="flex flex-col justify-center items-center bg-slate-700 w-full rounded py-5 space-y-5">
          <video className="h-[400px] max-w-full" src={data?.url} />
          <div className="flex justify-center items-center w-full space-x-5">
            <button
              className="cursor-pointer bg-white rounded py-2 w-5/12"
              onClick={() => {
                mutate();
              }}
            >
              New Dog!
            </button>
            <button className="cursor-pointer text-white bg-blue-400 rounded py-2 w-5/12">
              Like
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
