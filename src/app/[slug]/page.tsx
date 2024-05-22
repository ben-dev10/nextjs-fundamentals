import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticleData } from "@/lib/articles";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <section>
      <div className="mx-auto max-w-4xl">
        <div className="flex p-3 px-4 text-[12px] items-center">
          <Link
            href={"/blog"}
            className="flex items-center flex-row gap-1 place-items-center"
          >
            <ArrowLeftIcon width={16} />
            <p className="">back to home</p>
          </Link>
          <p className="ml-auto">{articleData.date.toString()}</p>
        </div>
        <article
          className="article text-[12px] p-5"
          dangerouslySetInnerHTML={{ __html: articleData.contentHTML }}
        ></article>
      </div>
    </section>
  );
};

export default Article;
