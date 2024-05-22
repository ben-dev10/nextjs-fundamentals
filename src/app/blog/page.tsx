import { getCategorisedArticles } from "@/lib/articles";
import ArticleItemList from "@/components/ArticleListItem";

export default function BlogPage() {
  const articles = getCategorisedArticles();
  console.log(articles);

  return (
    <section className="p-5 max-w-4xl mx-auto mt-2 flex flex-col gap-10 mb-20">
      <header className="">
        <h1 className="text-2xl text-center text-neutral-900 font-[Garamond] font-bold">
          Blog
        </h1>
      </header>
      <section className="blog-section sm:grid sm:grid-cols-2 flex flex-col gap-10 mx-auto max-w-[450px]">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))}
      </section>
    </section>
  );
}
