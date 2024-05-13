import Query from "@/components/Query";
import QueryMovies from "@/components/actions/QueryMovies";

export default function Page() {
  return (
    <main className="">
      <div className="wrapper max-w-4xl mx-auto">
        <div className="header p-3 border-b">
          <h3 className="text-[15px] font-bold text-indigo-500">
            Tutorials Page
          </h3>
        </div>
        <div className="p-3">
          <h3 className="font-[600] text-2xl mt-3">Servers in Next.js</h3>
          <Query />
          <QueryMovies />
        </div>
      </div>
    </main>
  );
}
