import Link from "next/link";
import type { ArticleItem } from "@/types";

interface Props {
  category: string;
  articles: ArticleItem[];
}

const ArticleItemList = ({ category, articles }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-[Garamond]">{category}</h2>
      <div className="flex flex-col text-lg">
        {articles.map((article, id) => (
          <Link
            href={`/${article.id}`}
            key={id}
            className="text-neutral-900 text-[12px] hover:text-indigo-700 transition duration-150"
          >
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleItemList;
