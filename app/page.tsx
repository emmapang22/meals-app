import Image from "next/image";
import { Categories } from "./models/Categories";
import Link from "next/link";

export default async function Home() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );
  const data: Categories = await response.json();

  return (
    <div className="grid grid-cols-12 gap-4 w-full">
      {data.categories.map((c) => (
        <div
          key={c.idCategory}
          className="flex flex-col items-center bg-white text-black p-2 col-span-12 md:col-span-4 lg:col-span-2"
        >
          <div className="">
            <Link href={`/category/${c.strCategory}`}>
              <Image
                src={c.strCategoryThumb}
                alt={c.strCategory}
                width={100}
                height={100}
                loading="eager"
                className="w-full h-auto"
              />
            </Link>
          </div>

          <Link href={`/category/${c.strCategory}`}>
            <p className="">{c.strCategory}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
