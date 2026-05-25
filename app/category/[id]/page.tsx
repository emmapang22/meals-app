import { Meals } from "@/app/models/Meals";
import Image from "next/image";
import Link from "next/link";

type MealCategoryPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MealCategoryPage({
  params,
}: MealCategoryPageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`,
  );

  const data: Meals = await response.json();

  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1 className="text-2xl">{id} dishes</h1>

      <div className="grid grid-cols-12 gap-4 w-full">
        {data.meals.map((m) => (
          <div
            key={m.idMeal}
            className="flex flex-col items-center gap-2 col-span-12 px-4 py-6 md:col-span-6 lg:col-span-3 bg-amber-200 text-black"
          >
            <div>
              <Image
                src={m.strMealThumb}
                alt={m.strMeal}
                width={200}
                height={200}
                loading="eager"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center">{m.strMeal}</p>
          </div>
        ))}
      </div>
    </>
  );
}
