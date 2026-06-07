import Link from "next/link";
import { Category } from "../models/Category";
import Image from "next/image";

type CategoryCardProps = {
  category: Category;
};

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <li
      className="col-span-12 md:col-span-4 lg:col-span-2"
      aria-label={category.strCategory}
    >
      <Link href={`/category/${category.strCategory}`} className="">
        <div className="flex flex-col items-center  gap-2 py-4 px-6 bg-white text-black rounded-xl ">
          <div className="">
            <Image
              src={category.strCategoryThumb}
              alt={category.strCategory}
              width={100}
              height={100}
              loading="eager"
              className="w-full h-auto"
            />
          </div>

          <h3 className="font-sans h5">{category.strCategory}</h3>
        </div>
      </Link>
    </li>
  );
};
