import { gradientText } from "@/utils/ui-helpers";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <main className="p-4 text-[12px] ">
        <div className="wrapper max-w-4xl mx-auto">
          <h1
            className="text-5xl font-[800]"
            style={gradientText("linear-gradient(to right, #0076ff, #6a309e)")}
          >
            Welcome To Next.js Fundamentals
          </h1>
          <p className="pt-3 text-gray-400">
            Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Beatae, aliquam.
          </p>

          <Image
            src="/assets/next.js-illustration@8x.png"
            width={128.3 * 4.5}
            height={53.45}
            // style={{ transformOrigin: "top left" }}
            alt=""
            className="mx-auto"
          />
        </div>
      </main>
      <footer className="p-4 text-[12px] text-gray-500 mt-10">
        <div className="wrapper max-w-4xl mx-auto">
          <div className="">&copy; {Date()}</div>
        </div>
      </footer>
    </>
  );
}
