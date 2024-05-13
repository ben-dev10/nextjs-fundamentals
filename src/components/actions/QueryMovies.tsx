"use client";
import { Suspense, useEffect, useState } from "react";
import LoadingUI from "../LoadingUI";

type Movie = {
  title: string;
  description: string;
  stars: number;
};

export default function QueryMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  //   const getMovies2 = async () => {
  //     try {
  //       const res = await fetch(`api/movies`, {
  //         method: "GET",
  //         cache: "no-store",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch the data");
  //       }
  //       const result = await res.json();
  //       setMovies(result);
  //     } catch (err) {
  //       console.log(err);
  //       throw err;
  //     }
  //   };

  const getMovies = async () => {
    setIsLoading(true);

    const res = await fetch("api/movies");
    const resJSON = await res.json();
    setMovies(resJSON);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="mt-6 text-[13px]">
      <b>Movie list:</b>
      <p className="text-gray-500 text-[13px] mb-3">
        Data retrieved from next/server api{" "}
        <span className="font-mono bg-gray-200/40 p-1 rounded-md">
          &quot;localhost:300/api/movies&quot;
        </span>{" "}
      </p>
      <div className="border border-dashed p-3">
        {isLoading ? (
          <LoadingUI message="Loading Movies" />
        ) : (
          <>
            {movies.map((movie) => (
              <div
                className="my-5 p-2 pl-4 bg-indigo-100/30 rounded-sm"
                key={movie.title}
              >
                <h1 className="text-lg text-indigo-700 font-[500]">
                  {movie.title}
                </h1>
                <p className="text-gray-500 text-[12px]">{movie.description}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
